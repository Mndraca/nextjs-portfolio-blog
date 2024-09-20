import { FC } from "react";
import Navlink from "../navlink/page";

interface Link {
  path: string;
  title: string;
}
interface MenuOverlayProps {
  links: Link[];
}
const links = [
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/projects", title: "Projects" },
  { path: "/blog", title: "Blog" },
];
const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
  console.log("Recieved links", links);

  return (
    <>
      <ul className="flex flex-col py-4 items-center">
        {links.map(({ path, title }, index) => (
          <li className="pt-4" key={index}>
            <Navlink href={path} title={title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuOverlay;
