"use client";

import ArtistTemplate from "@/components/ArtistTemplate";

// Dummy artist data for now
const artist = {
  name: "Mari Borges",
  image: "/img/artistas/mari-borges/hero.jpg",
  pressRelease:
    "Mari Borges começou sua carreira aos 16 anos, cantando na igreja em que frequentava. Logo no início descobriu que não seria fácil, devido a um problema auditivo. Mari, porém, permaneceu firme se dedicando ao estudo musical e ao conhecimento da palavra de Deus. No início de 2014, começou com seu canal no Youtube, postando versões acústicas semanalmente. O canal foi crescendo e alcançando milhares de pessoas. \n\nEm 2018, Mari Borges passou a integrar o cast da gravadora Sony Music, por onde lançou seu álbum de estreia 'Abra os Céus'. No ano seguinte, Mari realizou uma grande parceria com DJ PV, que contou também com a participação do DJ Roger na música 'Sua Morada'. No ano de 2020, após 2 anos na Sony Music, Mari Borges assinou contrato com a Musile Records. \n\nSeu segundo trabalho, lançado em novembro de 2021, foi produzido por Hananiel Eduardo, e contou com a participação de Casa Worship na canção 'Fenda da Rocha'. \n\nMari alcançou, em 2021, a marca de 1 milhão de inscritos no Youtube.",
  socialLinks: {
    instagram: "https://www.instagram.com/mariborgesoficial/",
    spotify:
      "https://open.spotify.com/intl-pt/artist/0p2zpsFX6FVVOWOVQ9SSa6?si=rsx4GozxQTSPjC06o6wIGw",
    youtube: "https://www.youtube.com/channel/UCHAuGHWSCyl5K0d5PotznBw",
  },
};

export default function ArtistPage() {
  return (
   <ArtistTemplate artist={artist} />
  );
}