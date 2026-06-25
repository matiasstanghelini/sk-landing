import { Button } from "@/components/ui/button";
import React from "react";

interface ButtonAnimatedBorderProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const ButtonAnimatedBorderDemo = ({
  children,
  icon,
  className = "",
  asChild = false,
  ...props
}: ButtonAnimatedBorderProps) => {
  return (
    <div className="w-fit h-fit relative inline-flex rounded-md overflow-hidden bg-g3">
      {/* Animated gradient border */}
      <span className="absolute inset-0 rounded-md pointer-events-none overflow-hidden">
        <span className="absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,_#2b7fff_0deg,_#2b7fff_40deg,_transparent_60deg)]" />
      </span>

      {/* Button */}
      <Button
        variant="ghost"
        asChild={asChild}
        className={`relative z-10 m-[1px] rounded-md bg-black text-white hover:!bg-black hover:!text-white shadow-none cursor-pointer ${className}`}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </Button>
    </div>
  );
};

export default ButtonAnimatedBorderDemo;

