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
  name: "Daniela Araújo",
  image: "/img/artistas/daniela-araujo/hero.jpg",
  pressRelease:
    "Daniela Araújo é uma artista brasileira versátil, que trabalha em diversos gêneros musicais, incluindo o pop e a música cristã contemporânea. Com diversos trabalhos já lançados, a artista se destacou no cenário musical nacional com seu álbum autointitulado em 2011 e solidificou sua notoriedade com 'Criador do Mundo' em 2014, que alcançou o primeiro lugar de vendas no iTunes na época de lançamento. \n\nAo longo dos anos, Daniela produziu diversos projetos, incluindo o álbum ao vivo 'Criador do Mundo ao Vivo' em 2016, o projeto colaborativo 'Doze' em 2017 e o EP 'Catarse: Lado A' e 'Catarse: Lado B' em 2019 e 2021, respectivamente, ambos projetos foram indicados ao Grammy Latino. \n\nAlém disso, em 2023 lançou o projeto visual 'Voltando para Casa' pela Todah Music. Com seu talento como cantora, compositora, multi-instrumentista, produtora musical e arranjadora, Daniela Araújo continua a conquistar fãs e se destacar no cenário musical independente.",
  socialLinks: {
    instagram: "https://www.instagram.com/danielaaraujo/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/0V3UPrVVcCxIxQU43xYDxC?si=DtAGXUxzRfKb_FE0C0mvNQ ",
    youtube: "https://www.youtube.com/@DanielaAraujoOficial",
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
