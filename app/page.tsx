"use client"; // Ensure the entire file is client-rendered for animations
import { motion } from "framer-motion";
import { ArtistCard } from "@/components/ArtistCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventosTeaser from "@/components/Events";
import Hero from "@/components/Hero";

interface Artist {
  title: string;
  image: string;
  variant: "exclusive" | "default" | "partner";
}

export default function HomePage() {
  
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

  // Items inside hero (e.g., title, buttons)

  // Artist Section scroll-triggered animation variants

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="z-1">
        <Hero />
      </section>

      {/* Title and Description */}
      <section className=" w-full max-w-3xl px-4 py-10 mx-auto">
        
        <div className=" text-zinc-950">
          <motion.h1
            className="text-4xl md:text-6xl font-medium"
            variants={heroItemVariants}
          >
            Transformamos ideias em experiências inesquecíveis.
          </motion.h1>
          <motion.p
            className="py-6 sm:text-lg text-zinc-800"
            variants={heroItemVariants}
          >
            Produção de shows e eventos, consultoria para artistas, planejamento
            de mídia e assessoria de imprensa. Amplie seus horizontes e contrate
            a Amplitude A.
          </motion.p>
        </div>

        {/* Spotify iframe */}
        <motion.div
          className="flex flex-col gap-4 w-full"
          variants={heroItemVariants}
        >
          <p className="text-zinc-950 text-center text-xl">Ouça nossos artistas</p>
          <iframe
            className="w-full"
            src="https://open.spotify.com/embed/playlist/04hXF6sz77Na3WsOIkBj3Y?utm_source=generator&theme=0"
            height="450"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>


      {/* Artists Section */}
      <section id="artistas" className="py-16 bg-zinc-50 text-black">
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
      <EventosTeaser />
      {/* Footer */}
      <Footer />
    </div>
  );
}
