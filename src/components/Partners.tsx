import { Marquee } from "@/components/shadcn-space/animations/marquee";

export default function Partners() {
  const partners = [
    {
      name: "Bancolombia",
      logo: "https://api.iconify.design/arcticons/bancolombia.svg?color=white"
    },
    {
      name: "Nubank",
      logo: "https://api.iconify.design/simple-icons/nubank.svg?color=white"
    },
    {
      name: "Mercado Pago",
      logo: "https://api.iconify.design/simple-icons/mercadopago.svg?color=white"
    },
    {
      name: "BBVA Mexico",
      logo: "https://api.iconify.design/arcticons/bbva.svg?color=white"
    },
    {
      name: "Itaú",
      logo: "https://api.iconify.design/arcticons/samsung-itaucard.svg?color=white"
    },
    {
      name: "Rappi Pay",
      logo: "https://api.iconify.design/arcticons/rappi.svg?color=white"
    }
  ];

  return (
    <div className="relative py-[60px] md:py-[80px] px-5 bg-black border-b border-g2 overflow-hidden">
      {/* Subtle radial gradient background for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="relative max-w-[1280px] mx-auto z-10">
        <div className="text-[11px] lg:text-[12px] uppercase mb-10 lg:mb-16 text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-g5 via-g8 to-g5">
          Trusted by leading financial institutions across Latin America
        </div>
        
        {/* Marquee with side fade masks */}
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee className="[--duration:40s] p-0" pauseOnHover>
            {partners.map((p, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-500 mr-12 lg:mr-[80px] group cursor-pointer"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_0px_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-500" 
                />
                <span className="font-['Google_Sans',sans-serif] text-[15px] md:text-[17px] font-bold text-white group-hover:text-shadow-sm transition-all duration-500">
                  {p.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}