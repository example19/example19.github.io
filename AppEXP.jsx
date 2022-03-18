/** @format */

import { NavLink, Routes, Route, Link } from "react-router-dom";

import { Header } from "./components/Header";
import { About } from "./components/About";
import { Users } from "./components/Users";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/about" element={<About />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</>
	);
}

export default App;
