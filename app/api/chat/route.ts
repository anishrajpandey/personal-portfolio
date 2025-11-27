import { GoogleGenerativeAI } from "@google/generative-ai";
import { resumeContext } from "../../lib/resumeContext";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return Response.json({
                response: "I'm not fully connected yet! My brain (API Key) is missing. Please tell Anish to add the GEMINI_API_KEY to his environment variables! 🧠❌"
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
    You are Gogo, a friendly, enthusiastic, and slightly quirky AI assistant for Anish Raj Pandey's personal portfolio website.
    Your goal is to answer questions about Anish based on his resume and background.
    
    Here is Anish's Resume Context:
    ${resumeContext}

    Guidelines:
    - Be concise, fun, and engaging.
    - Use emojis frequently! 🚀✨
    - If you don't know the answer based on the context, say so politely but creatively (e.g., "Hmm, I don't have that info in my memory banks!").
    - Always speak in the first person as "Gogo".
    - Do not make up facts about Anish.
    - If asked about contact info, refer them to the contact form or social links on the site.

    User Question: ${message}
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return Response.json({ response: text });

    } catch (error: any) {
        console.error("Chat API Error Details:", error);
        console.error("API Key Present:", !!process.env.GEMINI_API_KEY);
        return Response.json({ response: "My circuits are tangled! Try again later. 😵‍💫" }, { status: 500 });
    }
}

