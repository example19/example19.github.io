import firston from "./firston.json";

const Home = () => {
	return (
		<>
			<h3>Словарь</h3>
			<div className="www">
				<table className="table">
					<thead>
						<tr>
							<th>English</th>
							<th>Russian</th>
						</tr>
					</thead>
					<tbody>
						{firston.map((postDetail, index) => {
							return (
								<tr>
									<td>{postDetail.en}</td>
									<td>{postDetail.ru}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export { Home };
