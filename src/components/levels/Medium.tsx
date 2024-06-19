import Box from "../Box";
import { BoardProps } from "../Board";

export const Medium = ({
  activeBox,
  isDisabled,
  BoxClickAction,
}: BoardProps) => {
  return (
    <div className="bg-zinc-800 grid grid-cols-3 gap-2 w-auto h-auto p-4 rounded-lg justify-items-center items-center">
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
      <Box
        id={5}
        active={activeBox === 5}
        disabled={isDisabled}
        onClick={() => BoxClickAction(5)}
      />
      <Box
        id={6}
        active={activeBox === 6}
        disabled={isDisabled}
        onClick={() => BoxClickAction(6)}
      />
      <Box
        id={7}
        active={activeBox === 7}
        disabled={isDisabled}
        onClick={() => BoxClickAction(7)}
      />
      <Box
        id={8}
        active={activeBox === 8}
        disabled={isDisabled}
        onClick={() => BoxClickAction(8)}
      />
      <Box
        id={9}
        active={activeBox === 9}
        disabled={isDisabled}
        onClick={() => BoxClickAction(9)}
      />
    </div>
  );
};
