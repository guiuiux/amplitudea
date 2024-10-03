"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Jefferson e Suellen",
  image: "/img/artistas/jefferson-suellen/hero.jpg",
  pressRelease:
    "Jefferson e Suellen estão casados há dois anos e congregam na Igreja Evangélica Assembleia de Deus, de Jaraguá do Sul, em Santa Catarina. Jefferson tem 25 anos, é natural de Curitiba, Paraná e faz a segunda voz na dupla. Já Suellen tem 21 anos, nasceu em Videira, Santa Catarina e canta desde os 5 anos.",
  socialLinks: {
    instagram: "instagram.com/jeffersonsuellenoficial ",
    spotify: "https://open.spotify.com/intl-pt/artist/4Cp8MAVITZ6a8qjTVvhV28?si=fMVjITUUTwuXITaYrWYszw",
    youtube: "https://www.youtube.com/@JeffersoneSuellenOFICIAL ",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}