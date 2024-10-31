"use client";

import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbDropdown from "@/components/BreadcrumbDropdown";

const allEventImages = [
  "./img/gallery/image1.jpg",
  "./img/gallery/image2.jpg",
  "./img/gallery/image3.jpg",
  "./img/gallery/image4.jpg",
  "./img/gallery/image5.jpg",
  "./img/gallery/image6.jpg",
  "./img/gallery/image7.jpg",
  "./img/gallery/image8.jpg",
  "./img/gallery/image9.jpg",
  "./img/gallery/image10.jpg",
  "./img/gallery/image11.jpg",
];

export default function EventosPage() {
  const [images, setImages] = useState(allEventImages.slice(0, 5)); // Start with 5 images
  const [loadingMore, setLoadingMore] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [breakpointColumns, setBreakpointColumns] = useState(3);

  // Function to open the image in zoom mode
  const handleZoomImage = (src: string) => {
    if (breakpointColumns > 1) {
      setCurrentImage(src);
      setIsZoomed(true);
    }
  };

  // Function to close the zoomed image
  const closeZoom = () => {
    setIsZoomed(false);
  };

  // Load more images when the user clicks the button
  const loadMoreImages = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const moreImages = allEventImages.slice(
        images.length,
        images.length + 10
      ); // Load 10 more images
      setImages((prevImages) => [...prevImages, ...moreImages]);
      setLoadingMore(false);
    }, 1500);
  };

  // Detect if user reached the bottom of the page to load more automatically
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loadingMore
      ) {
        loadMoreImages();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore]);

  // Handle keyboard navigation
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

  // Masonry breakpoints for responsiveness
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  // Update column count when layout changes
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
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <section className="py-16">
        <div className="container max-w-[1080px] mx-auto px-6">
          <BreadcrumbDropdown currentArtistName="Eventos" />
          <h2 className="text-3xl font-bold mb-8">Galeria de Eventos</h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={`mb-4 transition-transform duration-300 cursor-pointer ${
                  breakpointColumns > 1 ? "hover:scale-105" : ""
                }`}
                onClick={() => handleZoomImage(src)}
              >
                <Image
                  src={src}
                  alt={`Evento ${index + 1}`}
                  width={1080}
                  height={1080}
                  className="rounded-lg opacity-1 animate-fade-in transition-opacity duration-300"
                />
              </div>
            ))}
          </Masonry>
          <div className="text-center mt-8">
            <button
              onClick={loadMoreImages}
              className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-3 px-6 rounded-lg font-medium"
              disabled={loadingMore}
            >
              {loadingMore ? "Carregando..." : "Carregar mais"}
            </button>
          </div>
          {images.length >= allEventImages.length && (
            <div className="text-center mt-4 text-zinc-500">
              Você chegou ao fim da galeria!
            </div>
          )}
        </div>
      </section>
      {/* Zoomed Image Modal */}
      <Dialog open={isZoomed} onOpenChange={closeZoom}>
        <DialogOverlay className="fixed bg-black/50 backdrop-blur-sm" />
        <DialogContent className="flex flex-col h-[90vh] items-center w-full fixed bg-transparent border-0 p-4">
          <Image
            src={currentImage}
            alt="Zoomed Image"
            width={1080}
            height={1080}
            className="rounded-lg object-contain w-full max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>

      <Footer />

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
