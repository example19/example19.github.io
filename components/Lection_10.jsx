import pol from "./pol_10.json";

const Lection_10 = () => {
	
	

	return (
		<>
			<h3>Święta</h3>
			<div className="www">
				<table className="table">
					<thead>
						<tr>
							<th>Pytanie</th>
							<th>Odpowiedź</th>
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

export { Lection_10 };
