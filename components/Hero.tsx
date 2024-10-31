"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";
import ResponsiveImage from "@/components/ResponsiveImage";

const artists = [
  {
    name: "Resgate",
    song: "Não Sou Mais Eu",
    description: "Resgate traz uma sonoridade vibrante e letras profundas.",
    image: "/img/artistas/resgate",
    videoLink: "https://www.youtube.com/watch?v=vIESyDjbdfU",
  },
  {
    name: "Soul Livre",
    song: "Vem Reinar",
    description: "Soul Livre entrega uma adoração envolvente e autêntica.",
    image: "/img/artistas/soul-livre",
    videoLink: "https://www.youtube.com/watch?v=tXCEmGyShmo",
  },
  {
    name: "Gabi Sampaio",
    song: "Eu Sei Que Vem",
    description: "Gabi Sampaio comove com sua entrega e vocal impactante.",
    image: "/img/artistas/gabi-sampaio",
    videoLink: "https://www.youtube.com/channel/UCd6uS6dAHvNsn0FLO_GLJkA",
  },
  {
    name: "Vocal Livre",
    song: "Doce Voz",
    description: "Uma harmonia única e canções cativantes.",
    image: "/img/artistas/vocal-livre",
    videoLink: "https://www.youtube.com/watch?time_continue=10&v=4d0RGZ8vjVY",
  },
  {
    name: "Daniela Araújo",
    song: "Santo Espírito",
    description: "Daniela Araújo mistura adoração e autenticidade.",
    image: "/img/artistas/daniela-araujo",
    videoLink: "https://www.youtube.com/watch?v=FsjQSL6wWW4",
  },
];

export default function ArtistCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + artists.length) % artists.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: false, // Track mouse events in addition to touch
  });

  const getSlidePosition = (index: number) => {
    if (index === currentIndex) return "translate-x-0";
    if (index === (currentIndex - 1 + artists.length) % artists.length)
      return "-translate-x-full";
    if (index === (currentIndex + 1) % artists.length)
      return "translate-x-full";
    return "hidden"; // Hide other images
  };

  const currentArtist = artists[currentIndex];

  return (
    <div className="relative w-full mt-16 overflow-hidden " {...handlers}>
      <Card className="w-full bg-gradient-to-r from-purple-900 border-0 to-orange-600">
        <CardContent className="p-0 relative">
          <div className="relative min-h-[720px] w-full py-10 ">
            {artists.map((artist, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlidePosition(
                  index
                )}`}
              >
                <ResponsiveImage
                  basePath={artist.image}
                  alt={artist.name}
                  className="brightness-50 object-cover object-top"
                />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col justify-center text-white w-full max-w-[1080px] mx-auto px-6 py-10 ">
              <h2 className="text-sm font-semibold mb-2">Novidade</h2>
              <h1 className="text-4xl sm:text-6xl font-bold mb-2">
                {currentArtist.song}
              </h1>
              <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
                {currentArtist.name}
              </h2>
              <p className="max-w-xl mb-6">{currentArtist.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Quero Contratar
                </Button>
                <Link
                  href={currentArtist.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="p-2 rounded-sm hover:text-white bg-zinc-900/50 border-2 border-zinc-200/0 backdrop-blur-sm hover:bg-zinc-900/85 hover:border-ampyellow-300"
                  >
                    <Play className="mr-2 h-4 w-4" /> Assista o Clipe
                  </Button>
                </Link>
              </div>
            </div>

            {/* Controlador de Navegação Sobreposto */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="p-2 rounded-full bg-zinc-600/30 border-2 border-zinc-200/25 backdrop-blur-sm hover:bg-zinc-600/0 hover:border-zinc-200/50"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </Button>

              <div className="flex gap-1.5">
                {Array.from({ length: artists.length }).map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-zinc-50 w-7"
                        : " bg-zinc-200/35 backdrop-blur-sm hover:bg-zinc-200/50 hover:border-[1px]"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="p-2 rounded-full bg-zinc-600/30 border-2 border-zinc-200/25 backdrop-blur-sm hover:bg-zinc-600/0 hover:border-zinc-200/50"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
