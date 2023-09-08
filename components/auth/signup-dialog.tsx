"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import SignupForm from "./signup-form";
import AuthButton from "./auth-button";

export default function SignupDialog() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <AuthButton onOpen={onOpen} text="Signup" />
      <Modal size="xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="px-8 py-10">
          <ModalHeader className="mx-auto text-4xl font-bold">
            Signup
          </ModalHeader>
          <ModalBody>
            <SignupForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
