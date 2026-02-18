import nodemailer from "nodemailer";
import type { ContactFormData } from "./validation";

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const contactEmail = process.env.CONTACT_EMAIL || process.env.GMAIL_USER;

  const name = escapeHtml(data.name);
  const business = escapeHtml(data.businessName);
  const phone = escapeHtml(data.phone);
  const email = escapeHtml(data.email);
  const trade = escapeHtml(data.tradeType);
  const interest = escapeHtml(data.interest);
  const message = data.message ? escapeHtml(data.message) : "<em>No message</em>";

  await transporter.sendMail({
    from: `"InvoxAI Website" <${process.env.GMAIL_USER}>`,
    to: contactEmail,
    replyTo: data.email,
    subject: `New Enquiry from ${data.name} — ${data.businessName}`,
    text: [
      `Name: ${data.name}`,
      `Business: ${data.businessName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Trade: ${data.tradeType}`,
      `Interested in: ${data.interest}`,
      `Message: ${data.message || "(none)"}`,
    ].join("\n"),
    html: `
      <div style="font-family: sans-serif; max-width: 560px;">
        <h2 style="color: #D4A853; margin-bottom: 24px;">New Enquiry — InvoxAI</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Business</td><td style="padding: 8px 0;">${business}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Trade</td><td style="padding: 8px 0;">${trade}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Interested in</td><td style="padding: 8px 0;">${interest}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Message</td><td style="padding: 8px 0;">${message}</td></tr>
        </table>
      </div>
    `,
  });
}
