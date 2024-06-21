import { GoArrowLeft } from "react-icons/go";

type BackButtonProps = {
  GoBackAction: () => void;
};

export const BackButton = ({ GoBackAction }: BackButtonProps) => {
  return (
    <div className="text-zinc-200 absolute top-2 left-2 text-xl sm:text-4xl">
      <button onClick={GoBackAction}>
        <GoArrowLeft />
      </button>
    </div>
  );
};
