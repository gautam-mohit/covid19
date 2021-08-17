import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>

      <div
        className={sidebar ? "sidebar-container active" : "sidebar-container"}
      >
        <ul className="sidebar-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="/" className="nav-menu-icon">
              <FaIcons.FaWindowClose />
            </Link>
          </li>

          {SidebarData.map((sidebaritem) => {
            return (
              <li
                key={sidebaritem.id}
                className={sidebaritem.cName}
                onClick={showSidebar}
              >
                <Link to={sidebaritem.path}>
                  {sidebaritem.icon}
                  <span>{sidebaritem.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import { SidebarData } from "./SidebarData";

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => {
//     setSidebar(!sidebar);
//   };

//   return (
//     <>
//       <div className="navbar">
//         <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
//           <FaIcons.FaBars />
//         </Link>
//       </div>
//       <div
//         className={sidebar ? "sidebar-container active" : "sidebar-container"}
//       >
//         <ul className="sidebar-items">
//           <li className="sidebar-toggle">
//             <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
//               <FaIcons.FaWindowClose />
//             </Link>
//           </li>
//           {SidebarData.map((sidebaritem) => {
//             return (
//               <li
//                 key={sidebaritem.id}
//                 className={sidebaritem.cName}
//                 onClick={showSidebar}
//               >
//                 <Link to={sidebaritem.path}>
//                   {sidebaritem.icon}
//                   <span>{sidebaritem.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Navbar;
