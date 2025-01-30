import { MdOutlineDashboard, MdOutlineTimeline } from "react-icons/md";
import { BsFuelPump, BsFuelPumpDiesel } from "react-icons/bs";
import classes from "./Sidebar.module.css";
import { FaUsersCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div className={classes.logo}>
        <a href="/">
          <h3>SJS Petrolium</h3>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <span>
                <MdOutlineDashboard />
              </span>
              <h3>Dashboard</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="sales" className={classes.active} style={{ pointerEvents: 'none' }}>
              <span>
                <MdOutlineTimeline />
              </span>
              <h3>Sales</h3>
            </NavLink>
            <ul className={classes.submenu}>
              <li>
                <NavLink to="sales/petrol">
                  <span>
                    <BsFuelPump />
                  </span>
                  <h3>Petrol</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="sales/disel">
                  <span>
                    <BsFuelPumpDiesel />
                  </span>
                  <h3>Disel</h3>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="user-settings">
              <span>
                <FaUsersCog />
              </span>
              <h3>User Settings</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
