import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";

type AlertDialogModalContentProps = {
  title: string;
  description: string;
  children?: JSX.Element | JSX.Element[];
};

const AlertDialogModalContent: React.FC<AlertDialogModalContentProps> = (
  props: AlertDialogModalContentProps
) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{props.title}</AlertDialogTitle>
        <AlertDialogDescription>{props.description}</AlertDialogDescription>
      </AlertDialogHeader>
      {props.children}
    </AlertDialogContent>
  );
};

export default AlertDialogModalContent;
