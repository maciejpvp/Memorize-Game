import { useState, useEffect } from "react";
import Status from "./Status";
import { validateMoves } from "../utils/validateMoves";
import { genMoves } from "../utils/generateMove";
import { GameOverModal } from "./GameOverModal";
import { Board } from "./Board";

type GameProps = {
  difficulty: number;
};

export const Game = ({ difficulty }: GameProps) => {
  const [moves, setMoves] = useState<number[]>(() =>
    genMoves({ arr: [], min: 1, max: difficulty }),
  );
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userMoves, setUserMoves] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("Be ready...");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (message === "Game Over") return;
    const interval = setInterval(async () => {
      if (message !== "Memorize pattern") setMessage("Memorize pattern");
      if (currentIndex < moves.length) {
        setActiveBox(null);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setActiveBox(moves[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setActiveBox(null);
        setMessage("Play");
        setIsDisabled(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, moves, message]);

  const handleBoxClick = (id: number) => {
    const newUserMoves = [...userMoves, id];
    setUserMoves(newUserMoves);

    if (validateMoves({ moves, userMoves: newUserMoves })) {
      if (newUserMoves.length === moves.length) {
        setMessage("Be ready...");
        setIsDisabled(true);
        setMoves(genMoves({ arr: moves, min: 1, max: difficulty }));
        setCurrentIndex(0);
        setUserMoves([]);
      }
    } else {
      setMessage("Game Over");
    }
  };

  const handleRestart = () => {
    setMessage("Be ready...");
    setCurrentIndex(0);
    setUserMoves([]);
    setMoves(genMoves({ arr: [], min: 1, max: difficulty }));
  };

  return (
    <div>
      <GameOverModal isOpen={message === "Game Over"} onClose={handleRestart} />
      {<Status message={message} />}
      <Board
        activeBox={activeBox}
        isDisabled={isDisabled}
        BoxClickAction={handleBoxClick}
        difficulty={difficulty}
      />
    </div>
  );
};
