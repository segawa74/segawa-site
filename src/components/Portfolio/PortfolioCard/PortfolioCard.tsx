import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortfolioCardProps {
  link?: string;
  githubLink?: string;
  title: string;
  img: string;
  comment?: string;
}

const PortfolioCard = ({
  link,
  githubLink,
  title,
  img,
  comment,
}: PortfolioCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-md border"
        />
        {comment && (
          <p className="mt-4 text-sm text-muted-foreground">{comment}</p>
        )}
      </CardContent>
      <CardFooter className="gap-4">
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
        <Button
          asChild
          className="bg-purple-500 hover:bg-purple-600 text-white"
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
