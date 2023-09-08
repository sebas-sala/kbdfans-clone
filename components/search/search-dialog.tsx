"use client";

import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  useDisclosure,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import SearchResultList from "./search-result-list";

import useProductSearch from "@/hooks/use-product-search";

export default function SearchDialog() {
  const [search, setSearch] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { filteredProducts } = useProductSearch(search);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <BsSearch
        className="cursor-pointer transition duration-200 hover:text-white/90"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody className="bg-black">
            <InputGroup>
              <InputLeftElement pointerEvents="auto">
                <BsSearch className="text-white text-xl cursor-pointerhover:text-gray-300" />
              </InputLeftElement>
              <Input
                value={search}
                onChange={handleOnChange}
                placeholder="Search a product..."
                className="w-full text-white"
              />
            </InputGroup>
            <SearchResultList filteredProducts={filteredProducts} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
