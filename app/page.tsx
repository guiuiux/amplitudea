import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className=" text-black border-b-zinc-100   border-b-2 p-4">
        <nav className="container mx-auto flex justify-between  items-center">
          <Image
            src="/img/logo.webp"
            alt="Logo"
            width={64}
            height={64}
            quality={100}
            className="py-3 px-1 rounded-md bg-ampyellow-300"
          />
          <div className="hidden md:flex font-medium space-x-4">
            <Link href="#" className="hover:underline">
              Artistas
            </Link>
            <Link href="#" className="hover:underline">
              Eventos
            </Link>
            <Link href="#" className="hover:underline">
              Contato
            </Link>
          </div>
          <Button className="md:hidden">Menu</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-zinc-900 py-20">
        {/* Vídeo de Fundo */}
        <div className="video-background w-full h-full z-[10]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black z-[5] opacity-30 sm:opacity-60"></div>
        
        <video
          className="absolute top-0 left-0 w-full h-full object-cover hero-video"
          src="/vid/hero.webm"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="container relative z-10 mx-auto px-6 sm:px-0 flex flex-col items-start justify-between">
          <div className="flex flex-col gap-24">
            <div>
              <div className="text-start">
                <h1 className="text-4xl md:text-5xl font-medium text-zinc-100 max-w-[640px] mb-4 ">
                  Transformamos ideias em experiências inesquecíveis.
                </h1>
                <p className="text-xl mb-8"></p>
              </div>
              <div className="flex md:flex-row  flex-col gap-2">
                <Button
                  variant="default"
                  className="bg-amppurple-500 hover:bg-amppurple-500 active:bg-amppurple-400 rounded-xl font-normal py-6 px-8"
                >
                  Quero um evento
                </Button>
                <Button
                  variant="outline"
                  className="  active:bg-zinc-200 rounded-xl py-6 px-8 font-normal"
                >
                  Sou um artista
                </Button>
                <p className="sm:pl-4 sm:pt-0 pt-6 lg:max-w-[560px] text-zinc-50">
                  Na Amplitude A, unimos produção de eventos e comunicação
                  estratégica para emocionar e conectar pessoas.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full pt-16">
            <iframe
              className="w-full "
              src="https://open.spotify.com/embed/playlist/04hXF6sz77Na3WsOIkBj3Y?utm_source=generator&theme=0"
              height="360"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
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
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-md mb-4"></div>
                <p>{artist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="Featured Artist"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Soul Livre</h2>
            <p className="mb-4">
              Formado por cinco integrantes, o Soul Livre é uma banda de música
              cristã contemporânea...
            </p>
            <Button>Quero Contratar</Button>
          </div>
        </div>
      </section>

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
              <Input type="text" placeholder="Nome" />
              <Input type="tel" placeholder="Telefone" />
              <Input type="email" placeholder="E-mail" />
              <div className="flex items-center space-x-4">
                <input type="checkbox" id="artist" />
                <label htmlFor="artist">Ser um Artista do Casting</label>
                <input type="checkbox" id="event" />
                <label htmlFor="event">Organizar um Evento</label>
              </div>
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
