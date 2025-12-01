import nodemailer from "nodemailer";
import { ServerClient } from "postmark";

const hasPostmark = Boolean(process.env.POSTMARK_TOKEN && process.env.MAIL_FROM);
const hasGmail = Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);

const postmarkClient = hasPostmark ? new ServerClient(process.env.POSTMARK_TOKEN) : null;
const gmailTransporter =
  hasGmail &&
  nodemailer.createTransport({
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

  try {
    const body = await parseJsonBody(req);
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!hasPostmark && !hasGmail) {
      console.error("Missing mail configuration");
      return res.status(500).json({ error: "Mail not configured" });
    }

    const subjectLine = subject || "Portfolio contact";
    const fromLabel = name ? `${name} via Airica Portfolio` : "Airica Portfolio";

    if (hasPostmark) {
      // Send to owner
      await postmarkClient.sendEmail({
        From: `${fromLabel} <${process.env.MAIL_FROM}>`,
        To: process.env.MAIL_FROM,
        ReplyTo: email,
        Subject: subjectLine,
        TextBody: message,
      });
      // Confirmation to sender
      await postmarkClient.sendEmail({
        From: `${fromLabel} <${process.env.MAIL_FROM}>`,
        To: email,
        Subject: `Thanks for reaching out, ${name}!`,
        TextBody:
          `Hi ${name},\n\nThanks for your message. I received it and will reply soon.\n\n` +
          (subject ? `Subject: ${subject}\n` : "") +
          `${message}\n\n— Airica`,
      });
    } else if (gmailTransporter) {
      // Fallback: Gmail
      await gmailTransporter.sendMail({
        from: `"${fromLabel}" <${process.env.GMAIL_USER}>`,
        replyTo: email,
        to: process.env.GMAIL_USER,
        subject: subjectLine,
        text: message,
      });
      try {
        await gmailTransporter.sendMail({
          from: `"${fromLabel}" <${process.env.GMAIL_USER}>`,
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
    }

    // Send a confirmation email back to the sender. If this fails, log and still return success.

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
