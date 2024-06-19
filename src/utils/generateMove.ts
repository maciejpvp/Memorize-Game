type genMovesProps = {
  arr: number[];
  min: number;
  max: number;
};

export const genMoves = ({ arr, min, max }: genMovesProps): number[] => {
  const moves = [...arr];

  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  moves.push(num);

  return moves;
};
