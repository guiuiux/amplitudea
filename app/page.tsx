"use client"; // Ensure the entire file is client-rendered for animations

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Hero Section staggered animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  // Items inside hero (e.g., title, buttons) 
  const heroItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  // Artist Section scroll-triggered animation variants
  const artistItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed flex px-6 top-0 left-0 w-full bg-zinc-600/30 backdrop-blur-[6px] z-50 h-[64px] text-black border-b-zinc-500 border-b-[1px]">
        <nav className="container mx-auto flex justify-between items-center">
          <h4 className="font-[750] tracking-wider text-zinc-50">AMPLITUDE A</h4>
          <div className="hidden text-zinc-50 md:flex font-medium space-x-4">
            <Link href="#" className="hover:underline font-light">Artistas</Link>
            <Link href="#" className="hover:underline font-light">Eventos</Link>
            <Link href="#" className="hover:underline font-light">Contato</Link>
          </div>
          <Button className="md:hidden">Menu</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-zinc-900 pt-[144px] pb-20">
        {/* Video Background */}
        <div className="video-background w-full h-full z-[10]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black z-[5] opacity-30 sm:opacity-70"></div>

        <video
          className="absolute top-0 left-0 w-full h-full object-cover hero-video"
          src="/vid/hero.webm"
          autoPlay
          preload="auto"
          loop
          muted
          playsInline
        />

        {/* Hero Section Animated Content */}
        <motion.div 
          className="container relative z-10 mx-auto px-6 sm:px-0 flex flex-col items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* Title and Text */}
          <div className="flex flex-col sm:gap-0 gap-24">
            <div className="text-start">
              <motion.h1
                className="text-4xl md:text-6xl font-medium text-zinc-100 max-w-[640px]"
                variants={heroItemVariants}
              >
                Transformamos ideias em experiências inesquecíveis.
              </motion.h1>
              <motion.p
                className="py-6 lg:max-w-[768px] sm:text-lg font-light text-zinc-200"
                variants={heroItemVariants}
              >
                Na Amplitude A, unimos produção de eventos e comunicação estratégica para emocionar e conectar pessoas.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div className="flex md:flex-row flex-col gap-2" variants={heroItemVariants}>
              <Button
                variant="default"
                className="bg-amppurple-500 hover:bg-amppurple-500 active:bg-amppurple-400 rounded-xl font-normal py-6 px-8"
              >
                Quero um evento
              </Button>
              <Button
                variant="outline"
                className="active:bg-zinc-200 rounded-xl py-6 px-8 font-normal"
              >
                Sou um artista
              </Button>
            </motion.div>
          </div>

          {/* Spotify iframe */}
          <motion.div className="flex flex-col gap-4 w-full max-w-[768px] pt-16" variants={heroItemVariants}>
            <p className="text-zinc-50">Ouça nossos artistas</p>
            <iframe
              className="max-w-[840px]"
              src="https://open.spotify.com/embed/playlist/04hXF6sz77Na3WsOIkBj3Y?utm_source=generator&theme=0"
              height="360"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>

      {/* Artists Section */}
      <section className="py-16 bg-amppurple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Artistas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "Banda Resgate",
              "Daniela Araujo",
              "Gabi Sampaio",
              "Kemuel",
              "Ministério Mergulhar",
              "Soul Livre",
            ].map((artist) => (
              <div key={artist} className="text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.75 }}
                  variants={artistItemVariants}
                  className="w-24 h-24 mx-auto bg-gray-300 rounded-md mb-4"
                />
                <p>{artist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artist Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={heroVariants}
        className="py-16 bg-white "
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row max-w-[800px] justify-center items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 ">
            <motion.img
              src="/img/home/soullivre.jpg"
              alt="Featured Artist"
              width={480}
              height={480}
              className="rounded-xl "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{ duration: 0.6 }}
            >
              Soul Livre
            </motion.h2>
            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{ duration: 0.6 }}
            >
              Formado por cinco integrantes, o Soul Livre é uma banda de música cristã contemporânea...
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Event 1", "Event 2", "Event 3"].map((event) => (
              <div
                key={event}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{event}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button className="mt-4">Saiba Mais</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="Contact"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">
              Quer ser um Artista Amplitude A ou Organizar um Evento?
            </h2>
            <form className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="picture"
                  className="text-xs font-regular text-zinc-500"
                >
                  Nome
                </Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="picture"
                  className="text-xs font-regular text-zinc-500"
                >
                  Telefone
                </Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="picture"
                  className="text-xs font-regular text-zinc-500"
                >
                  E-mail
                </Label>
                <Input />
              </div>
              {/* <div className="flex items-center space-x-4">
                <input type="checkbox" id="artist" />
                <label htmlFor="artist">Ser um Artista do Casting</label>
                <input type="checkbox" id="event" />
                <label htmlFor="event">Organizar um Evento</label>
              </div> */}
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Eventos Realizados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-32 bg-purple-700 rounded-lg"></div>
            ))}
          </div>
          <p className="mt-8 text-center">
            &copy; 2024 Amplitude A Produções - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
