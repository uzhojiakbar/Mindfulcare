const axios = require("axios");

const sendTelegramMessage = async (message, reply_markup) => {
  const token = process.env.BOT_TOKEN;
  const chatId = process.env.GROUP_ID;

  console.log("token", token);
  console.log("chatId", chatId);

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await axios.post(url, {
    chat_id: `${chatId}`,
    text: message,
    parse_mode: "HTML", // HTML yoki Markdown qo'llaniladi, textga mos yozish shart
    reply_markup,
  });
};

module.exports = { sendTelegramMessage };
