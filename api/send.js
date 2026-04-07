module.exports = async (req, res) => {
  const { pesan } = req.body;

  const TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: pesan
      })
    });

    const data = await response.json();

    if (data.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }

  } catch (err) {
    res.status(500).json({ success: false });
  }
};