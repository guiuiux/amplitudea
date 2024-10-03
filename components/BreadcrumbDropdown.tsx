import Link from "next/link";

interface BreadcrumbProps {
  currentArtistName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentArtistName }) => {
  return (
    <div className="py-4 mb-4 text-zinc-50">
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-zinc-400 text-sm hover:text-zinc-50">
        <div className="flex gap-2">
            <span>←</span>
            <span>Home</span>
            </div>
        </Link>
        <span className="text-zinc-400">/</span>
        {/* Static artist name */}
        <span className="text-zinc-300 text-sm">{currentArtistName}</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;
