require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Gmail transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.TO_EMAIL,
        subject: `New Contact Form Message from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ ok: true, message: "Message sent!" });
    } catch (err) {
        console.error("Email error:", err);
        res.status(500).json({ ok: false, error: "Email failed" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
