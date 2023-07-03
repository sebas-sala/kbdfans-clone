import { FC, ReactNode } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react"

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

export const Dialog: FC<Props> = ({ children, isOpen, onClose, title }) => {
  return (
    <Modal size='xl' isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className='py-10 px-8'>
        <ModalHeader className='mx-auto text-4xl font-bold'>
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
