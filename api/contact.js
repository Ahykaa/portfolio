import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function parseJsonBody(req) {
  if (req.body) return Promise.resolve(req.body);
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing Gmail env vars");
    return res.status(500).json({ error: "Mail not configured" });
  }

  try {
    const body = await parseJsonBody(req);
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: subject || "Portfolio contact",
      text: message,
    });

    // Send a confirmation email back to the sender. If this fails, log and still return success.
    try {
      await transporter.sendMail({
        from: `"Airica Portfolio" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        text:
          "Hi " +
          name +
          ",\n\nThanks for getting in touch. I received your message and will reply soon.\n\nYour message:\n" +
          (subject ? "Subject: " + subject + "\n" : "") +
          message +
          "\n\n— Airica",
      });
    } catch (confirmError) {
      console.error("Confirmation mail failed:", confirmError);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
