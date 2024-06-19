import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  reverse?: boolean;
  active?: boolean;
};

export const Button = ({
  onClick,
  disabled = false,
  children,
  reverse = false,
  active = false,
}: ButtonProps) => {
  const classNameNormal = "bg-zinc-300 rounded-sm py-1 text-zinc-700 w-full";
  const classNameReverse = `bg-zinc-700 px-3 rounded-xl py-2 ${active ? "bg-zinc-100 text-zinc-700" : ""}`;
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${reverse ? classNameReverse : classNameNormal}`}
    >
      {children}
    </motion.button>
  );
};
