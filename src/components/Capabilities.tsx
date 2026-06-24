import SectionHeader from '@/components/ui/SectionHeader';

export default function Capabilities() {
  return (
    <section className="py-[64px] px-5 md:py-[80px] md:px-[28px] lg:py-[140px] lg:px-[60px] bg-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-[80px] items-end pb-[36px] md:pb-[48px] lg:pb-[72px] border-b border-g2">
          <div>
            <SectionHeader
              badge="Capabilities"
              lightTitle={<>Everything you need.<br /></>}
              boldTitle="Nothing you don't."
            />
          </div>
          <p className="text-[14px] lg:text-[15px] text-g6 font-light leading-[1.7] lg:leading-[1.8]">
            Every layer required to deploy compliant, scalable credit products across Latin America —
            without building or maintaining the underlying infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-l-0 lg:border-l border-t-0 lg:border-t border-g2">
          {/* Card 1 */}
          <div className="p-[32px_24px] lg:p-[48px_40px] border-l md:border-l lg:border-l-0 border-t md:border-t lg:border-t-0 lg:border-r border-b border-g2 bg-black transition-colors duration-200 hover:bg-g2 relative group">
            <div className="absolute -top-px left-0 h-px w-0 bg-white transition-[width] duration-400 group-hover:w-full"></div>
            <span className="font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-g4 uppercase block mb-[18px] lg:mb-[28px] font-bold">01</span>
            <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">AI-Native Underwriting</h3>
            <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
              Models trained on LATAM corporate data. Analysis extends beyond bureau scores to include cash flow
              patterns, trade relationships, and real-time ERP signals.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-[32px_24px] lg:p-[48px_40px] border-l md:border-l lg:border-l-0 border-t-0 lg:border-t-0 lg:border-r border-b border-g2 bg-black transition-colors duration-200 hover:bg-g2 relative group">
            <div className="absolute -top-px left-0 h-px w-0 bg-white transition-[width] duration-400 group-hover:w-full"></div>
            <span className="font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-g4 uppercase block mb-[18px] lg:mb-[28px] font-bold">02</span>
            <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">Built-in Compliance</h3>
            <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
              KYB, AML, and local regulatory compliance managed by SK across all operating markets. No requirement to
              build or maintain separate compliance stacks per country.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-[32px_24px] lg:p-[48px_40px] border-l md:border-l lg:border-l-0 border-t-0 lg:border-t-0 lg:border-r border-b border-g2 bg-black transition-colors duration-200 hover:bg-g2 relative group">
            <div className="absolute -top-px left-0 h-px w-0 bg-white transition-[width] duration-400 group-hover:w-full"></div>
            <span className="font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-g4 uppercase block mb-[18px] lg:mb-[28px] font-bold">03</span>
            <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">Off-Balance Sheet Risk</h3>
            <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
              SK assumes full credit risk, enabling capital-light product deployment. Offer institutional credit
              facilities without NPL exposure or the burden of collections operations.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-[32px_24px] lg:p-[48px_40px] border-l md:border-l lg:border-l-0 border-t-0 lg:border-t-0 lg:border-r border-b border-g2 bg-black transition-colors duration-200 hover:bg-g2 relative group">
            <div className="absolute -top-px left-0 h-px w-0 bg-white transition-[width] duration-400 group-hover:w-full"></div>
            <span className="font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-g4 uppercase block mb-[18px] lg:mb-[28px] font-bold">04</span>
            <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">Rapid Integration</h3>
            <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
              Pre-built connectors for SAP, Oracle, Salesforce, and major LATAM ERP platforms. From API key issuance to
              live disbursements in under 48 hours.
            </p>
          </div>
          {/* Card 5 */}
          <div className="p-[32px_24px] lg:p-[48px_40px] border-l md:border-l lg:border-l-0 border-t-0 lg:border-t-0 lg:border-r border-b border-g2 bg-black transition-colors duration-200 hover:bg-g2 relative group">
            <div className="absolute -top-px left-0 h-px w-0 bg-white transition-[width] duration-400 group-hover:w-full"></div>
            <span className="font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-g4 uppercase block mb-[18px] lg:mb-[28px] font-bold">05</span>
            <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">Portfolio Intelligence</h3>
            <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
              Real-time visibility into portfolio performance, utilization rates, repayment health, and risk
              concentration metrics — live for every client entity on your platform.
            </p>
          </div>
          {/* Card 6 */}
          <div className="p-[32px_24px] lg:p-[48px_40px] border-l md:border-l lg:border-l-0 border-t-0 lg:border-t-0 lg:border-r border-b border-g2 bg-black transition-colors duration-200 hover:bg-g2 relative group">
            <div className="absolute -top-px left-0 h-px w-0 bg-white transition-[width] duration-400 group-hover:w-full"></div>
            <span className="font-['Google_Sans',sans-serif] text-[9px] lg:text-[10px] text-g4 uppercase block mb-[18px] lg:mb-[28px] font-bold">06</span>
            <h3 className="font-['Google_Sans',sans-serif] text-[15px] lg:text-[16px] font-normal text-white mb-[14px] leading-[1.3]">Local Payment Rails</h3>
            <p className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
              Native connectivity to SPEI, PIX, PSE, and regional LATAM payment systems. Instant disbursements and
              collections in local currency with no foreign exchange friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}