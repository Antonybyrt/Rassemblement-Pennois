import { NextApiRequest, NextApiResponse } from 'next';
import { mailService, ContactFormData } from '@/lib/mailService';

// Interface pour la réponse API
interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Validation des données du formulaire
function validateContactData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }

  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('L\'adresse email n\'est pas valide');
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 3) {
    errors.push('Le sujet doit contenir au moins 3 caractères');
  }

    if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
      errors.push('Le message doit contenir au moins 10 caractères');
    }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Fonction pour nettoyer les données
function sanitizeData(data: any): ContactFormData {
  return {
    name: data.name?.trim() || '',
    email: data.email?.trim().toLowerCase() || '',
    subject: data.subject?.trim() || '',
    message: data.message?.trim() || '',
  };
}

// Handler principal de l'API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Vérifier que la méthode est POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Méthode non autorisée. Utilisez POST.',
    });
  }

  try {
    // Vérifier la configuration SMTP
    const isSmtpConfigured = await mailService.verifyConnection();
    if (!isSmtpConfigured) {
      return res.status(500).json({
        success: false,
        message: 'Service de messagerie temporairement indisponible',
        error: 'Configuration SMTP invalide',
      });
    }

    // Extraire les données du body
    const rawData = req.body;

    // Valider les données
    const validation = validateContactData(rawData);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Données du formulaire invalides',
        error: validation.errors.join(', '),
      });
    }

    // Nettoyer les données
    const contactData = sanitizeData(rawData);

    // Envoyer l'email de contact à l'équipe
    const contactEmailSent = await mailService.sendContactEmail(contactData);
    if (!contactEmailSent) {
      return res.status(500).json({
        success: false,
        message: 'Erreur lors de l\'envoi de votre message',
        error: 'Impossible d\'envoyer l\'email de contact',
      });
    }

    // Envoyer l'accusé de réception au visiteur
    const confirmationEmailSent = await mailService.sendConfirmationEmail(contactData);
    if (!confirmationEmailSent) {
      // L'accusé de réception a échoué, mais le message principal a été envoyé
      console.warn('Accusé de réception non envoyé pour:', contactData.email);
    }

    // Succès
    return res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Vous recevrez un accusé de réception par email.',
    });

  } catch (error) {
    console.error('Erreur dans l\'API de contact:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Une erreur inattendue s\'est produite',
      error: process.env.NODE_ENV === 'development' ? String(error) : 'Erreur interne du serveur',
    });
  }
}

// Configuration pour désactiver le parsing du body par défaut
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
