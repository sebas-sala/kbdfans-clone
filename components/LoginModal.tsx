import { useContext } from "react";
import { NavContext } from "@/context/NavProvider";

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal } = useContext(NavContext);

  return <p>aarst</p>;
};

export default LoginModal;
