import { cn } from "@/lib/utils";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  styles?: string;
}

const Container: React.FC<IProps> = ({
  children,
  className,
  styles,
  ...props
}) => {
  return (
    <div
      className={cn(
        "container relative mx-auto px-10 md:px-0",
        className,
        styles
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
