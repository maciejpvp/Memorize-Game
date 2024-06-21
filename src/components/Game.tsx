import { useState, useEffect } from "react";
import Status from "./Status";
import { validateMoves } from "../utils/validateMoves";
import { genMoves } from "../utils/generateMove";
import { GameOverModal } from "./GameOverModal";
import { Board } from "./Board";
import { motion, AnimatePresence } from "framer-motion";

type GameProps = {
  difficulty: number;
  showBoard: boolean;
};

export const Game = ({ difficulty, showBoard }: GameProps) => {
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
    <AnimatePresence>
      {showBoard && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GameOverModal
            isOpen={message === "Game Over"}
            onClose={handleRestart}
          />
          {<Status message={message} />}
          <Board
            activeBox={activeBox}
            isDisabled={isDisabled}
            BoxClickAction={handleBoxClick}
            difficulty={difficulty}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
