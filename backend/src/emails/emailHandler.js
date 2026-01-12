import { resendClient, sender } from "../lib/resend.js";
import { welcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  // Basic safety check so we don't even try if env vars are missing
  if (!process.env.RESEND_API_KEY || !sender.email || !sender.name) {
    console.error(
      "Email config missing. Make sure RESEND_API_KEY, EMAIL_FROM and EMAIL_NAME are set in backend/.env"
    );
    return;
  }

  try {
    console.log("Sending welcome email TO:", email, "FROM:", `${sender.name} <${sender.email}>`);

    const { data, error } = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Chatify 🎉",
      html: welcomeEmailTemplate(name, clientURL),
    });

    if (error) {
      console.error("Error sending welcome emails (API error):", error);
      return;
    }

    console.log("Welcome email sent successfully", data);
  } catch (err) {
    console.error("Error sending welcome emails (exception):", err);
  }
};
