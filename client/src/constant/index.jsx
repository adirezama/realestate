import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { MdOutlineGroups } from "react-icons/md";

const dashboard = (
  <RiDashboardLine className="fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2" />
);
const chart = (
  <AiOutlineBarChart className="fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2" />
);
const calendar = (
  <GoCalendar className="fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2" />
);
const user = (
  <MdOutlineGroups className="fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2" />
);

export const navMenu = [
  { href: "/dashboard", icon: dashboard, label: "Dashboard" },
  { href: "/chart", icon: chart, label: "Chart" },
  { href: "/calendar", icon: calendar, label: "Calendar" },
  { href: "/user", icon: user, label: "User" },
  // { href: "/message", icon: <IoMailOutline />, label: "Message" },
];

export const footer = [
  {
    head: "For Beginner",
    links: [
      { name: "About Us", link: "" },
      { name: "Contact Us", link: "" },
      { name: "New Account", link: "" },
    ],
  },
  {
    head: "Explore Us",
    links: [
      { name: "Our Careers", link: "" },
      { name: "Privacy", link: "" },
      { name: "Terms & Condition", link: "" },
    ],
  },
  {
    head: "Explore Us",
    links: [
      { name: "Our Careers", link: "" },
      { name: "Privacy", link: "" },
      { name: "Terms & Condition", link: "" },
    ],
  },
];
