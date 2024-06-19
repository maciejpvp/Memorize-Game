import { Button } from "./Button";

type MainMenuProps = {
  startGameAction: () => void;
  showSettingsAction: () => void;
};

export const MainMenu = ({
  startGameAction,
  showSettingsAction,
}: MainMenuProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-zinc-200 text-3xl">Memorize Game</h1>
      <div className="flex flex-col gap-2">
        <Button onClick={startGameAction}>Start</Button>
        <Button onClick={showSettingsAction}>Settings</Button>
      </div>
    </div>
  );
};
