import { Button } from "./Button";
import { ChangeSettings } from "./ChangeSettings";
import Modal from "./Modal";

type SettingsModalProps = {
  onClose?: () => void;
  isOpen: boolean;
  difficultyChangeAction: (value: number) => void;
  difficulty: number;
};

export const SettingsModal = ({
  isOpen,
  onClose,
  difficultyChangeAction,
  difficulty,
}: SettingsModalProps) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-2xl">Settings</h1>
        <ChangeSettings active={difficulty} action={difficultyChangeAction} />
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};
