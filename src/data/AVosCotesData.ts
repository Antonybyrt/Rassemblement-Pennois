export interface NewsItem {
  date: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  type: 'image' | 'video';
}

export const news: NewsItem[] = [
  {
    date: "26 Novembre 2025",
    title: "🎄Marché de Noël de la Voilerie 🎅 !",
    description: "",
    image: "/Mercredi-26-Novembre-2025.png",
    type: 'image'

  },
  {
    date: "11 Novembre 2025",
    title: "𝐔𝐧𝐞 𝐣𝐨𝐮𝐫𝐧𝐞́𝐞 𝐚𝐯𝐞𝐜 𝐯𝐨𝐮𝐬 !",
    description: "- Commémoration du 11 novembre, armistice de la Grande Guerre 🇫🇷 Hommage rendu aux poilus pour leur courage et leur sacrifice. -Repas au cercle des Cadeneaux, super ambiance !",
    image: "/Mardi-11-Novembre-2025.png",
    type: 'image'

  },
  {
    date: "2 Novembre 2025",
    title: "𝐖𝐞𝐞𝐤-𝐞𝐧𝐝 𝐚𝐯𝐞𝐜 𝐯𝐨𝐮𝐬 !",
    description: "- Halloween 🎃  - Bourse aux minéraux  Et pleins d'autres choses ! 😉",
    image: "/Dimanche-2-Novembre-2025.png",
    type: 'image'

  },
  {
    date: "24 Octobre 2025",
    title: "À vos côtés !",
    description: "- Fin de saison Réserve Communale Pennes Mirabeau 🟠 - Fête des sorcières🧹 - 3H des Barnouins 🏃‍➡️ - Salon du chocolat 🍫  - March rugby 🏉  A ce week-end !!!😉",
    image: "/Vendredi-24-Octobre-2025.png",
    type: 'image'

  },
  {
    date: "12 Octobre 2025",
    title: "𝐔𝐧 𝐰𝐞𝐞𝐤-𝐞𝐧𝐝 𝐞𝐧𝐬𝐨𝐥𝐞𝐢𝐥𝐥𝐞́ 𝐩𝐚𝐬𝐬𝐞́ 𝐚̀ 𝐯𝐨𝐬 𝐜𝐨̂𝐭𝐞́𝐬 ! ☀️",
    description: "Entre sécurité routière, vide-greniers, marché, Octobre Rose, spectacles et rencontres sportives… Que de beaux moments partagés ! Déjà hâte d’être au prochain week-end 🤩",
    image: "/Dimanche-12-Octobre-2025.png",
    type: 'image'

  },
  {
    date: "5 Octobre 2025",
    title: "𝐔𝐧 𝐰𝐞𝐞𝐤-𝐞𝐧𝐝 𝐚̀ 𝐯𝐨𝐬 𝐜𝐨̂𝐭𝐞́𝐬 !",
    description: "Méchoui du Cercle des Cadeneaux 🍖 Tournoi de pétanque aux Bouroumettes ⚫️ Marché de la Voilerie 🛍️ Autant de bons moments partagés ensemble — merci à toutes et à tous pour votre présence et votre bonne humeur ! 👍",
    image: "/Dimanche-5-Octobre-2025.png",
    type: 'image'

  },
  {
    date: "28 Septembre 2025",
    title: "𝐔𝐧 𝐰𝐞𝐞𝐤-𝐞𝐧𝐝 𝐚𝐯𝐞𝐜 𝐯𝐨𝐮𝐬 !",
    description: "Un week-end bien rempli avec vous ! 🎉 👏 Mondial du Tambourin : un grand bravo aux bénévoles et un énorme merci au Tambourin Club des Pennes-Mirabeau  pour leur accueil ! 🏉 Premier match à domicile pour le Rugby Club des Cadeneaux — quelle ambiance ! ⚫️ Tournoi de pétanque du Plan-des-Pennes ! 👟 Kinder Athletics : les minots ont passé une super journée grâce à l' Amicale des Pennes Mirabeau  Merci à toutes et à tous pour votre énergie et votre bonne humeur ! 💛💪",
    image: "/Dimanche-28-Septembre-2025.png",
    type: 'image'
  },
  {
    date: "21 Septembre 2025",
    title: "𝐔𝐧 𝐰𝐞𝐞𝐤-𝐞𝐧𝐝 𝐞𝐧𝐬𝐨𝐥𝐞𝐢𝐥𝐥𝐞́ 𝐩𝐚𝐬𝐬𝐞́ 𝐚̀ 𝐯𝐨𝐬 𝐜𝐨̂𝐭𝐞́𝐬 ! ☀️",
    description: "Entre sécurité routière, vide-greniers, marché, Octobre Rose, spectacles et rencontres sportives… Que de beaux moments partagés ! Déjà hâte d’être au prochain week-end 🤩",
    video: "https://youtube.com/shorts/IBW2SZwXD1E?si=HSsgiL-qSQXklSYf",
    type: 'video'
  },
  {
    date: "20 Septembre 2025",
    title: "𝐄𝐧𝐜𝐨𝐫𝐞 𝐮𝐧 𝐰𝐞𝐞𝐤-𝐞𝐧𝐝 𝐚̀ 𝐯𝐨𝐬 𝐜𝐨̂𝐭𝐞́𝐬 !",
    description: "Les Provençades, tournois de pétanque etc… Quel bonheur de partager ces moments avec vous ! 👍 On a déjà hâte d'être le week-end prochain !",
    video: "https://youtu.be/lNO-UTJUNcU?si=ivy1mXpo-c_B3Jj5",
    type: 'video'
  },
  {
    date: "13 Septembre 2025",
    title: "𝐔𝐧 𝐝𝐢𝐦𝐚𝐧𝐜𝐡𝐞 𝐚𝐯𝐞𝐜 𝐯𝐨𝐮𝐬 !",
    description: " 🥦Marché de la Voilerie 🎯 Tournée \"Héritage des Jeux\" Le tout sous un magnifique soleil ! ☀️",
    video: "https://youtu.be/FZYPbSVzzXo?si=KrvHkgr5tZ6xKrxN",
    type: 'video'
  },
  {
    date:"30 Août 2025",
    title: "𝐂𝐚𝐟𝐞́ 𝐦𝐚𝐭𝐢𝐧𝐚𝐥 ! ☕️",
    description: "Petit café avant d'aller faire un tour au marché !",
    image: "/Samedi-30-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"23 Août 2025",
    title: "𝐄𝐬𝐭𝐢𝐯𝐚𝐥𝐞𝐬 !!!",
    description: "Ce samedi marquait la dernière de l'été. Merci à toutes celles et tous ceux qui ont contribué au bon déroulement. Vivement l'année prochaine ! 🎉",
    image: "/Samedi-23-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"22 Août 2025",
    title: "𝐄𝐬𝐭𝐢𝐯𝐚𝐥𝐞𝐬 !",
    description: "✨ Hier soir, nous étions  aux Estivales : de la musique, une ambiance chaleureuse et familiale comme on les aime 🎶😊 Un grand merci aux bénévoles pour leur énergie et leur dévouement, ainsi qu'à la police municipale pour leur présence et leur vigilance et aux services .👍 Ces beaux moments sont possibles grâce à vous tous 💛",
    image: "/Vendredi-22-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"15 Août 2025",
    title: "𝐀𝐬𝐬𝐨𝐦𝐩𝐭𝐢𝐨𝐧 ✝️",
    description: "Comme chaque année, nous avons eu l'honneur de participer à la procession du 15 août. Un moment qui nous relie à nos racines et à nos traditions.",
    image: "/Vendredi-15-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"14 Août 2025",
    title: "🥘💃 𝐒𝐨𝐢𝐫𝐞́𝐞 𝐏𝐚𝐞̈𝐥𝐥𝐚 & 𝐃𝐚𝐧𝐬𝐚𝐧𝐭𝐞 🎶✨",
    description: "Magnifique soirée d'été pleine de rires, de musique et de bonne humeur ! Un immense merci aux bénévoles 👍 — sans vous, rien de tout cela ne serait possible. Merci également à toutes les personnes présentes pour leur énergie et leur sourire !",
    image: "/Jeudi-14-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"8 Août 2025",
    title: "Cinéma en plein air !",
    description: "Hier soir, la magie du cinéma en plein air a opéré ! Nous avons (re)découvert E.T. sous les étoiles, dans une ambiance conviviale et familiale 🌙🎬 ! Un grand merci aux services  qui ont rendu ce beau moment possible ! 👏",
    image: "/Vendredi-8-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"2 Août 2025",
    title: "🎶 𝐂𝐎𝐍𝐂𝐄𝐑𝐓 !",
    description: "Encore une très belle soirée passée tous ensemble sous le signe de la musique, du partage et de la bonne humeur ! Un immense bravo à l’orchestre Almeras pour ce super concert !👏👏 Une ambiance à la fois familiale et festive, comme on les aime ! 🙏 Un grand merci à nos  commerçants pour leur participation :  🍻 Yvan – Bar Le Provençal 🍕 Yvan et Fabrice - La cloche d'or 🥖 Eric – Le Meunier des Pennes 🍹 Jean-Luc – Bar O'Cadenaux 🍕  Jeannine et Jean-Marc - Pizza Cécilia  👏 Sans oublier nos services culture, technique et nos policiers municipaux pour leur présence et leur engagement.",
    image: "/Samedi-2-Aout-2025.jpg",
    type: 'image'
  },
  {
    date:"26 Juillet 2025",
    title: "𝐄𝐬𝐭𝐢𝐯𝐚𝐥𝐞𝐬 ! ☀️",
    description: "Hier, c'était la dernière des Estivales… pour le mois de juillet ! 😉 Une fois encore, l’ambiance était au rendez-vous : conviviale, chaleureuse et familiale ! Un immense merci à tous les bénévoles pour leur énergie et leur engagement. 👍 Merci également aux agents municipaux et aux policiers municipaux pour leur présence et leur travail. ",
    image: "/Samedi-26-Juillet-2025.jpg",
    type: 'image'
  },
  {
    date: "5 Juillet 2025",
    title: "Gala de twirling Bâton & Estivales",
    description: "Bravo à toutes les championnes médaillées pour leurs superbes démonstrations lors du gala de twirling bâton",
    image: "/Samedi-05-Juillet-2025.jpg",
    type: 'image'
  },
  {
    date: "4 Juillet 2025",
    title: "Lancement des estivales de 2025 !",
    description: "Ambiance au top, tenues blanches au rendez-vous, sourires et bonne humeur jusqu'au bout de la nuit !",
    image: "/Vendredi-04-Juillet-2025.jpg",
    type: 'image'
  },
  {
    date: "29 Juin 2025",
    title: "Aïoli au Plan-des-Pennes !",
    description: "Un grand bravo à tous les bénévoles pour cette belle réussite, un vrai moment de partage, de convivialité… et de gourmandise !",
    image: "/Dimanche-29-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "28 Juin 2025",
    title: "Tournois nocturne de pétanque !",
    description: "Présents au tournois de pétanque du Plan-des-Pennes. Très bonne ambiance, des parties serrées et beaucoup de bonne humeur !",
    image: "/Samedi-28-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "27 Juin 2025",
    title: "Soirée Moules-Frites : un vrai régal !",
    description: "Une ambiance chaleureuse et familiale, des sourires, et surtout… un grand merci à tous les bénévoles qui ont rendu cette soirée possible ❤️👏",
    image: "/Vendredi-27-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "24 Juin 2025",
    title: "Feux de la Saint-Jean 🔥",
    description: "Tradition, identité et convivialité. Nous étions présents hier au traditionnel feu de la Saint-Jean, un moment fort qui rassemble petits et grands autour des flammes, des sourires et de la musique 🎶 Merci à tous ceux qui ont contribué à faire de cette soirée une réussite : les bénévoles, les artistes… et bien sûr, vous tous qui êtes venus partager ce moment avec nous ✨",
    image: "/Mardi-24-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "21 Juin 2025",
    title: "Fête de la musique 🎼🎵🎶",
    description: "Hier soir, nous avons eu le plaisir de participer à la Fête de la Musique au cœur de notre commune. Quel bonheur de voir les rues animées, les sourires sur les visages, les enfants qui dansent, les familles réunies autour de la musique et de la convivialité. Merci à nos policiers municipaux qui ont veillé au bon déroulement de la soirée ! 👮‍♀️👮 Ainsi que les employés du service technique ! 👷‍♂️👷‍♀️",
    image: "/Samedi-21-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "20 Juin 2025",
    title: "Challenge Arnone 🏆",
    description: "Nous étions présents au challenge en souvenir de Franck Arnone. De nombreuses équipes étaient réunies dans une belle ambiance.",
    image: "/Vendredi-20-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "18 Juin 2025",
    title: "Appel du 18 juin 🇨🇵",
    description: "Nous étions présents hier pour commémorer l’Appel du 18 juin, lancé en 1940 par le Général de Gaulle : un appel à la résistance, à l’unité et à l’espoir. Les enfants du Conseil des Minots ont participé à cet hommage, rappelant que le devoir de mémoire se transmet dès le plus jeune âge. 👉 N’oublions jamais. Transmettons toujours.",
    image: "/Mercredi-18-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "8 Juin 2025",
    title: "Course de vélos 🚲 !",
    description: "Nous étions présents hier à la course de vélos de l'Agavon. Un grand bravo à tous les champions en herbe !💪",
    image: "/Dimanche-8-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "7 Juin 2025",
    title: "Fête forraine !🎡",
    description: "Une belle ambiance, des rires, et quelques frissons grâce aux manèges à sensations ! Merci à nos policiers municipaux pour leur présence, veillant à ce que chacun passe un bon moment ! 👮‍♀️👮",
    image: "/Samedi-7-Juin-2025.jpg",
    type: 'image'
  },
  {
    date: "25 mai 2025",
    title: "Un week-end à vos côtés !",
    description: "Inauguration de la tribune Denis Agostini, tournois de rugby des écoles, course de vélos, tournois de foot, tournois de pétanque, marchés, vide greniers, vide ta chambre  etc... Un week-end sportif !",
    image: "/Dimanche-25-Mai-2025.jpg",
    type: 'image'
  },
  {
    date: "18 mai 2025",
    title: "Vides greniers !",
    description: "Nous étions présents aux différents vides greniers de la commune. Un bémol, en faire 3 en même temps n'était pas judicieux. En tout cas, encore de belles rencontres sous un magnifique soleil ! ☀️",
    image: "/Dimanche-18-Mai-2025.jpg",
    type: 'image'
  },
  {
    date: "17 mai 2025",
    title: "Journée des enfants et visite de notre beau moulin",
    description: "Le beau temps, des cris de joie et une ambiance familiale. Que demander de plus ?",
    image: "/Samedi-17-Mai-2025.jpg",
    type: 'image'
  },
  {
    date: "11 mai 2025",
    title: "Week-end Lou Mirabeou 🗡",
    description: "Très bons moments aux côtés de chevaliers, seigneurs et princesses ! 🫅👸",
    image: "/Dimanche-11-Mai-2025.jpg",
    type: 'image'
  },
  {
    date: "8 mai 2025",
    title: "Commémoration du 8 mai 1945. 🇨🇵",
    description: "Avec Emeline Coch, nous étions présents aux commémorations de la Victoire de 1945. N’oublions jamais celles et ceux qui se sont sacrifiés. Prenons leur courage et leur engagement en exemple.",
    image: "/Jeudi-8-Mai-2025.jpg",
    type: 'image'
  },
  {
    date: "3 mai 2025",
    title: "Toujours à vos côtés !",
    description: "Heureux d’avoir partagé ces moments conviviaux et sportifs, entre la fête au Plan-des-Pennes et le cross des Scoubidous. Encore une fois, un grand merci aux bénévoles, sans qui rien ne serait possible. Et bravo aux petits champions qui se sont donnés à fond ! 👏💪",
    image: "/Samedi-3-Mai-2025.jpg",
    type: 'image'
  },
  {
    date: "1er mai 2025",
    title: "Encore de beaux moments passés ensemble !",
    description: "BMX, football, rugby, mini-bolides… Un grand bravo aux bénévoles pour l'organisation, et félicitations aux petits champions qui se sont donnés à fond !",
    image: "/Mardi-1-Mai-2025.jpg",
    type: 'image'
  },
];