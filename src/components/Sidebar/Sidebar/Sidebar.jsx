import { MdOutlineDashboard, MdOutlineTimeline } from "react-icons/md";

import classes from "./Sidebar.module.css";
import { FaUsersCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <a href="/">
          <h1>SJS Petrolium</h1>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && classes.active}
              end
            >
              <span>
                <MdOutlineDashboard />
              </span>
              <h3>Dashboard</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sales"
              className={({ isActive }) =>
                isActive || window.location.pathname.includes("sales")
                  ? classes.active
                  : ""
              }
              style={{ pointerEvents: 'none' }}
            >
              <span>
                <MdOutlineTimeline />
              </span>
              <h3>Sales</h3>
            </NavLink>
            <ul className={classes.submenu}>
              <li>
                <NavLink to="sales/petrol">
                  <h3>Petrol</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="sales/disel">
                  <h3>Disel</h3>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="user-settings"
              className={({ isActive }) => isActive && classes.active}
            >
              <span>
                <FaUsersCog />
              </span>
              <h3>User Settings</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
