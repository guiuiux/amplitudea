// components/ArtistTemplate.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BreadcrumbDropdown from "@/components/BreadcrumbDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import spotifyIcon from "/public/img/icons/spotify.svg";
import instagramIcon from "/public/img/icons/instagram.svg";
import youtubeIcon from "/public/img/icons/youtube.svg";
interface SocialLinks {
  instagram: string;
  spotify: string;
  youtube: string;
}

interface Artist {
  name: string;
  image: string;
  pressRelease: string;
  socialLinks: SocialLinks;
}

interface ArtistTemplateProps {
  artist: Artist;
}

export default function ArtistTemplate({ artist }: ArtistTemplateProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Use Header Component */}
      <Header />

      {/* Artist Profile Section */}
      <section className="py-20 bg-zinc-900 text-zinc-50">
        <div className="container max-w-[1080px] mx-auto px-6 flex flex-col">
          <BreadcrumbDropdown currentArtistName={artist.name} />
          <Image
            src={artist.image}
            alt={artist.name}
            width={720}
            height={480}
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
          <Link
            href={`https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20show%20com%20${encodeURIComponent(artist.name)}.`}
            aria-label={`Contrate um show com ${artist.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-6 px-8 rounded-lg text-lg">
              <span className="classForText pr-1.5 text-amppurple-100">
                {"Quero contratar"}
              </span>
              <span className="classForName">{artist.name}</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Use Footer Component */}
      <Footer />
    </div>
  );
}
