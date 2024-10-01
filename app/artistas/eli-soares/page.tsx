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
            width={768}
            quality={100}
            height={400}
            className="rounded-2xl mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            {artist.name}
          </h1>

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
          {artist.pressRelease.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-zinc-400 mb-6">
              {paragraph}
            </p>
          ))}

          {/* CTA Button */}
          <Button className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-6 px-8 rounded-lg text-xl">
            <span className="classForText pr-1.5 text-amppurple-100">
              {"Contrate um show com "}
            </span>
            <span className="classForName">{artist.name}</span>
          </Button>
        </div>
      </section>

      {/* Use Footer Component */}
      <Footer />
    </div>
  );
}
