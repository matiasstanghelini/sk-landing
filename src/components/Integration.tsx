import SectionHeader from '@/components/ui/SectionHeader';

export default function Integration() {
  return (
    <section className="py-[64px] px-5 md:py-[80px] md:px-[28px] lg:py-[140px] lg:px-[60px] bg-g1" id="how">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          badge="Integration"
          lightTitle={<>Weeks of setup.<br /></>}
          boldTitle="Not years."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] lg:gap-[100px] items-start pt-[48px] lg:pt-[72px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-[48px_1fr] gap-[18px] lg:gap-[28px] py-[24px] lg:py-[32px] border-b border-t border-g2 transition-colors duration-200 group">
              <div className="font-['Google_Sans',sans-serif] text-[11px] font-semibold text-g4 pt-[3px] transition-colors duration-200 group-hover:text-white">01</div>
              <div>
                <div className="font-['Google_Sans',sans-serif] text-[14px] lg:text-[15px] font-normal text-g7 mb-2 transition-colors duration-200 group-hover:text-white">Connect via API</div>
                <div className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
                  Integrate SK's REST APIs or use pre-built SDKs for your technology stack.
                  Comprehensive documentation, sandbox environment, and dedicated technical support included from day one.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[48px_1fr] gap-[18px] lg:gap-[28px] py-[24px] lg:py-[32px] border-b border-g2 transition-colors duration-200 group">
              <div className="font-['Google_Sans',sans-serif] text-[11px] font-semibold text-g4 pt-[3px] transition-colors duration-200 group-hover:text-white">02</div>
              <div>
                <div className="font-['Google_Sans',sans-serif] text-[14px] lg:text-[15px] font-normal text-g7 mb-2 transition-colors duration-200 group-hover:text-white">Configure Credit Parameters</div>
                <div className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
                  Define credit limits, repayment structures, risk appetite, and product branding.
                  SK's AI models adapt dynamically to your portfolio composition and client base characteristics.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[48px_1fr] gap-[18px] lg:gap-[28px] py-[24px] lg:py-[32px] border-b border-g2 transition-colors duration-200 group">
              <div className="font-['Google_Sans',sans-serif] text-[11px] font-semibold text-g4 pt-[3px] transition-colors duration-200 group-hover:text-white">03</div>
              <div>
                <div className="font-['Google_Sans',sans-serif] text-[14px] lg:text-[15px] font-normal text-g7 mb-2 transition-colors duration-200 group-hover:text-white">Deploy and Scale</div>
                <div className="text-[13px] lg:text-[14px] text-g5 leading-[1.75] font-light">
                  Clients apply and receive approval within minutes, with same-day funding. SK
                  manages KYB verification, regulatory compliance, collections, and portfolio reporting automatically.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black border border-g3 relative lg:sticky lg:top-[84px]">
            <div className="bg-g2 py-[13px] px-[20px] flex items-center justify-between border-b border-g3">
              <div className="flex gap-[6px]">
                <div className="w-[9px] h-[9px] rounded-full bg-g3 border border-g4"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-g3 border border-g4"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-g3 border border-g4"></div>
              </div>
              <div className="font-['SF_Mono','Fira_Code',monospace] text-[11px] text-g5">POST /v1/credit/assess</div>
              <div className="text-[10px] uppercase text-g5 border border-g3 py-[3px] px-[8px]">Live</div>
            </div>
            <div className="p-[28px_24px] font-['SF_Mono','Fira_Code','Courier_New',monospace] text-[12.5px] leading-[1.85]">
              <span className="text-g4 italic">// Request</span><br/>
              <span className="text-g4">{"{"}</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"company_id"</span><span className="text-g4">:</span> <span className="text-white">"corp_mx_28471"</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"product"</span><span className="text-g4">:</span> <span className="text-white">"supply_chain_finance"</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"requested_limit"</span><span className="text-g4">:</span> <span className="text-g6">250000</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"currency"</span><span className="text-g4">:</span> <span className="text-white">"MXN"</span><br/>
              <span className="text-g4">{"}"}</span><br/>
              <br/>
              <span className="text-g4 italic">// Response — 840ms</span><br/>
              <span className="text-g4">{"{"}</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"status"</span><span className="text-g4">:</span> <span className="text-white">"approved"</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"approved_limit"</span><span className="text-g4">:</span> <span className="text-g6">220000</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"risk_score"</span><span className="text-g4">:</span> <span className="text-g6">87.4</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"kyb_verified"</span><span className="text-g4">:</span> <span className="text-white">true</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"funding_eta"</span><span className="text-g4">:</span> <span className="text-white">"same_day"</span><span className="text-g4">,</span><br/>
              &nbsp;&nbsp;<span className="text-g7">"credit_terms"</span><span className="text-g4">:</span> <span className="text-white">"net_60"</span><br/>
              <span className="text-g4">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}