import { SetStateAction, Dispatch } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react"
import { Sizes } from "@/types/sizes"

type Props = {
  children: React.ReactNode
  title: string
  isOpen: boolean
  onClose: () => void
  setHovered: Dispatch<SetStateAction<boolean>>
  size: Sizes
  image: React.ReactNode
}

const ImageDialog: React.FC<Props> = ({
  children,
  title,
  onClose,
  isOpen,
  setHovered,
  size,
  image,
}) => {
  const handleOnClose = () => {
    setHovered(false)
    onClose()
  }

  return (
    <Modal size={size} isCentered isOpen={isOpen} onClose={handleOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className='flex'>
          <div className='relative h-96 w-4/6'>{image}</div>
          <div className='flex-1'>
            <ModalHeader className='border-b text-4xl font-bold '>
              {title}
            </ModalHeader>
            {children}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImageDialog
