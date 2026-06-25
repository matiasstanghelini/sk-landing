export default function Footer() {
  return (
    <footer className="bg-black border-t border-g2 p-[28px_20px] md:p-[32px_24px] lg:p-[40px_60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 lg:gap-[20px] flex-wrap">
      <div className="flex items-center gap-[14px]">
        <img 
          src={`${process.env.NEXT_PUBLIC_LOGO_BASE_URL}dark.svg`} 
          alt="SK Logo" 
          className="hidden dark:block shrink-0 w-8 h-8 object-contain opacity-60" 
        />
        <img 
          src={`${process.env.NEXT_PUBLIC_LOGO_BASE_URL}light.svg`} 
          alt="SK Logo" 
          className="block dark:hidden shrink-0 w-8 h-8 object-contain opacity-60" 
        />
        <span className="text-[11px] lg:text-[12px] text-g4">© 2026 SK. All rights reserved.</span>
      </div>
      <ul className="flex flex-wrap gap-4 lg:gap-[32px] list-none">
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[11px] text-g4 no-underline uppercase font-bold transition-colors duration-200 hover:text-g6">Privacy</a></li>
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[11px] text-g4 no-underline uppercase font-bold transition-colors duration-200 hover:text-g6">Terms</a></li>
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[11px] text-g4 no-underline uppercase font-bold transition-colors duration-200 hover:text-g6">API Docs</a></li>
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[11px] text-g4 no-underline uppercase font-bold transition-colors duration-200 hover:text-g6">Careers</a></li>
        <li><a href="#" className="font-['Google_Sans',sans-serif] text-[11px] text-g4 no-underline uppercase font-bold transition-colors duration-200 hover:text-g6">Security</a></li>
      </ul>
    </footer>
  );
}
