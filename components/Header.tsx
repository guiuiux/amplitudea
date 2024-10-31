// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import whatsappIcon from '/public/img/icons/whatsapp.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-ampyellow-300 backdrop-blur-[6px] z-50 transition-all duration-300 ${
        menuOpen ? 'h-[250px]' : 'h-[64px]'
      } text-black`}
    >
      <nav className="container mx-auto flex justify-between items-center h-[64px] max-w-[1080px] px-6">
        {/* Logo */}
        <Link href="/" className="hover:underline font-light">
          <Image src="./img/logo.png" height={40} width={40} alt="Logo amplitude" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex text-zinc-50 gap-4 font-medium">
          <Link href="#artistas" className="hover:underline font-light">
            Artistas
          </Link>
          <Link href="/eventos" className="hover:underline font-light">
            Eventos
          </Link>
          <Link
            href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
            className="hover:underline font-light"
          >
            Contato
          </Link>
        </div>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
          aria-label="Contrate um artista pelo nosso Whatsapp"
        >
          <Button className="hidden md:flex gap-1 bg-amppurple-500 hover:bg-amppurple-600 text-zinc-50 duration-300">
            Whatsapp
            <Image priority height={14} src={whatsappIcon} alt="Fale com a gente pelo Whatsapp" />
          </Button>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <Button
          variant="ghost"
          className="md:hidden px-2 hover:bg-zinc-500/30 border-[1px] border-zinc-600"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined text-white">menu</span>
        </Button>
      </nav>

      {/* Mobile Menu (shown when open) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 hidden'
        }`}
      >
        <div className="md:hidden flex flex-col items-center py-4 text-zinc-50 gap-4 font-medium">
        <Link href="/" onClick={toggleMenu} className="hover:underline font-light">
            Home
          </Link>
          <Link href="#artistas" onClick={toggleMenu} className="hover:underline font-light">
            Artistas
          </Link>
          <Link href="eventos" onClick={toggleMenu} className="hover:underline font-light">
            Eventos
          </Link>
          <Link
            href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
            onClick={toggleMenu}
            className="hover:underline font-light"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
