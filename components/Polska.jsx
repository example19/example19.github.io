import pol from "./pol.json";

const Polska = () => {
	
	

	return (
		<>
			<h3>Словарь польский</h3>
			<div className="www">
				<table className="table">
					<thead>
						<tr>
							<th>Polski</th>
							<th>Russian</th>
						</tr>
					</thead>
					<tbody>
						{pol.map((postDetail, index) => {
							return (
								<tr>
									<td>{postDetail.pl}</td>
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

export { Polska };
