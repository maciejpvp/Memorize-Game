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
  const classNameReverse = `px-3 rounded-xl py-2`;
  if (reverse) {
    return (
      <motion.button
        onClick={onClick}
        disabled={disabled}
        className={classNameReverse}
        initial={{
          backgroundColor: active ? "rgb(212 212 216)" : "rgb(24 24 27)",
          color: active ? "rgb(24 24 27)" : "rgb(212 212 216)",
        }}
        animate={{
          backgroundColor: active ? "rgb(212 212 216)" : "rgb(24 24 27)",
          color: active ? "rgb(24 24 27)" : "rgb(212 212 216)",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.button>
    );
  }
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classNameNormal}
    >
      {children}
    </motion.button>
  );
};
