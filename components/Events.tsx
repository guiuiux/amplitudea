import Image from "next/image";
import Link from "next/link";

const eventImages = [
  "/img/gallery/image1.jpg",
  "/img/gallery/image2.jpg",
  "/img/gallery/image3.jpg",
  "/img/gallery/image4.jpg",
  "/img/gallery/image5.jpg",
];

export default function EventosTeaser() {
  return (
    <section className="py-16 bg-zinc-900 w-full text-white">
      <div className="container mx-auto max-w-[1080px] px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Eventos Recentes
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {eventImages.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Evento ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <Link href="/eventos" passHref>
            <div className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-3 align-baseline flex gap-2 px-6 rounded-lg font-medium transition-colors group">
              Veja Mais
              <span className="material-symbols-outlined text-base transition-all duration-150 group-hover:rotate-45">
                arrow_outward
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
