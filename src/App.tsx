import { useState } from "react";
import { Game } from "./components/Game";
import { MainMenu } from "./components/MainMenu";
import { SettingsModal } from "./components/SettingsModal";
import { BackButton } from "./components/BackButton";

const App = () => {
  const [isGame, setIsGame] = useState<boolean>(false);
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [isSettings, setIsSettings] = useState<boolean>(false);
  const [boxes, setBoxes] = useState<number>(4);

  const handleStartGame = () => {
    setShowBoard((prev) => !prev);
    if (isGame) {
      setTimeout(() => {
        setIsGame((prev) => !prev);
      }, 300);
    } else {
      setIsGame((prev) => !prev);
    }
  };

  const handleSettings = () => {
    setIsSettings((prev) => !prev);
  };

  const handleChangeDifficulty = (value: number) => {
    setBoxes(value);
  };

  return (
    <div className="h-svh bg-zinc-900 flex justify-center items-center">
      {!isGame && !showBoard && (
        <MainMenu
          startGameAction={handleStartGame}
          showSettingsAction={handleSettings}
        />
      )}
      <SettingsModal
        isOpen={isSettings}
        onClose={handleSettings}
        difficultyChangeAction={handleChangeDifficulty}
        difficulty={boxes}
      />
      {isGame && (
        <>
          <Game difficulty={boxes} showBoard={showBoard} />
          <BackButton GoBackAction={handleStartGame} />
        </>
      )}
    </div>
  );
};

export default App;
