"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header"; // Import Header component

import spotifyIcon from "/public/img/icons/spotify.svg";
import instagramIcon from "/public/img/icons/instagram.svg";
import youtubeIcon from "/public/img/icons/youtube.svg";
import Footer from "@/components/Footer";

// Dummy artist data for now
const artist = {
  name: "Soul Livre",
  image: "/img/artistas/soul-livre/hero.jpg",
  pressRelease:
    'Formado atualmente por Jéssica Gadoro, Taty Gomes, Adan Nascii e Junior Cavallari, o Soul Livre está na estrada desde o dia 08 de março de 2006. Na época, o grupo contava com 15 vozes e a origem do nome, segundo os integrantes, "veio não apenas de uma vontade, mas de uma necessidade de libertação".\n\n"Embora tenha nascido em um lar cristão, eu me sentia preso e oprimido pela religiosidade. Nessa época, era tudo muito rígido e algo me dizia que o Cristo Ressuscitado era e é um Deus de paz, leveza e muita alegria. Desde o primeiro dia que tive a ideia de criar um grupo vocal, vinha orando há alguns dias para que Deus confirmasse essa vontade e, em um belo dia, acordei com esse nome em minha mente. O \'Soul\' pelo estilo de música que muito me atraía, o \'Sou\' de ser livre e, por último, o \'Soul\' pela tradução \'Alma\'... Alma Livre. Era tudo o que eu precisava e tudo isso Deus me confirmou em Gálatas 5:1 - \'Foi para a liberdade que Cristo me libertou\'", explica Júnior Cavallari, líder do Soul Livre.\n\nContando atualmente com quatro vocalistas, o Soul Livre faz um som que une soul music, black music, R&B, pop e worship. Dentre suas principais referências estão nomes como Kirk Franklin, Fred Hammond, Anthony Brown e Israel Houghton.\n\nDezessete anos após darem seus primeiros passos na música, o quarteto lança seu primeiro trabalho pela gravadora Eleve Records - um EP com o sugestivo nome "Recomeçar". O projeto tem produção e arranjos feitos por Mini Produtor, baterias gravadas por Bigg James, guitarras e violões executados por Jonatas Bitencourt e cordas com Aramis Rocha. Já Junior Cavallari cuidou da escolha do repertório, versões, edição, mixagem e masterização.\n\n"Recomeçar" conta com quatro faixas que estão disponíveis em todas as plataformas digitais e também no formato pseudo video no YouTube. A seleção abre com a canção "Vem Reinar", escrita por Gabriel da Silva Santos (Mini Produtor) e Eliezer Siqueira Marques (Léo Marxx) e que foi apresentada pelo Mini Produtor.\n\nNa sequência, "Hoje Eu Sei" é uma versão de "I Got That", gravada em 2017 por Anthony J. Brown. A versão em português conta ainda com a participação especial de Beresix, integrante do Kemuel. Já "Vida" é uma versão de "Life", gravada em 2016 por William McDowell, que assina a composição ao lado de Aaron Lindsey, Israel Houghton e Ricardo Sanchez. Fechando o repertório, vem a canção "O Amor de Deus", composição de Sabrina Gomes e Junior Cavallari.\n\n"Recomeçar" é o nono lançamento do Soul Livre, que fez sua estreia na indústria musical em 2017 com o álbum "Soul Livre", que se destacou com as faixas "Mais de Ti" e "Escolha Deus". Com algumas participações especiais, o projeto teve a presença da cantora Vanessa Jackson, que ficou conhecida há mais de 20 anos no reality show da Globo intitulado "Fama".\n\nEm 2018, veio o EP "Acústico", que reúne versões de algumas músicas do primeiro álbum. Na sequência, o quarteto lançou vários singles e alguns deles em collab com Kemuel, Heric Tolentino, Sandra Marques e Jeanne Mascarenhas, que foi uma das responsáveis por esse novo clipe do Soul Livre. Em abril deste ano, eles lançaram a collab "Ousado Amor" com Jeanne, que é considerada dona de uma das vozes mais marcantes do cenário gospel.\n\n"Jeanne tem a voz, é de uma simplicidade, postura, firmeza, uma pessoa leve, alegre e, para nós, foi mais um sim de Deus para a nossa jornada. Jeanne tem uma carreira longa e sólida e aceitou gravar conosco a pedido da gravadora e até hoje essa canção não sai de nossa playlist", comunica Cavallari.\n\nEm comemoração a esse EP, no dia 24 de junho, estaremos fazendo um show de lançamento gratuito na Lagoinha Santo André localizado na Rua Marina, 406, a partir das 19h, com participação de Priscila Oly, Heric Tolentino, Beresix e Jeanne Mascarenhas. Ou seja, uma noite memorável com muita performance vocal.\n\nAlém do show, que eles pretendem levar a diversas cidades do país, de acordo com o líder do Soul Livre, o grupo vai lançar clipes de todas as músicas, que serão liberados ao longo dos próximos meses.\n\n"Para este ano queremos lançar dois projetos, que ainda não podemos falar muito, mas que com certeza irão pegar muita gente de surpresa. Estamos trabalhando muito para concretizar todos os nossos sonhos. Acreditamos que temos que fazer a nossa parte para que assim Deus possa realizar a dEle. Temos muito caminho pela frente e vamos seguir com a ajuda de Deus que irá nos guiar em tudo", adiantou Júnior Cavallari, líder do Soul Livre.',
  socialLinks: {
    instagram: "https://www.instagram.com/soullivreoficial/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/2iMtNQJP1W1HktGKifeenE?si=2NKymMAHQLiVXI250XQe",
    youtube: "https://www.youtube.com/@SoulLivreOficial",
  },
};

export default function ArtistPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Use Header Component */}
      <Header />

      {/* Artist Profile Section */}
      <section className="py-20 bg-zinc-900 text-zinc-50">
        <div className="container max-w-[1080px] mx-auto px-6 flex flex-col">
          <Image
            src={artist.image}
            alt={artist.name}
            width={1080}
            quality={100}
            height={400}
            className="rounded-2xl mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            {artist.name}
          </h1>

          {/* Social Media Links */}
          <div className="flex gap-4 mb-8">
            <Link
              href={artist.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-150"
            >
              <Image priority height={24} src={instagramIcon} alt="Instagram" />
            </Link>
            <Link
              href={artist.socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-150"
            >
              <Image priority height={24} src={spotifyIcon} alt="Spotify" />
            </Link>
            <Link
              href={artist.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-all duration-150"
            >
              <Image priority height={24} src={youtubeIcon} alt="YouTube" />
            </Link>
          </div>

          <h2 className="text-2xl font-bold">Sobre o artista</h2>
          {artist.pressRelease.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-zinc-400 mb-6">
              {paragraph}
            </p>
          ))}

          {/* CTA Button */}
          <Button className="bg-amppurple-500 hover:bg-amppurple-600 text-white py-6 px-8 rounded-lg text-xl">
            <span className="classForText pr-1.5 text-amppurple-100">
              {"Contrate um show com "}
            </span>
            <span className="classForName">{artist.name}</span>
          </Button>
        </div>
      </section>

      {/* Use Footer Component */}
      <Footer />
    </div>
  );
}
