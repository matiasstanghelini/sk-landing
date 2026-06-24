export default function Footer() {
  return (
    <footer className="bg-black border-t border-g2 p-[28px_20px] md:p-[32px_24px] lg:p-[40px_60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 lg:gap-[20px] flex-wrap">
      <div className="flex items-center gap-[14px]">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.6 }}>
          <rect x="2" y="2" width="4" height="4" fill="white" />
          <rect x="34" y="2" width="4" height="4" fill="white" />
          <rect x="2" y="34" width="4" height="4" fill="white" />
          <rect x="34" y="34" width="4" height="4" fill="white" />
          <rect x="1" y="1" width="38" height="38" stroke="white" strokeOpacity="0.3" strokeWidth="0.75" fill="none" />
          <circle cx="20" cy="20" r="13" stroke="white" strokeOpacity="0.4" strokeWidth="0.75" strokeDasharray="4 3"
            fill="none" />
          <text x="20" y="26" textAnchor="middle" fontFamily="'Google Sans', sans-serif" fontWeight="800" fontSize="14"
            fill="white">SK</text>
        </svg>
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
