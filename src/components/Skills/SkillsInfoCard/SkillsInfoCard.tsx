import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface SkillsInfoCardProps {
  category: string;
  skillsList: {
    name: string;
    prificiencyLevel: string;
  }[];
}

const SkillsInfoCard = ({ category, skillsList }: SkillsInfoCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4">{category}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Badge
                variant="outline"
                className="text-sm py-1 px-2 w-full justify-between"
              >
                <span>{skill.name}</span>
                <span className="text-muted-foreground">
                  {skill.prificiencyLevel}
                </span>
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsInfoCard;
