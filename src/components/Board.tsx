import { Easy } from "./levels/Easy";
import { Hard } from "./levels/Hard";
import { Medium } from "./levels/Medium";

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
  switch (difficulty) {
    case 4:
      return (
        <Easy
          activeBox={activeBox}
          isDisabled={isDisabled}
          BoxClickAction={BoxClickAction}
        />
      );
    case 9:
      return (
        <Medium
          activeBox={activeBox}
          isDisabled={isDisabled}
          BoxClickAction={BoxClickAction}
        />
      );
    case 16:
      return (
        <Hard
          activeBox={activeBox}
          isDisabled={isDisabled}
          BoxClickAction={BoxClickAction}
        />
      );
    default:
      return null;
  }
};
