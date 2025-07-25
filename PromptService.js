
import { OPENAI_API_KEY } from '@env';

export async function getPromptResponse(prompt) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await res.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    return "Error generating response. Please check your API key or internet connection.";
  }
}
