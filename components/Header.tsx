// components/Header.tsx
"use client";

import { useState, MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface WhatsAppButtonProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b to-ampyellow-300/100 from-amppurple-400 backdrop-blur-md shadow-md transition-all duration-300">
      <nav className="container  flex justify-between items-center h-20 w-full max-w-[1080px] mx-auto px-6 py-10 ">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 group"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/img/logo.png"
            height={50}
            width={50}
            alt="Logo amplitude"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#artistas" onClick={toggleMenu}>
            Artistas
          </NavLink>

          <NavLink href="#quem-somos" onClick={toggleMenu}>
            Quem Somos
          </NavLink>
          <NavLink href="/eventos" onClick={toggleMenu}>
            Eventos
          </NavLink>
          <NavLink href="#noticias" onClick={toggleMenu}>
            Notícias
          </NavLink>
          <NavLink href="#contato" onClick={toggleMenu}>
            Contato
          </NavLink>
          <WhatsAppButton onClick={toggleMenu} />
        </div>

        {/* Mobile Menu Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative z-10 hover:bg-amppurple-600/40"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white " />
              )}
            </motion.div>
          </AnimatePresence>
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-20 left-0 w-full bg-ampyellow-300/100 backdrop-blur-md shadow-lg"
          >
            <nav className="container mx-auto py-6 flex flex-col items-center space-y-4">
              <NavLink href="#artistas" onClick={toggleMenu}>
                Artistas
              </NavLink>
              <NavLink href="/eventos" onClick={toggleMenu}>
                Eventos
              </NavLink>
              <NavLink href="#quem-somos" onClick={toggleMenu}>
                Quem Somos
              </NavLink>
              <NavLink href="#contato" onClick={toggleMenu}>
                Contato
              </NavLink>
              <WhatsAppButton onClick={toggleMenu} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative text-white font-medium hover:underline transition-colors duration-300 group"
  >
    {children}
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </Link>
);

const WhatsAppButton = ({ onClick }: WhatsAppButtonProps) => (
  <Link
    href="https://wa.me/5511981480911?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20contratar%20um%20artista."
    onClick={onClick}
    className="relative"
  >
    <Button className="bg-amppurple-500 hover:bg-amppurple-600 text-white transition-all duration-300 transform hover:scale-105">
      <span>Whatsapp</span>
      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </Link>
);

export default Header;
