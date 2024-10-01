// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import whatsappIcon from '/public/img/icons/whatsapp.svg';

const Header = () => {
  return (
    <header className="fixed flex px-6 top-0 left-0 w-full bg-zinc-600/30 backdrop-blur-[6px] z-50 h-[64px] text-black border-b-zinc-500 border-b-[1px]">
      <nav className="container mx-auto flex justify-between max-w-[1080px] items-center">
        <Link href="/" className="hover:underline font-light">
        <Image src="/img/logo.png" height={40} width={40} alt="Logo amplitude" />
          </Link>
        
        <div className="hidden text-zinc-50 md:flex md:gap-4 font-medium space-x-4">
          <Link href="#" className="hover:underline font-light">
            Artistas
          </Link>
          <Link href="#" className="hover:underline font-light">
            Eventos
          </Link>
          <Link href="#" className="hover:underline font-light">
            Contato
          </Link>
        </div>
        <Link
          href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
          aria-label="Contrate um artista pelo nosso Whatsapp"
        >
          <Button className="hidden md:flex md:flex-row gap-1 bg-amppurple-500 hover:bg-amppurple-600 active:bg-amppurple-500 text-zinc-50 duration-300 hover:text-zinc-50">
            Whatsapp
            <Image priority height={14} src={whatsappIcon} alt="Fale com a gente pelo Whatsapp" />
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
