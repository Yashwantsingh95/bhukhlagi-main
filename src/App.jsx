import { Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import Roasts from "./pages/Roasts";
import Join from "./pages/Join";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Menu from "./pages/Menu";
import Background from "./layout/Background";
import Cursor from "./component/Cursor";

function App() {
    return (
        <>
            <Cursor />
            <Routes>
                <Route path="/" element={<Roasts />} />
                <Route path="/roasts" element={<Roasts />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/join" element={<Join />} />
                <Route path="/about" element={<About />} />
                <Route path="/locations/:city" element={<Locations />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;