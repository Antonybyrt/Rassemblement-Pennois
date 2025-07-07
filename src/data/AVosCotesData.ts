export interface NewsItem {
  date: string;
  title: string;
  description: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    date: "5 Juillet 2025",
    title: "Gala de twirling Bâton & Estivales",
    description: "Bravo à toutes les championnes médaillées pour leurs superbes démonstrations lors du gala de twirling bâton",
    image: "/Samedi-05-Juillet-2025.jpg"
  },
  {
    date: "4 Juillet 2025",
    title: "Lancement des estivales de 2025 !",
    description: "Ambiance au top, tenues blanches au rendez-vous, sourires et bonne humeur jusqu'au bout de la nuit !",
    image: "/Vendredi-04-Juillet-2025.jpg"
  },
  {
    date: "28 Juin 2025",
    title: "Aïoli au Plan-des-Pennes !",
    description: "Un grand bravo à tous les bénévoles pour cette belle réussite, un vrai moment de partage, de convivialité… et de gourmandise !",
    image: "/Samedi-28-Juin-2025.jpg"
  },
  {
    date: "27 Juin 2025",
    title: "Tournois nocturne de pétanque !",
    description: "Présents au tournois de pétanque du Plan-des-Pennes. Très bonne ambiance, des parties serrées et beaucoup de bonne humeur !",
    image: "/Vendredi-27-Juin-2025.jpg"
  }
];