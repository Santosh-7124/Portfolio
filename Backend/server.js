require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// FIX CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Gmail Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // must be app password!
    },
    tls: {
        rejectUnauthorized: false,
    }
});

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ ok: false, error: "Missing fields" });
        }

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.TO_EMAIL,
            subject: `New Contact Form Submission: ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
      `,
        });

        res.json({ ok: true });
    } catch (err) {
        console.log("Email Error:", err);
        res.status(500).json({ ok: false, error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
