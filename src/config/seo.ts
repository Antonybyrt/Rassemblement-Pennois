export const SEO_CONFIG = {
  baseUrl: 'https://www.rassemblementpennois.com',
  defaultImage: 'https://www.rassemblementpennois.com/favicon.ico',
  siteName: 'Rassemblement Pennois',
  
  pages: {
    home: {
      path: '/',
      canonicalUrl: 'https://www.rassemblementpennois.com/',
      title: 'Rassemblement Pennois - Les Pennes-Mirabeau',
      description: 'Maximilien Fusone, candidat aux élections municipales 2026. Conseiller municipal des Pennes-Mirabeau depuis 2014. Conseiller régional de Provence-Alpes-Côte-d\'Azur depuis 2021.',
    },
    equipe: {
      path: '/equipe-de-campagne',
      canonicalUrl: 'https://www.rassemblementpennois.com/equipe-de-campagne',
      title: 'Équipe de Campagne - Rassemblement Pennois',
      description: 'Découvrez les membres dévoués qui composent notre équipe de campagne pour les élections municipales 2026 aux Pennes-Mirabeau.',
    },
  },
  
  getCanonicalUrl: (path: string): string => {
    return `https://www.rassemblementpennois.com${path}`;
  },
  
  isCanonicalUrl: (url: string): boolean => {
    return url.startsWith('https://www.rassemblementpennois.com');
  },
};

export default SEO_CONFIG; 