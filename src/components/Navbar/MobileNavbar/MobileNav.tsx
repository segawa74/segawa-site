import { Link } from "react-scroll";

interface MenuItem {
  name: string;
  to: string;
  offset: number;
}

const MobileNav = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <div className="flex flex-col space-y-4 mt-4">
      {menuItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          offset={item.offset}
          className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
export default MobileNav;
