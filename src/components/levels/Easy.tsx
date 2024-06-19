import Box from "../Box";
import { BoardProps } from "../Board";

export const Easy = ({ activeBox, isDisabled, BoxClickAction }: BoardProps) => {
  return (
    <div className="bg-zinc-800 grid grid-cols-2 gap-2 w-auto h-auto p-4 rounded-lg justify-items-center items-center">
      <Box
        id={1}
        active={activeBox === 1}
        disabled={isDisabled}
        onClick={() => BoxClickAction(1)}
      />
      <Box
        id={2}
        active={activeBox === 2}
        disabled={isDisabled}
        onClick={() => BoxClickAction(2)}
      />
      <Box
        id={3}
        active={activeBox === 3}
        disabled={isDisabled}
        onClick={() => BoxClickAction(3)}
      />
      <Box
        id={4}
        active={activeBox === 4}
        disabled={isDisabled}
        onClick={() => BoxClickAction(4)}
      />
    </div>
  );
};
