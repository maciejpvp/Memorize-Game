type StatusProps = {
  message: string;
};

export const Status = ({ message }: StatusProps) => {
  return (
    <div className="bg-zinc-800 p-3 text-zinc-200 text-xl flex justify-center mb-3">
      <span>{message}</span>
    </div>
  );
};