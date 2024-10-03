"use client";

import ArtistTemplate from "@/components/ArtistTemplate";
// Dummy artist data for now
const artist = {
  name: "Daniela Araújo",
  image: "/img/artistas/daniela-araujo/hero.jpg",
  pressRelease:
    "Daniela Araújo é uma artista brasileira versátil, que trabalha em diversos gêneros musicais, incluindo o pop e a música cristã contemporânea. Com diversos trabalhos já lançados, a artista se destacou no cenário musical nacional com seu álbum autointitulado em 2011 e solidificou sua notoriedade com 'Criador do Mundo' em 2014, que alcançou o primeiro lugar de vendas no iTunes na época de lançamento. \n\nAo longo dos anos, Daniela produziu diversos projetos, incluindo o álbum ao vivo 'Criador do Mundo ao Vivo' em 2016, o projeto colaborativo 'Doze' em 2017 e o EP 'Catarse: Lado A' e 'Catarse: Lado B' em 2019 e 2021, respectivamente, ambos projetos foram indicados ao Grammy Latino. \n\nAlém disso, em 2023 lançou o projeto visual 'Voltando para Casa' pela Todah Music. Com seu talento como cantora, compositora, multi-instrumentista, produtora musical e arranjadora, Daniela Araújo continua a conquistar fãs e se destacar no cenário musical independente.",
  socialLinks: {
    instagram: "https://www.instagram.com/danielaaraujo/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/0V3UPrVVcCxIxQU43xYDxC?si=DtAGXUxzRfKb_FE0C0mvNQ ",
    youtube: "https://www.youtube.com/@DanielaAraujoOficial",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}