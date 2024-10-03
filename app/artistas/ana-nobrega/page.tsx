"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Ana Nóbrega",
  image: "/img/artistas/ana-nobrega/hero.jpg",
  pressRelease:
    "Ana Nóbrega é CANTORA e PASTORA. É conhecida por sua espontaneidade nas ministrações ao vivo, bem como, pela pregação da Palavra. É também a idealizadora da Conferência ESPERANÇA, na qual lançou o seu primeiro livro, o 'Viva Esperança'.\n\nCasada há 20 anos com Dvaldo Nóbrega, ambos formados pelo Centro de Treinamento Ministerial Diante do Trono - CTMDT, foram consagrados ao ministério pastoral na Igreja Unidade Em Cristo, no Rio de Janeiro, onde congregam há oito anos.\n\nCearense de Fortaleza, tem levado o amor de Jesus Cristo por meio da música e ministração da Palavra por todos os estados do Brasil, como também em diversos países ao redor do mundo, como: Estados Unidos, Espanha, Portugal, Guatemala, França, Itália, Finlândia, Inglaterra, Noruega, Israel, Egito e Holanda.\n\nAna Nóbrega tem expressividade nas redes sociais, estando presente em cada uma delas. No YouTube, já ultrapassou um milhão de inscritos. Uma das canções mais conhecidas do seu repertório é 'Oceanos', que recentemente atingiu a marca de 216 milhões de views no YouTube.",
  socialLinks: {
    instagram: "https://www.instagram.com/ananobrega/",
    spotify: "https://open.spotify.com/intl-pt/artist/5LCTcU1OktZQTuh4LFIdzU?si=5MeEHwBqS1mCJ7b11VoE9w",
    youtube: "https://www.youtube.com/c/AnaN%C3%B3brega",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}