type ButtonProps = {
  handleClick?: () => void;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`w-full rounded-md ${
        disabled ? "bg-gray-800" : "bg-blue-400 hover:bg-blue-500"
      } px-4 py-2 text-white  transition`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
