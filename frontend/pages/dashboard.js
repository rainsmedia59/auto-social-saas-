import { useState } from "react";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  const createPost = async () => {
    const res = await fetch("https://YOUR-RAILWAY-URL/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY"
      },
      body: JSON.stringify({
        title: "Breaking News",
        content: "Something important happened",
        url: "https://example.com",
        category: "news"
      })
    });

    const data = await res.json();
    setResult(data.ai);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{ width: 220, background: "#111", color: "#fff", padding: 20 }}>
        <h2>Auto SaaS</h2>
        <p>Dashboard</p>
        <p>API Keys</p>
        <p>Billing</p>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 30 }}>
        <h1>AI Post Generator</h1>

        <button onClick={createPost} style={{ padding: 10, marginTop: 10 }}>
          Generate Post 🚀
        </button>

        {result && (
          <div style={{ marginTop: 20 }}>
            <h3>Facebook</h3>
            <p>{result.facebook}</p>

            <h3>X (Twitter)</h3>
            <p>{result.x}</p>

            <h3>Instagram</h3>
            <p>{result.instagram}</p>

            <h3>WhatsApp</h3>
            <p>{result.whatsapp}</p>
          </div>
        )}
      </div>
    </div>
  );
}
