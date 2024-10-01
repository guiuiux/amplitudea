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
  name: "Ana Nóbrega",
  image: "/img/artistas/ana-nobrega/hero.jpg",
  pressRelease:
    "Ana Nóbrega é CANTORA e PASTORA. É conhecida por sua espontaneidade nas ministrações ao vivo, bem como, pela pregação da Palavra. É também a idealizadora da Conferência ESPERANÇA, na qual lançou o seu primeiro livro, o 'Viva Esperança'.\n\nCasada há 20 anos com Dvaldo Nóbrega, ambos formados pelo Centro de Treinamento Ministerial Diante do Trono - CTMDT, foram consagrados ao ministério pastoral na Igreja Unidade Em Cristo, no Rio de Janeiro, onde congregam há oito anos.\n\nCearense de Fortaleza, tem levado o amor de Jesus Cristo por meio da música e ministração da Palavra por todos os estados do Brasil, como também em diversos países ao redor do mundo, como: Estados Unidos, Espanha, Portugal, Guatemala, França, Itália, Finlândia, Inglaterra, Noruega, Israel, Egito e Holanda.\n\nAna Nóbrega tem expressividade nas redes sociais, estando presente em cada uma delas. No YouTube, já ultrapassou um milhão de inscritos. Uma das canções mais conhecidas do seu repertório é 'Oceanos', que recentemente atingiu a marca de 216 milhões de views no YouTube.",
  socialLinks: {
    instagram: "https://www.instagram.com/ananobrega/",
    spotify: "https://open.spotify.com/intl-pt/artist/5LCTcU1OktZQTuh4LFIdzU?si=5MeEHwBqS1mCJ7b11VoE9w",
    youtube: "https://www.youtube.com/c/AnaN%C3%B3brega",
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
            quality={100}
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
          {artist.pressRelease.split("\n\n").map((paragraph, index) => (
  <p key={index} className="text-zinc-400 mb-6">
    {paragraph}
  </p>
))}

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
