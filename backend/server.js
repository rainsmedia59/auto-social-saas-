import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { auth } from "./middleware/auth.js";
import { generateAI } from "./services/ai.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

/**
 * MAIN SAAS ENDPOINT
 */
app.post("/api/post", auth, async (req, res) => {
  const { title, content, url, category } = req.body;

  const ai = await generateAI(title, content, url, category);

  res.json({
    success: true,
    message: "Content processed",
    ai
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("🚀 Backend running on", PORT));
