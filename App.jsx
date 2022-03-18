import { NavLink, Routes, Route, Link } from "react-router-dom";

import { Alphabet } from "./components/Alphabet";
import { Blog } from "./components/Blog";
import { Home } from "./components/Home";
import { Words } from "./components/Words";
import { Enwords } from "./components/Enwords";
import { Nobel } from "./components/Nobel";
import { Lection } from "./components/Lection";
import { Footer } from "./components/Footer";
import { Polska } from "./components/Polska";
import { Lection_06 } from "./components/Lection_06";
import { Lection_11 } from "./components/Lection_11";
import { Lection_10 } from "./components/Lection_10";
import { Lection_04 } from "./components/Lection_04";
import { Lection_12 } from "./components/Lection_12";
import { Lection_121 } from "./components/Lection_121";

function App() {
	return (
		<>
			<header className="wrapper">
				<NavLink to="/lection_04">Lection_04</NavLink>
				<NavLink to="/lection_06">Lection_06</NavLink>
				<NavLink to="/lection_10">Lection_10</NavLink>
				<NavLink to="/lection_11">Lection_11</NavLink>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/alphabet">Alphabet</NavLink>
				<NavLink to="/words">Popularne słowa</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/nobel">Nobel</NavLink>
				<NavLink to="/english">English words</NavLink>
				<NavLink to="/lection">Лекция</NavLink>
				<NavLink to="/polska">Polska</NavLink>
				<NavLink to="/lection_12">Historia</NavLink>
				<NavLink to="/lection_121">Historia</NavLink>
			</header>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/alphabet" element={<Alphabet />} />
				<Route path="/words" element={<Words />} />
				<Route path="/english" element={<Enwords />} />
				<Route path="/nobel" element={<Nobel />} />
				<Route path="/lection" element={<Lection />} />
				<Route path="/Polska" element={<Polska />} />
				<Route path="/lection_06" element={<Lection_06 />} />
				<Route path="/lection_10" element={<Lection_10 />} />
				<Route path="/lection_11" element={<Lection_11 />} />
				<Route path="/lection_04" element={<Lection_04 />} />
				<Route path="/lection_12" element={<Lection_12 />} />
				<Route path="/lection_121" element={<Lection_121 />} />
			</Routes>
			<div className="foot">
				<Footer />
			</div>
		</>
	);
}

export default App;
