import { useState } from 'react';
import classes from './Layout.module.css'
import Sidebar from '../components/Sidebar/Sidebar';
import Topbar from '../components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    
    const [show, setShow] = useState(true);
    
    const toggleSidebar = () => {
        setShow((prev) => !prev)
    }
  return <div className={classes.container}>
    <aside style={{ display: show ? 'flex' : 'none' }}>
        <Sidebar />
    </aside>
    <main>
        <header>
            <Topbar onClick={toggleSidebar} />
        </header>
        <div className={classes['main-container']}>
            <Outlet />
        </div>
    </main>
  </div>;
}
