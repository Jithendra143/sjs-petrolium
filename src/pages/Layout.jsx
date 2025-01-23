import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar'
import Topbar from "../components/Topbar/Topbar";
import { useState } from "react";

export default function Layout() {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show); // Toggle the sidebar visibility
  };

  return (
    <div className="container">
      <aside className={`sidebar`} style={{ display: show ? 'flex' : 'none' }}>
        <Sidebar />
      </aside>
      <main>
        <header>
          <Topbar onClick={handleToggle} />
        </header>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
