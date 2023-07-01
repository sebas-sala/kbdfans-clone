"use client"
import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { NavContext } from "@/context/NavProvider";

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal } = useContext(NavContext);

  return (
    <Dialog open={showLoginModal} onClose={() => setShowLoginModal(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
        <button onClick={() => setShowLoginModal(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default LoginModal;
