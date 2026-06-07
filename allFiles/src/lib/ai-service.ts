import { GoogleGenerativeAI } from '@google/generative-ai';
import { BIPIN_PROFILE, getLocalFAQResponse } from './faq-data';

/**
 * Unified AI Service for the Portfolio
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';

console.log("AI Service Status:");
console.log("- Gemini Key:", GEMINI_API_KEY ? "Loaded" : "MISSING");
console.log("- OpenAI Key:", OPENAI_API_KEY ? "Loaded" : "MISSING");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

/**
 * OpenAI Request Helper
 */
async function fetchOpenAI(messages: any[], systemInstruction: string) {
    console.log("Calling OpenAI...");
    if (!OPENAI_API_KEY) throw new Error("OpenAI Key missing");

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: systemInstruction },
                    ...messages
                ],
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("OpenAI HTTP Error:", response.status, errorText);
            throw new Error(`OpenAI Error ${response.status}: ${errorText}`);
        }
        const data = await response.json();
        console.log("OpenAI Success!");
        return data.choices[0].message.content;
    } catch (err: any) {
        console.error("OpenAI Fetch Exception:", err.message);
        throw err;
    }
}

/**
 * Robot Voice Response (with OpenAI primary and Gemini fallback)
 */
let robotHistory: any[] = [];

export async function generateRobotVoiceResponse(userInput: string | null = null): Promise<string> {
    // 1. Try local FAQ database first for immediate answer
    if (userInput) {
        const localMatch = getLocalFAQResponse(userInput);
        if (localMatch) {
            // Remove emojis and make it short (1-2 sentences) for voice speech compatibility
            const cleanText = localMatch
                .replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '')
                .trim();
            const sentences = cleanText.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
            return sentences.slice(0, 2).join('. ') + '.';
        }
    }

    const systemInstruction = `You are a friendly, witty, robotic AI assistant on Bipin's portfolio. Respond in 1-2 short, punchy sentences. No emojis.
    
Here is Bipin's profile information:
${BIPIN_PROFILE}`;

    const prompt = userInput || "Greet the user briefly.";

    // Check if OpenAI key is available, if not use Gemini directly
    const hasOpenAIKey = OPENAI_API_KEY && OPENAI_API_KEY.length > 10;
    
    if (hasOpenAIKey) {
        try {
            // Try OpenAI Primary
            const history = robotHistory.map(h => ({ role: h.role, content: h.content }));
            const responseText = await fetchOpenAI([...history, { role: "user", content: prompt }], systemInstruction);
            
            robotHistory.push({ role: "user", content: prompt });
            robotHistory.push({ role: "assistant", content: responseText });
            if (robotHistory.length > 10) robotHistory = robotHistory.slice(-10);
            
            return responseText;
        } catch (error) {
            console.warn("OpenAI failed, falling back to Gemini:", error);
            // Continue to Gemini fallback
        }
    } else {
        console.log("OpenAI key missing, using Gemini directly");
    }

    // Try Gemini
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        // Update history for consistency
        robotHistory.push({ role: "user", content: prompt });
        robotHistory.push({ role: "assistant", content: responseText });
        if (robotHistory.length > 10) robotHistory = robotHistory.slice(-10);
        
        return responseText;
    } catch (fallbackError) {
        console.error("Gemini also failed:", fallbackError);
        // Return a set of fun fallback responses
        const fallbackResponses = [
            "Hello! I'm Bipin's robotic assistant. Nice to meet you!",
            "Systems are optimal. How can I assist you today?",
            "Greetings! I'm here to help you explore this portfolio.",
            "Welcome! I'm the AI assistant, ready to answer your questions."
        ];
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
}

/**
 * AI Chat Assistant
 */
export async function generateChatResponse(message: string, history: any[]): Promise<string> {
    // 1. Try local FAQ database first for instant reply
    const localMatch = getLocalFAQResponse(message);
    if (localMatch) {
        return localMatch;
    }

    const systemInstruction = `You are Bipin Chandra Pandey's personal AI assistant. Help visitors explore his portfolio, skills, and contact info. Be professional, friendly, and helpful.

Here is Bipin's official profile information:
${BIPIN_PROFILE}

Answer questions accurately based on this profile. If asked about his transition from pharmacy to IT, explain that he developed a passion for coding during B.Pharm and decided to do an MCA to build his career in full-stack development. Keep answers engaging, professional, and concise.`;

    try {
        const formattedHistory = history.map(h => ({
            role: h.role === 'model' ? 'assistant' : 'user',
            content: h.parts[0].text
        }));
        return await fetchOpenAI([...formattedHistory, { role: "user", content: message }], systemInstruction);
    } catch (error) {
        console.warn("Chat OpenAI failed, falling back to Gemini:", error);
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction });
            const chat = model.startChat({ history: history });
            const result = await chat.sendMessage(message);
            return result.response.text();
        } catch (fallbackError) {
            console.error("Chat AI fallback failed:", fallbackError);
            return "I am having trouble connecting right now.";
        }
    }
}
