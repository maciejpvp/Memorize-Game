type BoxProps = {
  id: number;
  active: boolean;
  disabled: boolean;
  onClick: () => void;
};

const Box = ({ id, active, disabled, onClick }: BoxProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-stone-900 active:bg-stone-950  transition-all duration-300 w-24 h-24 flex justify-center items-center text-xl text-stone-200 ${active ? "bg-yellow-400 text-stone-900" : ""} ${disabled ? "cursor-pointer" : "hover:bg-stone-400 cursor-default"} `}
    >
      {id}
    </button>
  );
};

export default Box;
