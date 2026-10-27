import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        <div className="min-h-screen bg-background text-snow">
            <Navbar />
            <main className="max-w-4xl mx-auto p-6">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;