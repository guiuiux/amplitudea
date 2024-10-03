"use client"; // Ensure the entire file is client-rendered for animations
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArtistCard } from "@/components/ArtistCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventosTeaser from "@/components/Events";

interface Artist {
  title: string;
  image: string;
  variant: "exclusive" | "default" | "partner";
}

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const artists: Artist[] = [
    // Artistas Exclusivos
    {
      title: "Banda Resgate",
      image: "./img/artistas/resgate/main.jpg",
      variant: "exclusive",
    },
    {
      title: "Kemuel",
      image: "./img/artistas/kemuel/main.jpg",
      variant: "exclusive",
    },
    {
      title: "Soul Livre",
      image: "./img/artistas/soul-livre/main.jpg",
      variant: "exclusive",
    },

    // Exclusivos Prefeitura
    {
      title: "Vocal Livre",
      image: "./img/artistas/vocal-livre/main.jpg",
      variant: "default",
    },
    {
      title: "Athus",
      image: "./img/artistas/athus/main.jpg",
      variant: "default",
    },
    {
      title: "Pedro Valença",
      image: "./img/artistas/pedro-valenca/main.jpg",
      variant: "default",
    },

    // Parceiros
    {
      title: "Daniela Araújo",
      image: "./img/artistas/daniela-araujo/main.jpg",
      variant: "partner",
    },
    {
      title: "Eli Soares",
      image: "/img/artistas/eli-soares/main.jpg",
      variant: "partner",
    },
    {
      title: "Lukas Agustinho",
      image: "/img/artistas/lukas-agustinho/main.jpg",
      variant: "partner",
    },
    {
      title: "Gabi Sampaio",
      image: "/img/artistas/gabi-sampaio/main.jpg",
      variant: "partner",
    },
    {
      title: "Jefferson e Suellen",
      image: "/img/artistas/jefferson-suellen/main.jpg",
      variant: "partner",
    },
    {
      title: "Heric Tolentino",
      image: "/img/artistas/heric-tolentino/main.jpg",
      variant: "partner",
    },
    {
      title: "Ana Nóbrega",
      image: "/img/artistas/ana-nobrega/main.jpg",
      variant: "partner",
    },
    {
      title: "Mari Borges",
      image: "/img/artistas/mari-borges/main.jpg",
      variant: "partner",
    },
  ];

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

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
          className="container max-w-[1080px] mx-auto px-6 flex flex-col items-center justify-between relative z-10"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* Title and Text */}
          <div className="flex flex-col sm:gap-0 gap-24">
            <div className="text-start">
              <motion.h1
                className="text-4xl md:text-6xl font-medium text-zinc-100 "
                variants={heroItemVariants}
              >
                Transformamos ideias em experiências inesquecíveis.
              </motion.h1>
              <motion.p
                className="py-6 sm:text-lg font-light text-zinc-200"
                variants={heroItemVariants}
              >
                Producão de shows e eventos, consultoria para artistas,
                planejamento de mídia e assessoria de imprensa. Amplie seus
                horizontes contrate a Amplitude A.

              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex md:flex-row flex-col gap-2"
              variants={heroItemVariants}
            >
              <Button
                variant="default"
                className="bg-amppurple-500 pulse-shadow border-amppurple-300 border-[1px] hover:bg-amppurple-500 active:bg-amppurple-400 rounded-xl font-normal py-6 px-8"
              >
                Quero contratar a Amplitude A
              </Button>
            </motion.div>
          </div>

          {/* Spotify iframe */}
          <motion.div
            className="flex flex-col gap-4 w-full pt-16"
            variants={heroItemVariants}
          >
            <p className="text-zinc-50">Ouça nossos artistas</p>
            <iframe
              className="w-full"
              src="https://open.spotify.com/embed/playlist/04hXF6sz77Na3WsOIkBj3Y?utm_source=generator&theme=0"
              height="450"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>

      {/* Artists Section */}
      <section className="py-16 bg-zinc-50 text-black">
       
        <div className="container max-w-[1080px] mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {artists.map((artist) => (
            <motion.div
              key={artist.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }} // Ensures animation happens only once
              className="card-hover-effect"
            >
              <ArtistCard
                title={artist.title}
                image={artist.image}
                variant={artist.variant}
              />
            </motion.div>
          ))}
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
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              Soul Livre
            </motion.h2>
            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              Formado por cinco integrantes, o Soul Livre é uma banda de música
              cristã contemporânea...
            </motion.p>
          </div>
        </div>
      </motion.section>
      <EventosTeaser />
      {/* Footer */}
      <Footer />
    </div>
  );
}
