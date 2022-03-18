import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Link,
	Routes,
} from "react-router-dom";

function App() {
	return (
		<>
			<div className="scds">dsdddddddddddddsc</div>

			<NavLink to="/home">Home</NavLink>

			<Link to="/modus-create">Modus Create</Link>

			<Routes>
				<Route exact path="/home" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;

// You can think of these components as "pages"
// in your app.

function Home() {
	return (
		<div>
			<h2>Компонента номер2 </h2>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}
