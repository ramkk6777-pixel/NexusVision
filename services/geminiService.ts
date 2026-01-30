
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a response from the Gemini AI assistant for NexusCore.
 * Adheres to strict @google/genai initialization and usage guidelines.
 */
export const getGeminiAssistantResponse = async (userMessage: string) => {
  // Always initialize a new GoogleGenAI instance inside the function 
  // to ensure it uses the most up-to-date API key from the environment.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI assistant for NexusCore, a world-class enterprise software company. 
        Your products include:
        1. NexusAnalytics: A real-time data visualization platform.
        2. CoreWorkflow: An automated operations management system.
        3. ShieldGuard: Next-gen cybersecurity for cloud infrastructure.
        
        Keep answers professional, concise, and helpful. If asked about pricing or plans, inform the user that we offer bespoke solutions tailored to enterprise needs and they should contact our sales team for a custom quote or a demo.`,
        temperature: 0.7,
      },
    });

    // Access the .text property directly as it is a getter, not a method.
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant is currently unavailable. Please try again later.";
  }
};
