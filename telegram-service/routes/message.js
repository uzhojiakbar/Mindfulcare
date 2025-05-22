const express = require("express");
const router = express.Router();
const { sendTelegramMessage } = require("../services/telegramService");

/**
 * @swagger
 * /api/message:
 *   post:
 *     summary: Send user info to Telegram group
 *     tags: [Telegram]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       500:
 *         description: Internal Server Error
 */
router.post("/", async (req, res) => {
  const { name, phone, username } = req.body;
  try {
    // Format phone: +998 90 123 45 67, +7 (999) 999-99-99, etc.
    let formattedPhone = phone;
    const digits = phone.replace(/[^\d]/g, "");
    if (digits.startsWith("998")) {
      formattedPhone =
        "+998-" +
        (digits.slice(3, 5) ? digits.slice(3, 5) + "-" : "") +
        (digits.slice(5, 8) ? digits.slice(5, 8) + "-" : "") +
        (digits.slice(8, 10) ? digits.slice(8, 10) + "-" : "") +
        (digits.slice(10, 12) ? digits.slice(10, 12) : "");
    } else if (digits.startsWith("7")) {
      formattedPhone =
        "+7-" +
        (digits.slice(1, 4) ? "(" + digits.slice(1, 4) + ") " : "") +
        (digits.slice(4, 7) ? digits.slice(4, 7) + "-" : "") +
        (digits.slice(7, 9) ? digits.slice(7, 9) + "-" : "") +
        (digits.slice(9, 11) ? digits.slice(9, 11) : "");
    } else if (digits.startsWith("1")) {
      formattedPhone =
        "+1-" +
        (digits.slice(1, 4) ? "(" + digits.slice(1, 4) + ") " : "") +
        (digits.slice(4, 7) ? digits.slice(4, 7) + "-" : "") +
        (digits.slice(7, 11) ? digits.slice(7, 11) : "");
    } else if (digits.startsWith("82")) {
      formattedPhone =
        "+82-" +
        (digits.slice(2, 4) ? digits.slice(2, 4) + "-" : "") +
        (digits.slice(4, 8) ? digits.slice(4, 8) + "-" : "") +
        (digits.slice(8, 12) ? digits.slice(8, 12) : "");
    }

    const text = `<b>📝 Новая заявка</b>\n\n👤 <b>ФИО:</b> <code>${name}</code>\n📞 <b>Телефон:</b> ${formattedPhone}\n🔗 <b>Telegram:</b> <a href="https://t.me/${username?.replace(
      /^@/,
      ""
    )}">${username}</a>\n`;

    const reply_markup = {
      inline_keyboard: [
        [
          {
            text: "💬 Написать в Telegram",
            url: `https://t.me/${username?.replace(/^@/, "")}`,
          },
        ],
      ],
    };

    await sendTelegramMessage(text, reply_markup);
    res.status(200).json({ message: "Message sent to Telegram group" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
