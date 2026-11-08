
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée.",
    });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Veuillez remplir les champs obligatoires.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Adresse e-mail invalide.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Erreur de configuration du serveur.",
      });
    }

    const resend = new Resend(apiKey);

    const escapeHTML = (value = "") =>
      String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        };

        return entities[char];
      });

    const safeName = escapeHTML(name.trim());
    const safeEmail = escapeHTML(email.trim());
    const safePhone = escapeHTML(phone?.trim() || "Non renseigné");
    const safeMessage = escapeHTML(message.trim()).replace(/\n/g, "<br>");

    const emailContent = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
        <h2>Nouveau message depuis le site Inova Sphere</h2>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <hr />
        <h3>Message :</h3>
        <p>${safeMessage}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Inova Sphere <noreply@inovasphere.tech>",
      to: ["manager@inovasphere.tech"],
      replyTo: email.trim(),
      subject: `Nouveau message de contact — ${name.trim()}`,
      html: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(502).json({
        success: false,
        message: "Impossible d'envoyer votre message. Veuillez réessayer.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Votre message a été envoyé avec succès.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer.",
    });
  }
}
