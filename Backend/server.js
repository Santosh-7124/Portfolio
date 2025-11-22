require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

// Warm-up route
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Contact API
app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.TO_EMAIL,
            subject: `New Contact Form Message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        console.log("Email Sent:", data);
        res.json({ ok: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Resend Email Error:", error);
        res.status(500).json({ ok: false, error: "Email failed to send" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
