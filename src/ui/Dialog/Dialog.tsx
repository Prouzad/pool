import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog/Dialog.utils";
import { cn } from "@/utils/twMerge";

export const Modal = ({
  isOpen,
  onClose,
  children,
  classNames,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNames?: {
    wrapper?: string;
    content?: string;
  };
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle></DialogTitle>
      <DialogContent className={cn(classNames?.content)}>
        <div className={classNames?.wrapper}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
