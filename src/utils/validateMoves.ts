// export const validateMoves = (
//   moves: number[],
//   userMoves: number[],
// ): boolean => {
//   if (userMoves.length > moves.length) return false;
//
//   for (let i = 0; i < userMoves.length; i++) {
//     if (userMoves[i] !== moves[i]) {
//       return false;
//     }
//   }
//   return true;
// };
//
type validateMovesProps = {
  moves: number[];
  userMoves: number[];
};

export const validateMoves = ({
  moves,
  userMoves,
}: validateMovesProps): boolean => {
  if (userMoves.length > moves.length) return false;

  for (let i = 0; i < userMoves.length; i++) {
    if (userMoves[i] !== moves[i]) {
      return false;
    }
  }
  return true;
};
