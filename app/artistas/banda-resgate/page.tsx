"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Banda Resgate",
  image: "/img/artistas/resgate/hero.jpg",
  pressRelease:
    "Banda Resgate, formada desde maio de 1989, por Zé Bruno, Hamilton Gomes, Marcelo Bassa e Jorge Bruno, é uma das mais influentes bandas de rock cristão do Brasil. Considerada pioneira no estilo, a Banda Resgate abriu caminho para outras bandas e artistas influenciando gerações de músicos e fãs. Atualmente fazem show no Brasil e no exterior, com fãs das mais variadas idades, com seu rock n’roll inteligente e divertido.",
  socialLinks: {
    instagram: "https://www.instagram.com/bandaresgate/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/1Kaf4B6XHMA4agtMO1wzrf?si=4xyGU796RUSUSDbfggaogg",
    youtube: "https://www.youtube.com/@bandaresgateoficial",
  },
};

export default function ArtistPage() {
  return <ArtistTemplate artist={artist} />;
}
