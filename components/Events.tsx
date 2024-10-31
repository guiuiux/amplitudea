"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const eventImages = [
  "/img/gallery/image1.jpg",
  "/img/gallery/image2.jpg",
  "/img/gallery/image3.jpg",
  "/img/gallery/image4.jpg",
  "/img/gallery/image5.jpg",
];

export default function EventosTeaser() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-zinc-900 w-full text-white">
      <div className="container mx-auto max-w-[1080px] px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Eventos Recentes
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {eventImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Evento ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <Link href="/eventos" passHref>
            <motion.div
              className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-3 align-baseline flex gap-2 px-6 rounded-lg font-medium transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Veja Mais
              <span className="material-symbols-outlined text-base transition-all duration-150 group-hover:rotate-45">
                arrow_outward
              </span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-11/12 h-11/12 max-w-4xl max-h-4xl"
            >
              <Image
                src={selectedImage}
                alt="Zoomed event"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
