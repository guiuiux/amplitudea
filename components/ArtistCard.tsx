import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  title: string;
  image: string;
  variant: "exclusive" | "default" | "partner";
}

export function ArtistCard({
  title,
  image,
  variant = "default",
}: ArtistCardProps) {

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase() // Converte para minúsculas
      .normalize("NFD") // Normaliza para remover acentos
      .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
      .replace(/[^a-z0-9 ]/g, "") // Remove caracteres especiais
      .trim() // Remove espaços no início e no fim
      .replace(/\se\s/g, "-") // Substitui " e " (com espaços ao redor) por hífen
      .replace(/\s+/g, "-"); // Substitui espaços por hífens
  };
  
  return (
    <Link href={`/artistas/${generateSlug(title)}`}>
      <div className={`hover:p-0 p-2 flex flex-col transition-all duration-200`}>
        <Image
          className="syne-font"
          src={image}
          alt={title}
          width={360}
          height={360}
          layout="responsive"
        />
        {variant === "exclusive" ? (
          <p className="pt-2 text-lg flex font-bold syne-font justify-between items-center w-full ">
            <span className="flex align-baseline border-b-[1px] pb-1">
              {title}{" "}
              <span className="material-symbols-outlined rotate-90">
                arrow_insert
              </span>{" "}
            </span>
            <span className="text-xs upper flex items-center font-normal border-ampyellow-300 border-[1px]  px-2 py-1 rounded-full text-black inter-font">
              Exclusivo
            </span>
          </p>
        ) : (
          <p className="pt-2 text-lg font-semibold">
            <span className="flex align-baseline w-fit border-b-[1px] pb-1">
              {title}
              <span className="material-symbols-outlined rotate-90">
                arrow_insert
              </span>
            </span>
          </p>
        )}
      </div>
    </Link>
  );
}

//    use this in className  ${variantStyles(variant)}
// const variantStyles = (variant: 'exclusive' | 'default' | 'partner') => {
//   switch (variant) {
//     case 'exclusive':
//       return 'bg-ampyellow-100';
//     case 'partner':
//       return 'bg-amppurple-500';
//     default:
//       return 'bg-amppurple-700';

//   }
