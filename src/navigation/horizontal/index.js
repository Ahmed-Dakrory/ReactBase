import { Mail, Home } from "react-feather";
import {IconCar} from "@src/views/components/icons/all_icons";


export default [
  {
    id: "home",
    title: "الصفحة الرئيسية",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Mail size={20} />,
    navLink: "/contact",
  },
  {
    id: "about",
    title: "About",
    icon: <IconCar size={20} width="20" height="20" />,
    navLink: "/about",
  }
];
