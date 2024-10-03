"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Athus",
  image: "/img/artistas/athus/hero.jpg",
  "pressRelease": "O Quarteto Athus é um grupo musical que faz parte da Igreja Adventista do Sétimo Dia.\n\nTeve seu início em 1993, enquanto eram estudantes do curso de teologia no UNASP. Da formação inicial, Ângelo Meireles, que é diretor, cantor e produtor musical do quarteto, ainda faz parte do grupo.\n\nO grupo possui 14 álbuns gravados, um DVD e vários singles e clipes musicais. Tem como meta anunciar o amor de Deus a todas as pessoas e proclamar que em breve Jesus voltará.\n\nAtualmente o Athus tem como integrantes do grupo:\n1º Tenor: João Paulo Almeida\n2º Tenor: Juliano Oldani\nBarítono: Ângelo Meireles\nBaixo: João Marcos Fernandes.",
  socialLinks: {
    instagram: "https://www.instagram.com/quartetoathus/",
    spotify: "https://open.spotify.com/intl-pt/artist/1eVyksDLythAgsLLiVBZLI?si=lrhISwTETNmmYKefsZqQsg",
    youtube: "https://www.youtube.com/@quartetoathus",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}