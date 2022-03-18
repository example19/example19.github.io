import pol from "./pol_04.json";

const Lection_04 = () => {
	
	

	return (
		<>
			<h3>Liczby</h3>
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

export { Lection_04 };
