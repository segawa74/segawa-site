import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <Separator className="mb-6" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-16">
          <p className="text-sm"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
