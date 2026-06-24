import { Badge } from '@/components/ui/badge'
import React from 'react'
import { cn } from "@/lib/utils"

interface OutlineBadgeProps extends React.ComponentProps<typeof Badge> {
  children?: React.ReactNode;
}

const OutlineBadgeDemo = ({ children, className = "", variant = "outline", ...props }: OutlineBadgeProps) => {
  return (
    <Badge variant={variant} className={cn("px-3.5 py-1 h-fit", className)} {...props}>
      {children}
    </Badge>
  );
}

export default OutlineBadgeDemo