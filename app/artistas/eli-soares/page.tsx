"use client";

import ArtistTemplate from "@/components/ArtistTemplate";
// Dummy artist data for now
const artist = {
  name: "Eli Soares",
  image: "/img/artistas/eli-soares/hero.jpg",
  pressRelease:
    "Eli Soares tem uma trajetória musical recente, mas já marcada pelo sucesso. Em mais de oito anos de carreira, já são milhões de visualizações no YouTube, milhares de seguidores nas redes sociais, milhares de plays nas lojas de streaming e participações em rádios de todo o Brasil e na TV.\n\nNo final de 2013, foi o primeiro artista gospel a assinar com a multinacional Universal Music Christian Group (UMCG). A gravadora relançou seu álbum de estreia em fevereiro de 2014, que hoje atinge a marca de mais de 30 mil cópias vendidas. Com o relançamento, as canções de Eli Soares ganharam destaque nas rádios gospel do Brasil e a música 'Me Ajude a Melhorar' ficou em primeiro lugar em várias emissoras.\n\nEli também conta com vários outros sucessos como 'Não Posso Te Deixar', 'Minha Oração', 'Os Anjos Te Louvam' e muitos outros.",
  socialLinks: {
    instagram: "https://www.instagram.com/elisoares/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/5zblJYkCzvB51Jh29FB07V?si=nBJ_ivevTUKJwaNRvZ9HEw",
    youtube: "https://www.youtube.com/channel/UCCsU3AzChW5IixKLtgnqgUA",
  },
};

export default function ArtistPage() {
  return <ArtistTemplate artist={artist} />;
}
