import { LucideIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";

const AlertBanner = ({
  alertType,
  alertTitle,
  AlertIcon,
  alertDescription,
}: {
  alertType: "default" | "destructive" | "success";
  alertTitle: string;
  AlertIcon: LucideIcon;
  alertDescription: string;
}) => {
  return (
    <Alert variant={alertType}>
      <AlertIcon className="h-4 w-4" />
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{alertDescription}</AlertDescription>
    </Alert>
  );
};

export default AlertBanner;
