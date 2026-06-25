import CustomButton from '@/components/ui/CustomButton';
import OutlineBadgeDemo from '@/components/shadcn-space/badge/badge-03';

export default function CTA() {
  return (
    <section className="min-h-[70vh] px-5 md:px-[28px] lg:px-[60px] bg-black flex flex-col items-center justify-center border-t border-g2">
      <div className="w-full max-w-[900px] 2xl:max-w-[1280px] flex flex-col items-center text-center my-auto py-[100px]">
        {/* Top Content Group */}
        <div className="flex flex-col items-center w-full">
          <OutlineBadgeDemo variant="default" className="mb-[16px] md:mb-[20px] 2xl:mb-[32px] 2xl:text-[14px] 2xl:px-4 2xl:py-1.5 uppercase tracking-widest">
            Get Started
          </OutlineBadgeDemo>

          <h2 className="text-[30px] md:text-[44px] lg:text-[56px] 2xl:text-[88px] font-light leading-[1.2] md:leading-[1.1] mb-4 md:mb-[24px] 2xl:mb-[40px] text-white tracking-tight">
            Deploy credit.<br />
            <strong className="font-medium block">Own the future.</strong>
            <span className="text-g5 font-light relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 2xl:after:-bottom-3 after:w-full after:h-px 2xl:after:h-[2px] after:bg-g4">
              Start in 48 hours.
            </span>
          </h2>

          <p className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[24px] text-g6 font-light leading-[1.7] md:leading-[1.6] mb-6 md:mb-[32px] 2xl:mb-[56px] max-w-[640px] 2xl:max-w-[900px]">
            Join the financial institutions using SK to power the next generation of corporate credit infrastructure across Latin America.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-[10px] md:gap-[16px] w-full md:w-auto">
            <CustomButton href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`} variant="primary" className="2xl:text-[16px]">Get Started</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}