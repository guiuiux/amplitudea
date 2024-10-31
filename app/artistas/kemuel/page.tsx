"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Kemuel",
  image: "/img/artistas/kemuel/hero.webp",
  pressRelease:
    'Kemuel é um dos mais relevantes grupos vocais do cenário cristão no Brasil, que mescla a qualidade vocal de artistas jovens e supertalentosos com propostas musicais versáteis, modernas, sofisticadas e de grande apelo popular. Kemuel significa "Congregação de Deus" em hebraico e é interdenominacional. Sua formação atual é composta por: David Marx, Heric Tolentino, Beresix e Eliane Marx. O grupo nasceu em 2007 e já possui grandes sucessos lançados, pela gravadora Sony Music, com quem assinaram em 2017 e vêm lançando seus projetos desde então. O maior deles a música “Algo Novo”, uma das mais executadas em igrejas de todo o mundo. Dentro de seus lançamentos há regravações do Hillsong e Kirk Franklin, e alguns de seus sucessos contam com participações de grandes nomes da música cristã brasileira.',
  socialLinks: {
    instagram: "https://www.instagram.com/kemueloficial/?hl=en",
    spotify:
      "https://open.spotify.com/intl-pt/artist/5GHeXsPtAVd0KLe1oMikxm?si=jdEZ5QVVRWiwFKpDQ7Z_Iw",
    youtube: "https://www.youtube.com/channel/UCo9xJDQC7M8mHavPh_BvXFA",
  },
};

export default function ArtistPage() {
  return <ArtistTemplate artist={artist} />;
}
