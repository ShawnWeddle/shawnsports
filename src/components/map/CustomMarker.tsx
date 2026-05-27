import { cn } from "~/lib/utils";

interface MarkerProps {
  className: string;
}

export const CustomMarker: React.FC<MarkerProps> = (props: MarkerProps) => {
  const { className } = props;
  return (
    <div className={cn("relative h-8", className)}>
      <div className="size-6 rounded-full bg-red-500"></div>
      <div className="triangle absolute -bottom-0.5 w-6 bg-red-500"></div>
    </div>
  );
};
