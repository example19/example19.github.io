/** @format */

import "./Alphabet.css";

import { NavLink, Routes, Route, Link } from "react-router-dom";

import { Blog } from "./Blog";

const Alphabet = () => {
	return (
		<>
			<div>
				<h3>Alfabet polski</h3>
				<p>Alfabet polski</p>
				<img src="/img/pol-0-2.png" alt="" />
				<img src="/img/pol-0-3.png" alt="" />
				<img src="/img/pol-1-1.png" alt="" />
				<img src="/img/pol-0-1.png" alt="" />
			</div>
			<Routes>
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</>
	);
};

export { Alphabet };
