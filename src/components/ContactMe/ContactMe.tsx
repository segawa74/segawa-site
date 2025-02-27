import { Github, Mail } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const ContactMe = () => {
  return (
    <section id="contact-me" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <div className="grid md:grid-cols-3 items-start md:space-x-4">
          <div className="flex flex-col space-y-4 py-4">
            <ContactInfoCard
              icon={<Mail className="w-6 h-6" />}
              text="segawa74dev@gmail.com"
              href="mailto:segawa74dev@gmail.com"
            />
            <ContactInfoCard
              icon={<Github className="w-6 h-6" />}
              text="github.com/segawa74"
              href="https://github.com/segawa74"
            />
          </div>
          <div className="md:col-span-2 py-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
