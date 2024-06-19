import { Button } from "./Button";
import Modal from "./Modal";

type GameOverModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const GameOverModal = ({ onClose, isOpen }: GameOverModalProps) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="p-3 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold ">You made a mistake</h1>
          <h2>Please try again</h2>
        </div>
        <Button onClick={onClose}>Try Again</Button>
      </div>
    </Modal>
  );
};
