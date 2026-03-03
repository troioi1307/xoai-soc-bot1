const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

const TOKEN = "8580752431:AAFJ337EXpiIlh2SAwtVZ930OC_GRkvIBm0";
const PORT = process.env.PORT || 3000;

app.post("/webhook", async (req, res) => {
  if (req.body.message) {
    const chatId = req.body.message.chat.id;
    const text = req.body.message.text;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "Tiệm Nhà Xoài Sóc đã nhận: " + text
      })
    });
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("Bot đang chạy...");
});
