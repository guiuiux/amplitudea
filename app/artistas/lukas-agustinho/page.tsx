"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header"; // Import Header component

import spotifyIcon from "/public/img/icons/spotify.svg";
import instagramIcon from "/public/img/icons/instagram.svg";
import youtubeIcon from "/public/img/icons/youtube.svg";
import Footer from "@/components/Footer";

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
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Use Header Component */}
      <Header />

      {/* Artist Profile Section */}
      <section className="py-20 bg-zinc-900 text-zinc-50">
        <div className="container max-w-[1080px] mx-auto px-6 flex flex-col">
          <Image
            src={artist.image}
            alt={artist.name}
            quality={100}
            width={554}
            height={400}
            className="rounded-2xl mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-semibold mb-4">{artist.name}</h1>
          
          {/* Social Media Links */}
          <div className="flex gap-4 mb-8">
            <Link
              href={artist.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-150"
            >
              <Image priority height={24} src={instagramIcon} alt="Instagram" />
            </Link>
            <Link
              href={artist.socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-150"
            >
              <Image priority height={24} src={spotifyIcon} alt="Spotify" />
            </Link>
            <Link
              href={artist.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-150"
            >
              <Image priority height={24} src={youtubeIcon} alt="YouTube" />
            </Link>
          </div>

          <h2 className="text-2xl font-bold">Sobre o artista</h2>
          <p className="text-zinc-400 mb-6">{artist.pressRelease}</p>

          {/* CTA Button */}
          <Button className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-6 px-8 rounded-lg text-xl">
          <span className="classForText pr-1.5 text-amppurple-100">{'Contrate um show com '}</span>
          <span className="classForName">{artist.name}</span>
          </Button>
        </div>
      </section>

      {/* Use Footer Component */}
      <Footer />
    </div>
  );
}
