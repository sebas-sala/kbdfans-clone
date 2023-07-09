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
  trigger: React.ReactNode
}

export const Dialog: React.FC<Props> = ({ children, title, trigger }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <div onClick={onOpen}>{trigger}</div>
      <Modal size='xl' isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='px-8 py-10'>
          <ModalHeader className='mx-auto text-4xl font-bold'>
            {title}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
