import nodemailer from 'nodemailer';

// Configuration SMTP - À personnaliser selon votre fournisseur
const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour autres ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// Interface pour les données d'email
export interface EmailData {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}

// Interface pour les données de contact
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Créer le transporteur SMTP
const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('Configuration SMTP manquante. Vérifiez vos variables d\'environnement.');
  }

  return nodemailer.createTransport(smtpConfig);
};

// Service principal d'envoi d'email
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = createTransporter();
  }

  // Méthode pour envoyer un email simple
  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      const mailOptions = {
        from: emailData.from || process.env.SMTP_FROM || process.env.SMTP_USER,
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.text,
        html: emailData.html,
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email envoyé avec succès:', result.messageId);
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return false;
    }
  }

  // Méthode spécialisée pour les formulaires de contact
  async sendContactEmail(contactData: ContactFormData): Promise<boolean> {
    const { name, email, subject, message } = contactData;

    // Email HTML formaté
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1976d2, #003366); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">💡 Nouvelle idée reçue</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Boîte à Idées - Rassemblement Pennois</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #1976d2; margin-top: 0;">Informations du contributeur</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Nom :</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email :</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Sujet de l'idée :</strong> ${subject}</p>
          </div>
          
          <h3 style="color: #1976d2;">💡 Idée proposée</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #1976d2;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="background: #e9ecef; padding: 20px; text-align: center; color: #6c757d;">
          <p style="margin: 0; font-size: 14px;">
            Idée reçue via la Boîte à Idées - Rassemblement Pennois<br>
            Date: ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      </div>
    `;

    // Version texte pour les clients qui ne supportent pas HTML
    const textContent = `
💡 Nouvelle idée reçue - Boîte à Idées Rassemblement Pennois

Informations du contributeur:
- Nom: ${name}
- Email: ${email}
- Sujet de l'idée: ${subject}

💡 Idée proposée:
${message}

---
Idée reçue via la Boîte à Idées - Rassemblement Pennois
Date: ${new Date().toLocaleString('fr-FR')}
    `;

    return await this.sendEmail({
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER || '',
      subject: `${name} - ${subject}`,
      text: textContent,
      html: htmlContent,
    });
  }

  // Méthode pour envoyer un accusé de réception au visiteur
  async sendConfirmationEmail(contactData: ContactFormData): Promise<boolean> {
    const { name, email, subject } = contactData;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1976d2, #003366); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">💡 Idée reçue</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Boîte à Idées - Rassemblement Pennois</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <p style="font-size: 18px; color: #1976d2; margin-top: 0;">Bonjour ${name},</p>
          
          <p>Nous avons bien reçu votre idée concernant "<strong>${subject}</strong>" et nous vous remercions de votre contribution à notre projet municipal.</p>
          
          <p>Notre équipe examinera votre suggestion avec attention et l'intégrera dans notre réflexion pour améliorer Les Pennes-Mirabeau.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <p style="margin: 0; color: #28a745; font-weight: bold;">✅ Votre idée a été transmise avec succès</p>
          </div>
          
          <p>Les meilleures idées citoyennes enrichissent notre programme et nous permettent de mieux répondre aux attentes des Pennois.</p>
          
          <p>Merci de votre engagement pour notre commune !</p>
        </div>
        
        <div style="background: #e9ecef; padding: 20px; text-align: center; color: #6c757d;">
          <p style="margin: 0; font-size: 14px;">
            Rassemblement Pennois - Les Pennes-Mirabeau<br>
            Élections municipales 2026
          </p>
        </div>
      </div>
    `;

    const textContent = `
Bonjour ${name},

Nous avons bien reçu votre idée concernant "${subject}" et nous vous remercions de votre contribution à notre projet municipal.

Notre équipe examinera votre suggestion avec attention et l'intégrera dans notre réflexion pour améliorer Les Pennes-Mirabeau.

✅ Votre idée a été transmise avec succès

Les meilleures idées citoyennes enrichissent notre programme et nous permettent de mieux répondre aux attentes des Pennois.

Merci de votre engagement pour notre commune !

---
Rassemblement Pennois - Les Pennes-Mirabeau
Élections municipales 2026
    `;

    return await this.sendEmail({
      to: email,
      subject: `💡 Idée reçue - ${subject}`,
      text: textContent,
      html: htmlContent,
    });
  }

  // Méthode pour vérifier la configuration SMTP
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Configuration SMTP vérifiée avec succès');
      return true;
    } catch (error) {
      console.error('Erreur de configuration SMTP:', error);
      return false;
    }
  }
}

// Instance singleton du service
export const mailService = new MailService();
