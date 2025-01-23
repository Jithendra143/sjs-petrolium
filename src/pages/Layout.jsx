import { Outlet } from "react-router-dom";

export default function Layout(){
    return <div className="container">
        <aside className="sidebar">
            sidebar
        </aside>
        <main>
            <header>
                header
            </header>
            <div className="main-container">
                <Outlet />
            </div>
        </main>
    </div>
}