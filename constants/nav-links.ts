import type { IconType } from "react-icons";
import { AiFillQuestionCircle, AiFillHome, AiFillTags } from "react-icons/ai";
import { BiSolidNews } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

interface INavLinks {
  href: string;
  label: string;
  icon: IconType;
}

const navLinks: readonly INavLinks[] = [
  {
    href: "/",
    label: "Home",
    icon: AiFillHome,
  },
  {
    href: "/news",
    label: "News",
    icon: BiSolidNews,
  },
  {
    href: "/tags",
    label: "Tags",
    icon: AiFillTags,
  },
  {
    href: "/communities",
    label: "Communities",
    icon: HiUserGroup,
  },
  {
    href: "/ask-question",
    label: "Ask a Question",
    icon: AiFillQuestionCircle,
  },
] as const;

export default navLinks;
