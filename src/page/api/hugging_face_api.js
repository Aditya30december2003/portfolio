export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
  
    const { prompt } = req.body;
  
    try {
      const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      });
  
      const data = await response.json();
      const output = data?.[0]?.generated_text || "Sorry, I couldn't generate a response.";
      res.status(200).json({ reply: output });
    } catch (err) {
      res.status(500).json({ error: "Hugging Face request failed." });
    }
  }
  