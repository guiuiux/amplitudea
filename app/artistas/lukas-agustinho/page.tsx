"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Lukas Agustinho",
  image: "/img/artistas/lukas-agustinho/hero.jpg",
  pressRelease:
    "Lukas Agustinho nasceu em Rio de Janeiro no ano de 1994. Aos 10 anos iniciou no grupo de louvor da igreja que frequentava. Começou tocando contrabaixo para cantores e aos poucos percebeu que seu chamado era além de tocar instrumentos, era também cantar. Aos 18 anos de idade começou a desenvolver sua voz, que aos poucos foi tomando o tempo de tocar e se dedicou apenas a cantar. Começou em um coral na escola e foi fluindo. Aos 23 anos de idade Lukas foi apresentado ao Brasil, por um vídeo (cover), gravado em sua casa com a música “ Lugar Secreto da Gabriela Rocha, que a própria postou em suas redes sócias. Depois vieram vários vídeos em parceira com a cantora que tomou uma proporção gigante. Desde então Lukas tem ido por onde Deus tem lhe ordenado, fazendo a obra e cumprindo o Ide do Senhor Jesus.",
  socialLinks: {
    instagram: "https://instagram.com/lukasagustinho",
    spotify: "https://open.spotify.com/intl-pt/artist/14IQ7niDNXIIrOSjr32E7O",
    youtube: "https://www.youtube.com/@LukasAgustinho",
  },
};

export default function ArtistPage() {
  return <ArtistTemplate artist={artist} />;
}
