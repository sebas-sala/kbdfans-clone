"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import LoginForm from "./login-form";
import AuthButton from "./auth-button";

export default function LoginDialog() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <AuthButton onOpen={onOpen} text="Login" />
      <Modal size="xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="px-8 py-10">
          <ModalHeader className="mx-auto text-4xl font-bold">
            Login
          </ModalHeader>
          <ModalBody>
            <LoginForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
