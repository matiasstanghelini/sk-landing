import React from 'react';

interface CustomButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'navbar';
  children: React.ReactNode;
}

export default function CustomButton({ variant = 'primary', children, className = '', ...props }: CustomButtonProps) {
  const baseStyle = "inline-block px-6 py-3.5 rounded-[100px] text-[12px] lg:text-[13px] font-bold transition-colors duration-200 text-center";

  let variantStyle = "";
  if (variant === 'primary') {
    variantStyle = "bg-white text-black hover:bg-[#E0E0E0] w-full md:w-auto";
  } else if (variant === 'secondary') {
    variantStyle = "border border-g3 text-white bg-black hover:bg-g2 w-full md:w-auto";
  } else if (variant === 'navbar') {
    variantStyle = "px-[18px] py-[11px] border border-g3 rounded-[100px] text-[10px] font-bold hover:bg-g2";
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
