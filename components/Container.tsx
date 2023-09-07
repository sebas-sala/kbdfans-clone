type Props = {
  children: React.ReactNode;
  styles?: string;
};

const Container: React.FC<Props> = ({ children, styles }) => {
  return (
    <div className={`container relative mx-auto px-10 md:px-0 ${styles}`}>
      {children}
    </div>
  );
};

export default Container;
