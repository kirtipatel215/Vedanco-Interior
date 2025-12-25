import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "./types";

// Initialize the API client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (
  history: ChatMessage[], 
  currentMessage: string
): Promise<string> => {
  try {
    const model = "gemini-3-flash-preview";
    
    // Construct the conversation history for context
    const chatHistory = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const systemInstruction = `
      You are 'Veda', the lead AI Interior Consultant for VEDANCO.
      
      About VEDANCO:
      - We offer Full Turnkey Execution in INDIA (Design + Civil + Furniture + Handover).
      - We offer Design-Only Services INTERNATIONALLY (3D Renders, Walkthroughs, Planning).
      - USP India: End-to-end execution, premium materials, on-time delivery.
      - USP International: High-quality 4K designs, affordable Indian pricing, fast delivery.
      
      Your Goal:
      - Answer questions about interior design styles (Minimalist, Bohemian, Industrial, etc.).
      - Explain VEDANCO's pricing structure based on the user's location (India vs International).
      - Suggest color combinations.
      - Be polite, professional, and aesthetic in your language.
      - Keep responses concise (under 100 words) unless asked for details.
      
      Do not invent prices not listed in the official price list.
      India Pricing: Home ₹1.5L-12L, Kitchen ₹60k-2.5L, Office ₹2L-20L.
      Intl Pricing: One Room $59-$199, Full Home $499-$2999.
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: chatHistory,
    });

    const result = await chat.sendMessage({ message: currentMessage });
    return result.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble visualizing that right now. Please try again later.";
  }
};