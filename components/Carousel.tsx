"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Consolidated content with images, titles, descriptions, and video links
const carouselData = [
  {
    image: "/img/destaque/img01.jpg",
    title: "Não sou Mais Eu",
    subtitle: "Banda Resgate",
    description: 'Vídeo Oficial de "Não sou mais Eu" de Banda Resgate',
    videoLink: "https://www.youtube.com/watch?v=vIESyDjbdfU",
  },
  {
    image: "/img/destaque/img02.jpg",
    title: "Eu Tenho um Deus",
    subtitle: "Mari Borges",
    description:
      "Eu Tenho Um Deus, canção interpretada por Mari Borges, fala sobre o amor incondicional de Deus.",
    videoLink: "https://www.youtube.com/watch?v=fDQu_Qk5kdY",
  },
  {
    image: "/img/destaque/img03.jpg",
    title: "Náufrago",
    subtitle: "Kemuel, Leonardo Gonçalves",
    description: 'Vídeo Oficial de "Náufrago" de Kemuel e Leonardo Gonçalves.',
    videoLink: " https://www.youtube.com/watch?v=Y1Bp3ntdj84",
  },
  {
    image: "/img/destaque/img04.jpg",
    title: "Vem Reinar",
    subtitle: "Soul Livre",
    description: 'Video Clipe oficial da música "Vem Reinar", do Soul Livre.',
    videoLink: "https://www.youtube.com/watch?v=tXCEmGyShmo",
  },
];

export default function CustomCarousel() {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined); // Specify CarouselApi type
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Effect to track the current slide
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className=" w-fit flex-col max-w-3xl py-6 gap-2 flex mx-auto">
      <span className="bg-ampyellow-300 w-fit px-3 py-1 rounded-full tracking-wider text-zinc-950 text-xs uppercase font-semibold">Novidades</span>
      <div className=" text-4xl sm:text-5xl text-zinc-50 w-full font-extrabold mb-0 sm:mb-2">
        {carouselData[current].title}
      </div>
      <div className="text-xl sm:text-3xl text-zinc-50 w-full font-semibold mb-2">
        {carouselData[current].subtitle}
      </div>
      <Carousel setApi={setApi} className="w-fullh-fit mx-auto">
        <CarouselContent className="p-0">
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-0 m-">
                <Image
                  src={item.image}
                  alt={`Carousel image ${index + 1}`}
                  width={800}
                  height={400}
                  className=" rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows and Dots Container */}
        <div className="flex items-center justify-between gap-4  mt-4">
          <div className="w-[72px]"></div>
          <div className="flex gap-1.5">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-3 h-3 rounded-full transition-all hover:bg-zinc-50 ${
                  current === index ? "bg-zinc-50 w-7" : "bg-zinc-500"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <CarouselPrevious
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="p-2 static rounded-full hover:bg-gray-200"
            />
            <CarouselNext
              size="icon"
              onClick={() => api?.scrollNext()}
              className="p-2 rounded-full static  hover:bg-gray-200"
            />
          </div>
        </div>
      </Carousel>

      {/* Text and Button Content */}
      <div className="mt-6">
        {/* Buttons */}
        <div className="flex flex-col gap-4 ">
        
          <Link href={carouselData[current].videoLink} target="_blank">
            <Button
              rel="noopener noreferrer"
              variant="outline"
              className="flex items-center text-lg w-full py-5 bg-zinc-900/50 border-zinc-500 hover:border-zinc-50 hover:bg-zinc-900/80 hover:text-zinc-50 text-zinc-50 transition-all duration-150 gap-1"
            >
              <span className="material-symbols-rounded">play_arrow</span>
              Assista o clipe
            </Button>
          </Link>
          <Link
          href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
          aria-label="Contrate um artista pelo nosso Whatsapp"
        >
          <Button
            variant="default"
            className="bg-amppurple-500 pulse-shadow w-full border-amppurple-300 border-[1px] hover:bg-amppurple-500 active:bg-amppurple-400 rounded-xl font-normal py-6 px-8"
          >
            Quero contratar a Amplitude A
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
