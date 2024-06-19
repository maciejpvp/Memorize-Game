import { Button } from "./Button";

type ChangeSettingsProps = {
  active: number;
  action: (value: number) => void;
};

export const ChangeSettings = ({ active, action }: ChangeSettingsProps) => {
  return (
    <div className="flex flex-row gap-2">
      <Button
        reverse
        active={active === 4 ? true : false}
        onClick={() => action(4)}
        disabled={active === 4}
      >
        Easy
      </Button>
      <Button
        reverse
        active={active === 9 ? true : false}
        onClick={() => action(9)}
        disabled={active === 9}
      >
        Medium
      </Button>
      <Button
        reverse
        active={active === 16 ? true : false}
        onClick={() => action(16)}
        disabled={active === 16}
      >
        Hard
      </Button>
    </div>
  );
};
