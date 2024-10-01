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
