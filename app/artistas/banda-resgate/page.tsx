"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Banda Resgate",
  image: "/img/artistas/resgate/hero.jpg",
  pressRelease:
    "Resgate é uma banda brasileira de rock, formada por músicos cristãos, na cidade de São Paulo em 5 de maio de 1989, estando há três décadas ativa. É formada por Zé Bruno (vocal e guitarra), Hamiltom Gomes (guitarra), Marcelo Bassa (baixo) e Jorge Bruno (bateria). Apesar de iniciar suas atividades ainda no final da década de 80, despontou no meio cristão na década seguinte, época em que as bandas Oficina G3, Fruto Sagrado, Katsbarnea, Novo Som e Catedral davam força ao chamado movimento gospel.",
  socialLinks: {
    instagram: "https://www.instagram.com/bandaresgate/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/1Kaf4B6XHMA4agtMO1wzrf?si=4xyGU796RUSUSDbfggaogg",
    youtube: "https://www.youtube.com/@bandaresgateoficial",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}
