/** @format */

import { NavLink, Routes, Route, Link } from "react-router-dom";

import { Alphabet } from "./components/Alphabet";
import { Blog } from "./components/Blog";
import { Home } from "./components/Home";
import { Words } from "./components/Words";
import { Enwords } from "./components/Enwords";
import { Grammar } from "./components/Grammar";

function App() {
	return (
		<>
			<header className="wrapper">
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/alphabet">Alphabet</NavLink>
				<NavLink to="/words">Popularne słowa</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/grammar">Grammar</NavLink>
				<NavLink to="/english">English words</NavLink>
			</header>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/alphabet" element={<Alphabet />} />
				<Route path="/words" element={<Words />} />
				<Route path="/english" element={<Enwords />} />
				<Route path="/grammar" element={<Grammar />} />
			</Routes>
		</>
	);
}

export default App;
