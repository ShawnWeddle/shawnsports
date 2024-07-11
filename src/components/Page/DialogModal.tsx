import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scroll-area";

type DialogModalContentProps = {
  title: string;
  description: string;
  children?: JSX.Element | JSX.Element[];
};

const DialogModalContent: React.FC<DialogModalContentProps> = (
  props: DialogModalContentProps
) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogDescription>{props.description}</DialogDescription>
      </DialogHeader>
      <ScrollArea className="max-h-96">
        <div className="flex justify-center">{props.children}</div>
      </ScrollArea>
    </DialogContent>
  );
};

export default DialogModalContent;
