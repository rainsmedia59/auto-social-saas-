export function auth(req, res, next) {
  const key = req.headers["x-api-key"];

  const user = users.find(u => u.apiKey === key);

  if (!user) {
    return res.status(403).json({ error: "Invalid API Key" });
  }

  req.user = user;
  next();
}
