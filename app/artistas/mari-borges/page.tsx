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
  name: "Mari Borges",
  image: "/img/artistas/mari-borges/hero.jpg",
  pressRelease:
    "Mari Borges começou sua carreira aos 16 anos, cantando na igreja em que frequentava. Logo no início descobriu que não seria fácil, devido a um problema auditivo. Mari, porém, permaneceu firme se dedicando ao estudo musical e ao conhecimento da palavra de Deus. No início de 2014, começou com seu canal no Youtube, postando versões acústicas semanalmente. O canal foi crescendo e alcançando milhares de pessoas. \n\nEm 2018, Mari Borges passou a integrar o cast da gravadora Sony Music, por onde lançou seu álbum de estreia 'Abra os Céus'. No ano seguinte, Mari realizou uma grande parceria com DJ PV, que contou também com a participação do DJ Roger na música 'Sua Morada'. No ano de 2020, após 2 anos na Sony Music, Mari Borges assinou contrato com a Musile Records. \n\nSeu segundo trabalho, lançado em novembro de 2021, foi produzido por Hananiel Eduardo, e contou com a participação de Casa Worship na canção 'Fenda da Rocha'. \n\nMari alcançou, em 2021, a marca de 1 milhão de inscritos no Youtube.",
  socialLinks: {
    instagram: "https://www.instagram.com/mariborgesoficial/",
    spotify: "https://open.spotify.com/intl-pt/artist/0p2zpsFX6FVVOWOVQ9SSa6?si=rsx4GozxQTSPjC06o6wIGw",
    youtube: "https://www.youtube.com/channel/UCHAuGHWSCyl5K0d5PotznBw",
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
