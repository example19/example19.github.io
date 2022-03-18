import pol from "./pol_12.json";

const Lection_12 = () => {
	
	

	return (
		<>
			<h3>Historia Polski</h3>
			<div className="www">
				<table className="table">
					<thead>
						<tr>
							<th width="10%" >Pytanie</th>
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

export { Lection_12 };
