import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import whatsappIcon from "/public/img/icons/whatsapp.svg";


// components/Footer.tsx
const Footer = () => {


  return (
    <footer className="bg-amppurple-500 text-white pb-8">
      <div className="w-full bg-black items-center mb-8 pb-8 flex flex-col">
        
        <Image
          src="./img/logo.png"
          height={10}
          width={180}
          quality={100}
          alt="Logo amplitude"
          className="mt-3"
        />
        <div className="flex gap-4">
          <Link
            href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
            aria-label="Contrate um artista pelo nosso Whatsapp"
          >
            <Button variant='outline' className="hidden md:flex md:flex-row gap-1 bg-transparent hover:bg-transparent border-ampyellow-500 hover:border-ampyellow-900 active:border-ampyellow-800 text-zinc-300 duration-300 hover:text-zinc-50">
              <Image
                priority
                height={14}
                src={whatsappIcon}
                alt="Fale com a gente pelo Whatsapp"
              />(11) 98148-0911
              
            </Button>
          </Link>
          <Link
            href="mailto:contato@amplitudea.com.br"
            aria-label="Contrate um artista pelo nosso Whatsapp"
          >
            <Button variant='outline' className="hidden md:flex md:flex-row gap-1 bg-transparent hover:bg-transparent border-amppurple-500 hover:border-amppurple-800 active:border-amppurple-500 text-zinc-300 duration-300 hover:text-zinc-50">
            <span className="material-symbols-outlined text-base">
                mail
              </span> contato@amplitudea.com.br
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-amppurple-500 justify-center flex gap-4 mx-auto px-4">
        <p className="text-sm">
          &copy; 2024 Amplitude A Produções - Todos os direitos reservados
        </p>
        <p className="text-sm font-light text-amppurple-200">
          Desenvolvido por{" "}
          <Link href={"https://www.guiux.com.br"} className="hover:underline">
            <span className="font-semibold text-amppurple-100">g. uiux</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
