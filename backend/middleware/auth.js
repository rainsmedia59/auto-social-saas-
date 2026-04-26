export function auth(req, res, next) {
  const key = req.headers["x-api-key"];

  if (!key || key !== "demo_key_123") {
    return res.status(403).json({ error: "Invalid API Key" });
  }

  next();
}
