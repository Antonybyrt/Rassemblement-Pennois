import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Rassemblement Pennois - Les Pennes-Mirabeau",
  description = "Maximilien Fusone, candidat aux élections municipales 2026. Conseiller municipal des Pennes-Mirabeau depuis 2014. Conseiller régional de Provence-Alpes-Côte-d'Azur depuis 2021.",
  canonicalUrl,
  ogImage = "https://www.rassemblementpennois.com/favicon.ico",
  ogType = "website"
}) => {
  const router = useRouter();
  
  // Construire l'URL canonique dynamiquement
  const baseUrl = "https://www.rassemblementpennois.com";
  const currentPath = router.asPath;
  const finalCanonicalUrl = canonicalUrl || `${baseUrl}${currentPath}`;

  return (
    <Head>
      {/* Meta tags de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* URL canonique dynamique */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="32" />
      <meta property="og:image:height" content="32" />
      <meta property="og:image:alt" content="Rassemblement Pennois - Favicon" />
      <meta property="og:site_name" content="Rassemblement Pennois" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="XQeK8JTzk7JOAghaCVZu4ukGoJ0ICJYExJ1o_dzGB6w" />
    </Head>
  );
};

export default SEOHead; 