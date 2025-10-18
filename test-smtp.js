// Script de test pour vérifier la configuration SMTP
// Utilisez ce script pour tester votre configuration

import { mailService } from './src/lib/mailService';

async function testSMTP() {
  console.log('🔧 Test de la configuration SMTP...');
  
  try {
    // Vérifier la connexion
    const isConnected = await mailService.verifyConnection();
    
    if (isConnected) {
      console.log('✅ Configuration SMTP valide !');
      
      // Test d'envoi d'email
      const testEmail = await mailService.sendEmail({
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER || '',
        subject: 'Test Boîte à Idées',
        text: 'Ceci est un email de test pour vérifier que la Boîte à Idées fonctionne correctement.',
        html: '<p>Ceci est un email de test pour vérifier que la Boîte à Idées fonctionne correctement.</p>'
      });
      
      if (testEmail) {
        console.log('✅ Email de test envoyé avec succès !');
      } else {
        console.log('❌ Erreur lors de l\'envoi de l\'email de test');
      }
    } else {
      console.log('❌ Configuration SMTP invalide');
    }
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

// Exécuter le test
testSMTP();
