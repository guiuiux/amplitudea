"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Gabi Sampaio",
  image: "/img/artistas/gabi-sampaio/hero.jpg",
  pressRelease:
    "Gabi Sampaio é uma destacada cantora e compositora brasileira de música cristã. Conhecida por sua voz doce e letras profundas, sua música busca conectar as pessoas a uma experiência mais íntima e profunda com Deus.\n\nGabi é psicóloga, e formada em musica e teologia pela International House o Prayer University (IHOPU). Fundadora da Escola de Ministros que tem erguido ministros de louvor em todo o Brasil a viverem plenamente suas vidas ministeriais.",
  socialLinks: {
    instagram: "https://www.instagram.com/gabisampaio/",
    spotify: "https://open.spotify.com/intl-pt/artist/1mwuQroxtrC6ANU2Jwb8ZQ?si=_2mR7yqzTnOVm9tCUz13hQ",
    youtube: "https://www.youtube.com/@GabiSampaio",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}