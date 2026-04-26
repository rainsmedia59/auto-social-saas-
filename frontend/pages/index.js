import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", padding: 80 }}>
      <h1>Auto Social SaaS</h1>
      <p>AI-powered social media automation platform</p>

      <button onClick={() => router.push("/login")}>
        Get Started
      </button>
    </div>
  );
}
