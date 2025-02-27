import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  iconPath: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

const SkillCard = ({
  category,
  iconPath: LucideIcon,
  isActive,
  onClick,
}: SkillCardProps) => {
  return (
    <Card
      className={`cursor-pointer transition-all ${
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      }`}
      onClick={onClick}
    >
      <CardContent className="flex items-center p-4">
        <LucideIcon className="w-6 h-6" />
        <span className="font-medium px-4">{category}</span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
