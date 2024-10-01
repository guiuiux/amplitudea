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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Use Header Component */}
      <Header />

      {/* Artist Profile Section */}
      <section className="py-20 bg-zinc-900 text-zinc-50">
        <div className="container max-w-[1080px] mx-auto px-6 flex flex-col">
          <Image
            src={artist.image}
            alt={artist.name}
            width={1080}
            quality={100}
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
