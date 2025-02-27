import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  title: string;
  date: string;
  responsible?: string;
  frontend?: string;
  backend?: string;
  others?: string;
  comment?: string[];
}

const ExperienceCard = ({
  title,
  date,
  responsible,
  frontend,
  backend,
  others,
  comment,
}: ExperienceProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Badge variant="secondary" className="w-fit">
          {date}
        </Badge>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 list-none">
          {responsible && (
            <li className="gap-4 space-y-2">
              <Badge>担当工程</Badge>
              <h3 className="text-sm">{responsible}</h3>
            </li>
          )}
          {frontend && (
            <li className="gap-4 space-y-2">
              <Badge>Frontend</Badge>
              <h3 className="text-sm">{frontend}</h3>
            </li>
          )}
          {backend && (
            <li className="gap-4 space-y-2">
              <Badge>Backend</Badge>
              <h3 className="text-sm">{backend}</h3>
            </li>
          )}
          {others && (
            <li className="gap-4 space-y-2">
              <Badge>その他</Badge>
              <h3 className="text-sm">{others}</h3>
            </li>
          )}
          {comment &&
            comment.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
