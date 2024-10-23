import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Hi! I&apos;m Kazuki Segawa
          </h1>
          <p className="text-lg mb-6 text-muted-foreground">
            ご覧いただきありがとうございます。こちらのサイトはスキルをアピールするためのポートフォリオサイトです。
          </p>
          <Button asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 grid grid-cols-2 gap-4"
        >
          <div className="relative">
            <img
              src="/public/assets/images/img01?height=200&width=200"
              alt="Tech icon 1"
              className="w-16 h-16 absolute top-0 left-0 z-10"
            />
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-rows-3 gap-4">
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Tech icon 2"
              className="w-16 h-16 justify-self-end"
            />
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Tech icon 3"
              className="w-16 h-16 justify-self-end"
            />
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Tech icon 4"
              className="w-16 h-16 justify-self-end"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;