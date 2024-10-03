"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Vocal Livre",
  image: "/img/artistas/vocal-livre/hero.jpg",
  pressRelease:
    "O Vocal Livre é um grupo do interior de São Paulo, formado por músicos de vários lugares do Brasil que buscam levar uma mensagem de esperança e de amor através de suas canções. Atualmente, com mais de 2 álbuns, 3 EPS e muitos singles lançados, o grupo conta com mais de 187 milhões de visualizações no Youtube. Sua música tem inspirado pessoas ao redor do país de até do mundo. O grande sucesso \"A começar em mim\" ganhou repercussão nacional através da influencer e ex-BBB, Rafa Kalliman, que também participou da gravação do vídeo clipe.",
  socialLinks: {
    instagram: "https://www.instagram.com/vocal_livre/ ",
    spotify: "https://open.spotify.com/intl-pt/artist/36vknDs4OtlCZuloFIJAhN?si=EN0ujynfQhWbGrYNW-ycrw",
    youtube: "https://www.youtube.com/@vocal_livre ",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}