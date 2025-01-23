/* eslint-disable react/prop-types */
import { RiMenu2Fill } from "react-icons/ri";
import classes from "./Topbar.module.css";
import { FaUser } from "react-icons/fa";

export default function Topbar({onClick}) {
  return (
    <div className={classes.topbar}>
      <div className={classes.leftMenu}>
        <span onClick={onClick}>
          <RiMenu2Fill />
        </span>
      </div>
      <div className={classes.profile}>
        <span><FaUser /></span>
        <div className={classes.rightmenu}>
            <ul>
                <li>
                    <a href="/">Settings</a>
                </li>
                <li>
                    <a href="/">Profile Settings</a>
                </li>
                <li>
                    <a href="/">Logout</a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
