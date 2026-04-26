import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState(null);

  const sendPost = async () => {
    const res = await fetch("https://auto-social-saas-production.up.railway.app/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "demo_key_123"
      },
      body: JSON.stringify({
        title: "Breaking News",
        content: "Something big happened",
        url: "https://example.com",
        category: "news"
      })
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Auto Social SaaS</h1>

      <button onClick={sendPost}>
        Send Test Post 🚀
      </button>

      {response && (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}
