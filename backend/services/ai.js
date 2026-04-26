export async function generateAI(title, content, url, category) {

  return {
    facebook: `🔥 ${title}\n\nRead more: ${url}`,
    x: `${title} 🔥 ${url}`,
    instagram: `💥 ${title}\n\n#${category} #trending\n${url}`,
    whatsapp: `🔥 ${title}\nTap here: ${url}`
  };
}
