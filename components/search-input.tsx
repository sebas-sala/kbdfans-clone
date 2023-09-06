"use client";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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

import { fetchProducts } from "@/services/products-services";

import { Product } from "@/types/db";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { data, isLoading } = useQuery<Product[]>("products", fetchProducts);

  useEffect(() => {
    if (search) {
      const filteredProducts = data?.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filteredProducts);
      if (filteredProducts) setFilteredProducts(filteredProducts);
    }
  }, [search, data]);

  return (
    <>
      <BsSearch
        className="cursor-pointer transition duration-200 hover:text-white/90"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody className="p-0 bg-black">
            <InputGroup>
              <InputLeftElement pointerEvents="auto">
                <BsSearch className="text-white text-xl cursor-pointerhover:text-gray-300" />
              </InputLeftElement>
              <Input
                onChange={handleOnChange}
                placeholder="Search a product..."
                className="w-full text-white"
              />
            </InputGroup>
            {search && (
              <>
                {isLoading ? (
                  <p>Loading...</p>
                ) : filteredProducts.length > 0 ? (
                  <ul className="text-white space-y-2 p-2 max-h-56 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="cursor-pointer hover:bg-white transition duration-200 hover:text-black/90"
                      >
                        <a href={`/collections/all/${product.id}`}>
                          {product.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No products found.</p>
                )}
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
