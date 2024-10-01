import Link from "next/link";

// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-purple-800 text-white py-8">
        <div className="container justify-center flex gap-4 mx-auto px-4">
          <p className="text-sm">&copy; 2024 Amplitude A Produções - Todos os direitos reservados</p>
          <p className="text-sm font-light text-amppurple-200">Desenvolvido por <Link
          href={'https://guiux.vercel.app'}
          className="hover:underline"
          >
           <span className="font-semibold text-amppurple-50">g. uiux</span>
           </Link>
           </p>

          </div>
      </footer>
    );
  };
  
  export default Footer;
  