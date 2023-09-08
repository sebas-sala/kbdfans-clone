type AuthButtonProps = {
  onOpen: () => void;
  text: string;
};

export default function AuthButton({ onOpen, text }: AuthButtonProps) {
  return (
    <button
      onClick={onOpen}
      className="cursor-pointer transition duration-300 hover:text-gray-400"
    >
      {text}
    </button>
  );
}
