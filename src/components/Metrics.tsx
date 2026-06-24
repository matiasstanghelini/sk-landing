"use client"
import StatisticsCard, { StatItem } from '@/components/shadcn-space/card/card-06';
import { Wallet, Globe, Clock, TrendingUp, MapPin, Zap } from 'lucide-react';

export default function Metrics() {
  const metrics: StatItem[] = [
    {
      title: 'Credit Facilitated',
      subtitle: '$2.4B',
      cardIcon: Wallet,
      badgeColor: 'bg-white/10 text-white/80',
      statusValue: '+24% YoY',
      statusIcon: TrendingUp,
    },
    {
      title: 'Active Markets',
      subtitle: '6',
      cardIcon: Globe,
      badgeColor: 'bg-white/10 text-white/80',
      statusValue: 'Growing',
      statusIcon: MapPin,
    },
    {
      title: 'Integration Time',
      subtitle: '48h',
      cardIcon: Clock,
      badgeColor: 'bg-white/10 text-white/80',
      statusValue: 'Fast',
      statusIcon: Zap,
    },
  ];

  return (
    <section className="py-[80px] md:py-[120px] px-5 md:px-[28px] lg:px-[60px] bg-black border-t border-g2">
      <div className="max-w-[1280px] mx-auto w-full">

        {/* Title and Description */}
        <div className="mb-12 md:mb-16 text-center max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.1] mb-6 tracking-tight">
            Move faster. <strong className="font-medium block md:inline">Scale further.</strong>
          </h2>
          <p className="text-[16px] md:text-[18px] text-g6 font-light leading-[1.6]">
            Disrupting corporate finance requires more than just capital—it requires speed. Process massive volumes on an infrastructure built for the next generation.
          </p>
        </div>

        {/* Statistics Cards Component */}
        <StatisticsCard items={metrics} />
      </div>
    </section>
  );
}
