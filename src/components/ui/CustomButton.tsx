import React from 'react';

interface CustomButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'navbar';
  children: React.ReactNode;
}

export default function CustomButton({ variant = 'primary', children, className = '', ...props }: CustomButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-5 py-2.5 rounded-md text-[13px] lg:text-[14px] font-bold transition-colors duration-200 text-center";

  let variantStyle = "";
  if (variant === 'primary') {
    variantStyle = "bg-white text-black hover:bg-[#E0E0E0] w-full md:w-auto";
  } else if (variant === 'secondary') {
    variantStyle = "bg-white/10 text-white hover:bg-white/20 w-full md:w-auto";
  } else if (variant === 'navbar') {
    variantStyle = "px-[18px] py-[11px] border border-g3 rounded-md text-[10px] font-bold hover:bg-g2";
  }

  return (
    <a
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
