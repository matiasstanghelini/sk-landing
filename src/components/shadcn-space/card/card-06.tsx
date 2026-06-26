"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export interface StatItem {
    title: string;
    subtitle: string;
    cardIcon: React.ComponentType<{ className?: string }>;
    badgeColor: string;
    statusValue: string;
    statusIcon: React.ComponentType<{ className?: string }>;
}

const StatisticsCard = ({ items }: { items: StatItem[] }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 w-full">
            <Card className="p-0 bg-transparent border-white/10 text-white">
                <CardContent className="flex items-center w-full lg:flex-nowrap flex-wrap px-0">
                    {items.map((item, index) => {
                        return (
                            <div
                                className="flex-1 md:w-6/12 w-full border-e border-white/10 last:border-e-0"
                                key={index}
                            >
                                <div className="p-8">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between items-start mb-1">
                                            <h5 className="text-sm font-medium text-white">{item.title}</h5>
                                            <div className="p-3 rounded-full outline outline-white/10 text-white bg-white/5">
                                                <item.cardIcon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h5 className="text-3xl md:text-4xl font-semibold text-white">{item.subtitle}</h5>
                                            <div className="flex items-center mt-1">
                                                <Badge className={`${item.badgeColor} px-2.5 py-1 text-[11px] font-medium`}>
                                                    <div className="flex items-center gap-1">
                                                        {item.statusValue}
                                                        <item.statusIcon className="w-3.5 h-3.5" />
                                                    </div>
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </CardContent>
            </Card>
        </div>
    );
}
export default StatisticsCard;
