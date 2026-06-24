import ButtonAnimatedBorderDemo from '@/components/shadcn-space/button/button-06';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[200] h-14 md:h-16 px-5 md:px-[60px] flex items-center justify-between bg-black border-b border-g2">
      <a href="#" className="flex items-center gap-[14px] no-underline group">
        {/* Animated SK Logo */}
        <svg className="block shrink-0" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* corner accent squares */}
          <rect className="logo-sq1" x="2" y="2" width="4" height="4" fill="white" />
          <rect className="logo-sq2" x="34" y="2" width="4" height="4" fill="white" />
          <rect className="logo-sq3" x="2" y="34" width="4" height="4" fill="white" />
          <rect className="logo-sq4" x="34" y="34" width="4" height="4" fill="white" />
          {/* outer border rect */}
          <rect x="1" y="1" width="38" height="38" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" fill="none" />
          {/* rotating dashed ring */}
          <circle className="logo-ring" cx="20" cy="20" r="13" stroke="white" strokeOpacity="0.5" strokeWidth="0.75"
            strokeDasharray="4 3" fill="none" />
          {/* S K letters */}
          <text className="logo-s" x="20" y="26" textAnchor="middle" fontFamily="'Google Sans', sans-serif" fontWeight="800"
            fontSize="14" fill="white">SK</text>
        </svg>
        <span className="font-['Google_Sans',sans-serif] text-[13px] font-bold text-g4 transition-colors duration-200 group-hover:text-g7">SK</span>
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
