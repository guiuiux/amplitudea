"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbDropdown from "@/components/BreadcrumbDropdown";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const allEventImages = [
  "./img/gallery/image01.webp",
  "./img/gallery/image02.webp",
  "./img/gallery/image03.webp",
  "./img/gallery/image04.webp",
  "./img/gallery/image05.webp",
  "./img/gallery/image06.webp",
  "./img/gallery/image07.webp",
  "./img/gallery/image08.webp",
  "./img/gallery/image09.webp",
  "./img/gallery/image10.webp",
  "./img/gallery/image11.webp",
  "./img/gallery/image12.webp",
  "./img/gallery/image13.webp",
  "./img/gallery/image14.webp",
  "./img/gallery/image15.webp",
  "./img/gallery/image16.webp",
  "./img/gallery/image17.webp",
  "./img/gallery/image18.webp",
  "./img/gallery/image19.webp",
  "./img/gallery/image20.webp",
  "./img/gallery/image21.webp",
  "./img/gallery/image22.webp",
];

export default function EventosPage() {
  const [images, setImages] = useState(allEventImages.slice(0, 6)); // Start with 6 images
  const [loadingMore, setLoadingMore] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [breakpointColumns, setBreakpointColumns] = useState(3);

  const handleZoomImage = (src: string) => {
    setCurrentImage(src);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  const loadMoreImages = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const moreImages = allEventImages.slice(images.length, images.length + 6);
      setImages((prevImages) => [...prevImages, ...moreImages]);
      setLoadingMore(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loadingMore &&
        images.length < allEventImages.length
      ) {
        loadMoreImages();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isZoomed) {
        if (event.key === "ArrowLeft") {
          setCurrentImage((prev) => {
            const currentIndex = images.indexOf(prev);
            return images[
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            ];
          });
        } else if (event.key === "ArrowRight") {
          setCurrentImage((prev) => {
            const currentIndex = images.indexOf(prev);
            return images[
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            ];
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, images]);

  const breakpointColumnsObj = {
    default: 3,
    current: breakpointColumns,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1100) setBreakpointColumns(3);
      else if (width >= 700) setBreakpointColumns(2);
      else setBreakpointColumns(1);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amppurple-900 to-ampyellow-900 text-white">
      <Header />
      <section className="py-20">
        <div className="container max-w-[1200px] mx-auto px-6">
          <BreadcrumbDropdown currentArtistName="Eventos" />
          <h2 className="text-4xl font-bold mb-12 text-center text-ampyellow-100">
            Galeria de Eventos
          </h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 overflow-hidden rounded-lg transition-all duration-300 ease-in-out cursor-zoom-in"
                onClick={() => handleZoomImage(src)}
              >
                <Image
                  src={src}
                  alt={`Evento ${index + 1}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </Masonry>

          {images.length < allEventImages.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreImages}
                className="bg-ampyellow-400 hover:bg-ampyellow-300 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors duration-300 transform hover:scale-105"
                disabled={loadingMore}
              >
                {loadingMore ? "Carregando..." : "Carregar mais"}
              </button>
            </div>
          )}
          {images.length >= allEventImages.length && (
            <div className="text-center mt-8 text-ampyellow-100 font-medium">
              Você chegou ao fim da galeria!
            </div>
          )}
        </div>
      </section>
      <Dialog open={isZoomed} onOpenChange={closeZoom}>
        <DialogOverlay className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300" />
        <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
          >
            <Image
              src={currentImage}
              alt="Zoomed Image"
              width={1200}
              height={1200}
              className="rounded-lg object-contain w-full max-h-[90vh] transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <Button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
