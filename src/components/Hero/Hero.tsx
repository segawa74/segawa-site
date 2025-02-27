"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { Link } from "react-scroll";
const techIcons = [
  { src: "./assets/images/img01.png", alt: "React" },
  { src: "./assets/images/img02.png", alt: "HTML" },
  { src: "./assets/images/img03.png", alt: "CSS" },
  { src: "./assets/images/img04.png", alt: "Javascript" },
];

const Hero = () => {
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
            <Link
              key="contact-me"
              to="contact-me"
              spy={true}
              smooth={true}
              offset={-100}
              className="cursor-pointer"
            >
              お問い合わせ
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="relative mb-8">
            <img
              src="./assets/images/identicon.png"
              alt="Kazuki Segawa"
              className="w-48 h-48 rounded-full shadow-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {techIcons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
