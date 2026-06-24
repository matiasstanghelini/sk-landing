import SectionHeader from '@/components/ui/SectionHeader';
import { LayoutGrid } from '@/components/ui/layout-grid';
import OutlineBadgeDemo from '@/components/shadcn-space/badge/badge-03';

const Thumbnail = ({ number, title, description, badge }: { number: string, title: string, description: string, badge: string }) => {
  return (
    <div className="flex flex-col h-full">
      <OutlineBadgeDemo className="w-fit mb-[18px] lg:mb-[28px] font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-white uppercase font-bold border-white/20 bg-white/5">
        {number}
      </OutlineBadgeDemo>
      <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">
        {title}
      </h3>
      <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light flex-grow">
        {description}
      </p>
      <div className="inline-block mt-[18px] lg:mt-[28px] text-[9px] lg:text-[10px] uppercase text-g5 pt-[10px] lg:pt-[14px] border-t border-g3 font-bold">
        {badge}
      </div>
    </div>
  );
};

const ExpandedContent = ({ title, description, details }: { title: string, description: string, details: string }) => {
  return (
    <div>
      <p className="font-bold md:text-3xl text-xl text-white mb-2">
        {title}
      </p>
      <p className="font-normal text-base text-white/80 mb-4 max-w-lg">
        {description}
      </p>
      <p className="font-light text-sm text-g4 max-w-lg">
        {details}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    className: "col-span-1",
    thumbnail: <Thumbnail 
      number="01 — B2B" 
      title="Supply Chain Finance" 
      description="Enable buyers and suppliers to optimize working capital through early payment programs, dynamic discounting, and reverse factoring." 
      badge="Working Capital" 
    />,
    content: <ExpandedContent 
      title="Supply Chain Finance" 
      description="Enable buyers and suppliers to optimize working capital through early payment programs, dynamic discounting, and reverse factoring."
      details="Fully automated and compliant workflows designed for enterprise-grade supply chains across Latin America."
    />
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: <Thumbnail 
      number="02 — API-First" 
      title="API Credit Lines" 
      description="Embed revolving credit lines directly into your ERP, marketplace, or banking platform. Pre-approved limits, real-time draws." 
      badge="Embedded Credit" 
    />,
    content: <ExpandedContent 
      title="API Credit Lines" 
      description="Embed revolving credit lines directly into your ERP, marketplace, or banking platform."
      details="Pre-approved limits, real-time draws, and instant settlements via a robust REST API designed for developers."
    />
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: <Thumbnail 
      number="03 — B2B & B2C" 
      title="Enterprise BNPL" 
      description="Buy Now Pay Later for corporate procurement. Allow business clients to purchase on net-30/60/90 terms while you receive immediate funding." 
      badge="Deferred Payment" 
    />,
    content: <ExpandedContent 
      title="Enterprise BNPL" 
      description="Buy Now Pay Later for corporate procurement. Allow business clients to purchase on net-30/60/90 terms."
      details="You receive immediate funding with zero credit risk, while your clients enjoy flexible payment schedules."
    />
  },
  {
    id: 4,
    className: "col-span-1",
    thumbnail: <Thumbnail 
      number="04 — Factoring" 
      title="Invoice Financing" 
      description="Convert accounts receivable into immediate liquidity. AI-driven invoice verification, automated KYB, and same-day funding." 
      badge="Receivables" 
    />,
    content: <ExpandedContent 
      title="Invoice Financing" 
      description="Convert accounts receivable into immediate liquidity with AI-driven verification."
      details="Automated KYB and same-day funding for qualifying corporate entities, eliminating cash flow bottlenecks."
    />
  },
  {
    id: 5,
    className: "col-span-1",
    thumbnail: <Thumbnail 
      number="05 — AI Engine" 
      title="Credit Decisioning" 
      description="Proprietary risk models trained on LATAM corporate data — analyzing 200+ signals including bank flows, trade history, and ERP data." 
      badge="Risk Intelligence" 
    />,
    content: <ExpandedContent 
      title="Credit Decisioning" 
      description="Proprietary risk models trained specifically on Latin American corporate financial data."
      details="Our engine analyzes over 200 signals including bank flows, trade history, and ERP data for real-time, accurate credit assessments."
    />
  },
  {
    id: 6,
    className: "col-span-1",
    thumbnail: <Thumbnail 
      number="06 — Infrastructure" 
      title="Banking Connectivity" 
      description="Native integrations with LATAM banking rails, payment infrastructure, and regulatory frameworks. Deploy across six markets." 
      badge="Payment Rails" 
    />,
    content: <ExpandedContent 
      title="Banking Connectivity" 
      description="Native integrations with LATAM banking rails, payment infrastructure, and regulatory frameworks."
      details="Deploy seamlessly across six key markets through a single, unified API layer that handles local compliance and routing."
    />
  }
];

export default function CoreProducts() {
  return (
    <section className="py-[64px] md:py-[80px] lg:py-[140px] bg-black border-t border-g2" id="products">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[28px] lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-[80px] items-end pb-[36px] md:pb-[48px] lg:pb-[72px] border-b border-g2 mb-8">
          <div>
            <SectionHeader
              badge="Core Products"
              lightTitle={<>Every credit product.<br /></>}
              boldTitle="One infrastructure."
            />
          </div>
          <p className="text-[14px] lg:text-[15px] text-g6 font-light leading-[1.7] lg:leading-[1.8]">
            From supply chain financing to embedded BNPL, SK powers every credit use case your
            corporate clients require — without building the underlying infrastructure.
          </p>
        </div>
      </div>
      
      {/* Layout Grid Container */}
      <div className="h-[1200px] md:h-[700px] lg:h-[800px] w-full max-w-[1400px] mx-auto">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}