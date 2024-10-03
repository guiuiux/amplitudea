"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Pedro Valença",
  image: "/img/artistas/pedro-valenca/hero.jpg",
  pressRelease:
    "Pedro Valença é cantor e compositor, nascido em São Paulo no ano de 1988. É o fundador e diretor do grupo Vocal Livre onde muitas de suas canções se tornaram conhecidas como \“A começar em mim\” e \“Tudo que eu vivi\”. Seu primeiro disco solo, entitulado \“Pode ser\” foi lançado no ano de 2016 e é um disco 100% autoral. Em abril de 2020 lançou o single \“Verdadeiro Sentido\” em português e espanhol. Entre suas composições mais conhecidas estão \“Tenho Paz\” e \“Pode Ser\”",
  socialLinks: {
    instagram: "https://www.instagram.com/perovalenca/ ",
    spotify: "https://open.spotify.com/intl-pt/artist/2fBxIdkeMcxcjtBlPuWZl7?si=-9G3-s27TgCp-GfONofpJA",
    youtube: "https://www.youtube.com/c/pedrovalenca",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}