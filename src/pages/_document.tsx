import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="google-site-verification" content="XQeK8JTzk7JOAghaCVZu4ukGoJ0ICJYExJ1o_dzGB6w" />
        
        <meta property="og:image" content="https://www.rassemblementpennois.com/favicon.ico" />
        <meta property="og:image:width" content="32" />
        <meta property="og:image:height" content="32" />
        <meta property="og:image:alt" content="Rassemblement Pennois - Favicon" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rassemblement Pennois - Les Pennes-Mirabeau" />
        <meta property="og:description" content="Maximilien Fusone, candidat aux élections municipales 2026. Conseiller municipal des Pennes-Mirabeau depuis 2014. Conseiller régional de Provence-Alpes-Côte-d'Azur depuis 2021." />
        <meta property="og:url" content="https://www.rassemblementpennois.com/" />
        <meta property="og:site_name" content="Rassemblement Pennois" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://www.rassemblementpennois.com/favicon.ico" />
        <meta name="twitter:title" content="Rassemblement Pennois - Les Pennes-Mirabeau" />
        <meta name="twitter:description" content="Candidat aux élections municipales 2026. Conseiller municipal des Pennes-Mirabeau depuis 2014. Conseiller régional de Provence-Alpes-Côte-d'Azur depuis 2021." />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
