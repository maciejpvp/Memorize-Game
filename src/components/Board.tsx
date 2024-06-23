import Box from "./Box";

export type BoardProps = {
  activeBox: number | null;
  isDisabled: boolean;
  BoxClickAction: (value: number) => void;
  difficulty?: number;
};

export const Board = ({
  activeBox,
  isDisabled,
  BoxClickAction,
  difficulty = 9,
}: BoardProps) => {
  return (
    <div
      className={`bg-zinc-800 grid grid-cols-${Math.sqrt(difficulty)} gap-2 w-auto h-auto p-4 rounded-lg justify-items-center items-center`}
    >
      {[...Array(difficulty).keys()]
        .map((i) => i + 1)
        .map((i) => (
          <Box
            key={i}
            id={i}
            active={activeBox === i}
            disabled={isDisabled}
            onClick={() => BoxClickAction(i)}
          />
        ))}
    </div>
  );
};
