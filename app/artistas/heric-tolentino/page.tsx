"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Heric Tolentino",
  image: "/img/artistas/heric-tolentino/hero.jpg",
  pressRelease:
    "Heric Tolentino é um cantor de um dos maiores grupos vocais do cenário gospel no Brasil, e também, compositor de músicas gravadas virais, umas delas que se chama 'Algo Novo' e já ultrapassa 260 milhões de visualizações no YouTube, premiada como melhor composição do ano e música do ano.\n\nTeve contato com a música desde muito novo e começou a cantar junto com seu pai e sua irmã aos 11 anos de idade. Sempre influenciado pela musicalidade norte-americana, cresceu vendo seu pai colecionar DVDs de corais norte-americanos e isso começou a desenvolver a sua paixão pela música.\n\nAos 15 anos de idade, começou a cantar em um coral da sua igreja que se inspirava nesse mesmo segmento e um ano depois, em 2009, Heric ingressou no grupo Kemuel, o qual já fez parte da trilha sonora do filme 'Deus Não Está Morto 2' com a canção 'Quão Grande És Tu'.\n\nNa sua trajetória, Heric já solou diversas músicas como: 'Quando Jesus estendeu sua mão' do álbum 'Clássicos' (2015), 'Sempre Comigo' (2016) 'Me alcançou' (2017), 'Oh venha ao altar' (2018) e entre outras.\n\nHeric dá start em seu projeto solo contará com 4 faixas inéditas e 2 já gravadas, porém, com uma nova roupagem. Que serão lançadas num projeto audiovisual a partir do dia 24 de junho. Nesse novo projeto, Heric pretende contar um pouco da sua trajetória com Deus. Esse projeto será contado em 5 capítulos e cada um trará uma cor que representa um sentimento. O nome da primeira faixa revelada é 'Calvário'.",
  socialLinks: {
    instagram: "https://www.instagram.com/herictolentino/",
    spotify: "https://open.spotify.com/intl-pt/artist/6pAfGMs1Egz9IPChjCFJ8k?si=6_YVWa_hRJWEQBOjIA2VmQ",
    youtube:""
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}