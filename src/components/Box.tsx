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
      className={`relative bg-stone-900 active:bg-stone-950 transition-all duration-300 w-16 h-16 sm:w-24 sm:h-24 flex justify-center items-center text-xl text-stone-200 ${active ? "bg-yellow-400 text-stone-900" : ""} ${disabled ? "cursor-pointer" : "hover-effect cursor-default"} `}
    >
      {id}
    </button>
  );
};

export default Box;
