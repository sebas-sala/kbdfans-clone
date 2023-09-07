"use client";

import {
  Drawer as DrawerContainer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  children: React.ReactNode;
  placement: any;
  size: string;
  icon: React.ReactNode;
  headerText: string;
  bodyStyles: string;
};

const Drawer: React.FC<Props> = ({
  children,
  placement,
  size,
  icon,
  headerText,
  bodyStyles,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>{icon}</button>
      <DrawerContainer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="flex items-center justify-between">
            <span>{headerText}</span>
            <AiFillCloseCircle
              className="cursor-pointer rounded-full text-3xl text-gray-200 outline-2 outline-black hover:text-gray-400 hover:outline"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody className={`${bodyStyles}`}>{children}</DrawerBody>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
