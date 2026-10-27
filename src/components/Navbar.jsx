import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="flex justify-between max-w-4xl mx-auto px-6 py-4 items-center">
            <h1 className="font-heading text-4xl text-snow">
                <Link to="/">Klaas</Link>
            </h1>

            <div className="flex gap-4">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar;