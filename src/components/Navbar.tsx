import ButtonAnimatedBorderDemo from '@/components/shadcn-space/button/button-06';
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[200] h-14 md:h-16 px-5 md:px-[60px] flex items-center justify-between bg-black border-b border-g2">
      <a href="#" className="flex items-center gap-[14px] no-underline group">
        {/* Logo using Env Var for Dark/Light mode */}
        <img
          src={`${process.env.NEXT_PUBLIC_LOGO_BASE_URL}dark.svg`}
          alt="SK Logo"
          className="hidden dark:block shrink-0 w-7 h-7 object-contain"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_LOGO_BASE_URL}light.svg`}
          alt="SK Logo"
          className="block dark:hidden shrink-0 w-7 h-7 object-contain"
        />
        <span className={`${lexend.className} text-[17px] font-bold text-white tracking-wider`}>SK</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><a href="#products" className="font-['Google_Sans',sans-serif] text-[15px] font-bold text-g4 transition-colors duration-200 hover:text-g7">Products</a></li>
        <li><a href="#how" className="font-['Google_Sans',sans-serif] text-[15px] font-bold text-g4 transition-colors duration-200 hover:text-g7">Integration</a></li>
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[15px] font-bold text-g4 transition-colors duration-200 hover:text-g7">API Docs</a></li>
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[15px] font-bold text-g4 transition-colors duration-200 hover:text-g7">About</a></li>
        <li>
          <ButtonAnimatedBorderDemo asChild>
            <a href="#">Request Access</a>
          </ButtonAnimatedBorderDemo>
        </li>
      </ul>
    </nav>
  );
}
