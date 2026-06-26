import CustomButton from '@/components/ui/CustomButton';
import OutlineBadgeDemo from '@/components/shadcn-space/badge/badge-03';
import Beams from '@/components/Beams';

import TextType from '@/components/TextType';

export default function Hero() {
  return (
    <section className="relative min-h-screen px-5 md:px-[28px] lg:px-[60px] bg-black flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <div className="relative z-10 w-full max-w-[900px] 2xl:max-w-[1280px] flex flex-col items-center text-center my-auto pt-[100px] pb-[60px]">
        {/* Top Content Group */}
        <div className="flex flex-col items-center w-full">
          {/* Premium Glowing Badge */}
          <div className="mb-[24px] md:mb-[28px] 2xl:mb-[40px] inline-flex items-center px-3.5 py-1.5 2xl:px-4 2xl:py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default">
            <span className="text-[11px] md:text-[12px] 2xl:text-[13px] font-bold tracking-[0.05em] text-white">
              Credit as a Service — Corporate LATAM
            </span>
          </div>

          <h1 className="text-[30px] md:text-[44px] lg:text-[56px] 2xl:text-[88px] font-light leading-[1.2] md:leading-[1.1] mb-4 md:mb-[24px] 2xl:mb-[40px] text-white tracking-tight">
            Capital moves<br />
            <strong className="font-medium block">when you decide.</strong>
            <span className="text-g5 font-light inline-flex items-center gap-3">
              <span>Built for</span>
              <TextType
                text={['enterprise', 'banks', 'fintechs', 'suppliers']}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor
                cursorCharacter="_"
                deletingSpeed={20}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              />
            </span>
          </h1>

          <p className="text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[24px] text-g6 font-light leading-[1.7] md:leading-[1.6] mb-6 md:mb-[32px] 2xl:mb-[56px] max-w-[640px] 2xl:max-w-[900px]">
            SK is the first AI-native credit infrastructure for corporate Latin America. Banks, fintechs, and enterprises
            deploy supply chain finance, credit lines, and BNPL — via API, in days.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-[10px] md:gap-[16px] w-full md:w-auto">
            <CustomButton href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`} variant="primary" className="2xl:text-[16px]">Get Started</CustomButton>
            <CustomButton href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/scoring`} variant="secondary" className="2xl:text-[16px]">View Scoring</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}