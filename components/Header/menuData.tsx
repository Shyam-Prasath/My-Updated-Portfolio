import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Skills",
    path: "/skills",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Connect 360",
        path: "/Connect360",
        newTab: false,
      },
      {
        id: 42,
        title: "Web3 Deployer",
        path: "/Web3Deployer",
        newTab: false,
      },
      {
        id: 43,
        title: "TechStrike",
        path: "/TechStrike",
        newTab: false,
      },
      {
        id: 44,
        title: "TraceBloom",
        path: "/TraceBloom",
        newTab: false,
      },
      {
        id: 45,
        title: "MediBook",
        path: "/MediBook",
        newTab: false,
      },
      {
        id: 45,
        title: "Real-Time Chat Application ",
        path: "/RealTime",
        newTab: false,
      },
    ],
  },
];
export default menuData;
