"use client";

import ArtistTemplate from "@/components/ArtistTemplate";
// Dummy artist data for now
const artist = {
  name: "Soul Livre",
  image: "/img/artistas/soul-livre/hero.jpg",
  pressRelease:
    "O grupo vocal Soul Livre está na estrada desde o dia 08 de março de 2006. O Soul Livre faz um som que une soul music, black music, R&B, pop e worship. Dentre suas principais referências estão nomes como Kirk Franklin, Fred Hammond, Anthony Brown e Israel Houghton.\n\nSão os pupilos vocais do cantor Péricles, que desde 2014 sempre os chamam para suas gravações e lançamento de álbuns, tanto que no último trabalho do cantor, fizeram participação especial em 5 músicas.\n\nAtualmente fazem shows pelo Brasil, divulgando seu último trabalho Recomeço, e são sempre chamados em eventos corporativos e sociais, por sua diversidade musical, com um vasto repertorio que agrada todas as pessoas e qualidade vocal impecável dando um charme a clássicos da música popular brasileira.",
  socialLinks: {
    instagram: "https://www.instagram.com/soullivreoficial/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/2iMtNQJP1W1HktGKifeenE?si=2NKymMAHQLiVXI250XQe",
    youtube: "https://www.youtube.com/@SoulLivreOficial",
  },
};

export default function ArtistPage() {
  return <ArtistTemplate artist={artist} />;
}
