import { SetStateAction, Dispatch } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader } from "./ui/dialog";

import type { Sizes } from "@/types/sizes";

type Props = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  setHovered: Dispatch<SetStateAction<boolean>>;
  size: Sizes;
  image: React.ReactNode;
};

const ImageDialog: React.FC<Props> = ({
  children,
  title,
  onClose,
  isOpen,
  setHovered,
  image,
}) => {

  const onOpenChange = () => {
    setHovered(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent >
        <DialogDescription className="flex">
          <div className="relative h-96 w-4/6">{image}</div>
          <div className="flex-1">
            <DialogHeader className="border-b text-4xl font-bold ">
              {title}
            </DialogHeader>
            {children}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
