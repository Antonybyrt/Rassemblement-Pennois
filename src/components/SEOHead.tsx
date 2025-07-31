import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = 'https://www.rassemblementpennois.com/favicon.ico'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="32" />
      <meta property="og:image:height" content="32" />
      <meta property="og:image:alt" content="Rassemblement Pennois - Favicon" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rassemblement Pennois" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEOHead; 