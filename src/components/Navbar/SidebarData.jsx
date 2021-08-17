import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    id: 1,
    title: "Active",
    cName: "sidebar-item",
    // icon: <FaIcons.FaHome />,
    icon: <FaIcons.FaStreetView />,
    path: "/",
  },
  {
    id: 2,
    title: "Recovered",
    cName: "sidebar-item",
    // icon: <FaIcons.FaCartPlus />,
    icon: <FaIcons.FaHandPeace />,
    path: "/recovered",
  },
  {
    id: 3,
    title: "Death",
    cName: "sidebar-item",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    icon: <FaIcons.FaRegWindowClose />,
    path: "/death",
  },
];
