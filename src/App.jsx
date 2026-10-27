import {BrowserRouter, Routes, Route} from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/posts" element={<Posts />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;