import NavigationPath from "@/components/navigation-path";

type Props = {
  children: React.ReactNode;
};

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationPath />
      {children}
    </>
  );
};

export default layout;
