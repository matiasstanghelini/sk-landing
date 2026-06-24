import SectionHeader from '@/components/ui/SectionHeader';
import CustomButton from '@/components/ui/CustomButton';

export default function Coverage() {
  return (
    <section className="py-[64px] px-5 md:py-[80px] md:px-[28px] lg:py-[140px] lg:px-[60px] bg-g1">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          badge="Coverage"
          lightTitle={<>One API.<br /></>}
          boldTitle="Six markets. Zero friction."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-center pt-[48px] lg:pt-[72px]">
          <div>
            <p className="text-[14px] lg:text-[15px] text-g6 font-light leading-[1.7] lg:leading-[1.8] mb-[36px]">
              Deploy credit infrastructure across Latin America through a
              single API. SK manages each country's local banking requirements, regulatory obligations, and tax frameworks
              natively.
            </p>
            <CustomButton href="#" variant="secondary">View Coverage Details</CustomButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-g2">
            <div className="p-[20px_16px] lg:p-[28px_24px] border-r border-b border-g2 bg-g1 transition-colors duration-200 hover:bg-g2">
              <div className="font-['Google_Sans',sans-serif] text-[13px] lg:text-[15px] font-normal mb-1.5">Mexico</div>
              <div className="text-[10px] lg:text-[11px] text-g5 uppercase font-bold">SPEI · Banxico</div>
            </div>
            <div className="p-[20px_16px] lg:p-[28px_24px] border-r border-b border-g2 bg-g1 transition-colors duration-200 hover:bg-g2">
              <div className="font-['Google_Sans',sans-serif] text-[13px] lg:text-[15px] font-normal mb-1.5">Brazil</div>
              <div className="text-[10px] lg:text-[11px] text-g5 uppercase font-bold">PIX · Bacen</div>
            </div>
            <div className="p-[20px_16px] lg:p-[28px_24px] border-r border-b border-g2 bg-g1 transition-colors duration-200 hover:bg-g2">
              <div className="font-['Google_Sans',sans-serif] text-[13px] lg:text-[15px] font-normal mb-1.5">Colombia</div>
              <div className="text-[10px] lg:text-[11px] text-g5 uppercase font-bold">PSE · Superfinanciera</div>
            </div>
            <div className="p-[20px_16px] lg:p-[28px_24px] border-r border-b border-g2 bg-g1 transition-colors duration-200 hover:bg-g2">
              <div className="font-['Google_Sans',sans-serif] text-[13px] lg:text-[15px] font-normal mb-1.5">Chile</div>
              <div className="text-[10px] lg:text-[11px] text-g5 uppercase font-bold">TEF · CMF</div>
            </div>
            <div className="p-[20px_16px] lg:p-[28px_24px] border-r border-b border-g2 bg-g1 transition-colors duration-200 hover:bg-g2">
              <div className="font-['Google_Sans',sans-serif] text-[13px] lg:text-[15px] font-normal mb-1.5">Peru</div>
              <div className="text-[10px] lg:text-[11px] text-g5 uppercase font-bold">CCI · SBS</div>
            </div>
            <div className="p-[20px_16px] lg:p-[28px_24px] border-r border-b border-g2 bg-g1 transition-colors duration-200 hover:bg-g2">
              <div className="font-['Google_Sans',sans-serif] text-[13px] lg:text-[15px] font-normal mb-1.5">Argentina</div>
              <div className="text-[10px] lg:text-[11px] text-g5 uppercase font-bold">CBU · BCRA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}