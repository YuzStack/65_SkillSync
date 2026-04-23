import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getJobAnalysis(user, job) {
  const prompt = `
    You are a career expert. Analyze the match between this user and job.

    USER PROFILE:
    Bio: ${user.bio}
    Skills: ${user.skills.join(', ')}

    JOB DESCRIPTION:
    Title: ${job.jobTitle}
    Description: ${job.jobDescription}

    Return ONLY a JSON object with this exact structure:
    {
      "percentage": 85,
      "insights": ["insight 1", "insight 2", "insight 3"]
    }

    The insights should be addressing the user directly.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return JSON.parse(response.text);
  } catch {
    throw new Error();
  }
}
