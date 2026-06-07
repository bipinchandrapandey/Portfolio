/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateRobotVoiceResponse } from '../lib/ai-service';

export default function InteractiveRobot() {
    const [isTalking, setIsTalking] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [speechText, setSpeechText] = useState('');
    const recognitionRef = useRef<any>(null);
    const sessionActiveRef = useRef(false);

    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onresult = async (event: any) => {
                if (!sessionActiveRef.current) return;
                const transcript = event.results[0][0].transcript;
                setIsThinking(true);
                setSpeechText("Processing...");

                try {
                    const text = await generateRobotVoiceResponse(transcript);
                    if (!sessionActiveRef.current) return;
                    setSpeechText(text);

                    if ('speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const utterance = new SpeechSynthesisUtterance(text);
                        utterance.onstart = () => setIsTalking(true);
                        utterance.onend = () => {
                            setIsTalking(false);
                            if (sessionActiveRef.current) {
                                setTimeout(() => {
                                    try {
                                        if (recognitionRef.current) {
                                            recognitionRef.current.start();
                                        }
                                    } catch (e) {
                                        console.log("Speech recognition restart failed:", e);
                                    }
                                }, 500);
                            }
                        };
                        window.speechSynthesis.speak(utterance);
                    }
                } catch (err) {
                    console.error("AI response error:", err);
                    setSpeechText("Connection failure...");
                    setTimeout(() => setSpeechText(''), 2000);
                } finally {
                    setIsThinking(false);
                }
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error:", event.error);
                if (event.error === 'not-allowed') {
                    setSpeechText("Microphone access denied");
                    setTimeout(() => setSpeechText(''), 3000);
                }
            };

            recognition.onend = () => {
                if (sessionActiveRef.current && !isTalking && !isThinking) {
                    try {
                        if (recognitionRef.current) {
                            recognitionRef.current.start();
                        }
                    } catch (e) {
                        console.log("Speech recognition auto-restart failed:", e);
                    }
                }
            };

            recognitionRef.current = recognition;
        } else {
            console.warn("SpeechRecognition API not supported in this browser");
        }
    }, [isTalking, isThinking]);

    const handleToggle = () => {
        const nextState = !isSessionActive;
        setIsSessionActive(nextState);
        sessionActiveRef.current = nextState;

        if (nextState) {
            setSpeechText("Voice systems online. How can I help?");
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance("Voice systems online. How can I help?");
                utterance.onstart = () => setIsTalking(true);
                utterance.onend = () => {
                    setIsTalking(false);
                    try {
                        if (recognitionRef.current) {
                            recognitionRef.current.start();
                        } else {
                            setSpeechText("Voice recognition not available");
                            setTimeout(() => setSpeechText(''), 3000);
                        }
                    } catch (e) {
                        console.error("Failed to start speech recognition:", e);
                        setSpeechText("Microphone access needed");
                        setTimeout(() => setSpeechText(''), 3000);
                    }
                };
                window.speechSynthesis.speak(utterance);
            } else {
                setSpeechText("Text-to-speech not supported");
                setTimeout(() => setSpeechText(''), 3000);
            }
        } else {
            window.speechSynthesis.cancel();
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    console.log("Error stopping recognition:", e);
                }
            }
            setSpeechText('');
            setIsTalking(false);
        }
    };

    return (
        <div className="relative group flex flex-col items-center" onClick={handleToggle}>
            {/* Holographic Speech Bubble */}
            <AnimatePresence>
                {speechText && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: -20 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute -top-16 bg-white/10 dark:bg-purple-900/20 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-500/30 z-50 min-w-[150px] text-center"
                    >
                        <p className="text-sm font-medium tracking-wide">{speechText}</p>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500/30 rotate-45 border-r border-b border-purple-500/50" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Robot Model */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotateZ: isTalking ? [-1, 1, -1] : [0, 0, 0]
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: { duration: 0.1, repeat: Infinity }
                }}
                className="relative w-64 h-64 flex items-center justify-center cursor-pointer"
            >
                {/* Glow Background Layer */}
                <div className={`absolute inset-0 bg-purple-500/20 rounded-full blur-[60px] transition-opacity duration-1000 ${isSessionActive ? 'opacity-100' : 'opacity-40'}`} />

                <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <defs>
                        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#1e1b4b', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#312e81', stopOpacity: 1 }} />
                        </linearGradient>
                        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                        </linearGradient>
                        <filter id="neonGlow">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Floating Arms / Pods */}
                    <motion.ellipse
                        cx="40" cy="120" rx="12" ry="25" fill="url(#bodyGradient)" stroke="#8b5cf6" strokeWidth="1"
                        animate={isSessionActive ? { y: [-5, 5, -5], rotate: [-5, 5, -5] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.ellipse
                        cx="160" cy="120" rx="12" ry="25" fill="url(#bodyGradient)" stroke="#8b5cf6" strokeWidth="1"
                        animate={isSessionActive ? { y: [5, -5, 5], rotate: [5, -5, 5] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Main Torso */}
                    <rect x="65" y="110" width="70" height="50" rx="20" fill="url(#bodyGradient)" stroke="#8b5cf6" strokeWidth="1.5" />
                    {/* Energy Core */}
                    <motion.circle
                        cx="100" cy="135" r="12" fill="#a855f7" filter="url(#neonGlow)"
                        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Neck Connector */}
                    <rect x="90" y="95" width="20" height="15" fill="#4c1d95" />

                    {/* Head - Sleek Visor Design */}
                    <rect x="55" y="35" width="90" height="70" rx="30" fill="url(#bodyGradient)" stroke="#8b5cf6" strokeWidth="2" />
                    <rect x="65" y="45" width="70" height="50" rx="20" fill="url(#screenGradient)" />
                    
                    {/* Glowing Eyes / Visor Line */}
                    <motion.g animate={isThinking ? { opacity: [1, 0.3, 1] } : {}}>
                        {/* Eye Lenses */}
                        <circle cx="85" cy="70" r="6" fill="#a855f7" filter="url(#neonGlow)" />
                        <circle cx="115" cy="70" r="6" fill="#a855f7" filter="url(#neonGlow)" />
                        
                        {/* Scanning Line */}
                        {isThinking && (
                            <motion.rect
                                x="70" y="60" width="60" height="1" fill="#ec4899"
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}
                    </motion.g>

                    {/* Talking Waveform */}
                    <AnimatePresence>
                        {isTalking && (
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <motion.line x1="85" y1="85" x2="115" y2="85" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" strokeDasharray="2,4" animate={{ strokeDashoffset: [0, 10] }} transition={{ repeat: Infinity, duration: 0.5 }} />
                            </motion.g>
                        )}
                    </AnimatePresence>
                </svg>

                {/* Pulsing Base Ring */}
                <div className={`absolute bottom-4 w-32 h-8 bg-purple-500/10 rounded-[100%] blur-xl transition-all duration-500 ${isSessionActive ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`} />
            </motion.div>

            {/* Premium Control Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex flex-col items-center gap-1"
            >
                <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border ${isSessionActive ? 'bg-purple-500 text-white border-purple-400 animate-pulse' : 'bg-transparent text-purple-400 border-purple-500/30'}`}>
                    {isSessionActive ? 'Neural Link Active' : 'Initialize AI Unit'}
                </span>
                <p className="text-gray-500 text-[10px] mt-1 italic">Click to activate voice commands</p>
            </motion.div>
        </div>
    );
}
