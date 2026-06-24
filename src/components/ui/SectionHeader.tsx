import React from 'react';
import OutlineBadgeDemo from '@/components/shadcn-space/badge/badge-03';

interface SectionHeaderProps {
  badge: string;
  lightTitle: React.ReactNode;
  boldTitle: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ badge, lightTitle, boldTitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <OutlineBadgeDemo className="mb-[18px] lg:mb-[28px]">
        {badge}
      </OutlineBadgeDemo>
      <h2 className="font-['Google_Sans',sans-serif] text-[26px] md:text-[32px] lg:text-[clamp(26px,3.2vw,46px)] font-light leading-[1.2] lg:leading-[1.15] text-white">
        {lightTitle}
        <strong className="font-medium block">{boldTitle}</strong>
      </h2>
    </div>
  );
}
