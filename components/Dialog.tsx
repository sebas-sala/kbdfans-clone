import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react"

type Props = {
  children: React.ReactNode
  title: string
  Button?: React.ReactNode
}

export const Dialog: React.FC<Props> = ({ children, title, Button }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <div onClick={onOpen}>{Button}</div>
      <Modal size='xl' isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='py-10 px-8'>
          <ModalHeader className='mx-auto text-4xl font-bold'>
            {title}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
