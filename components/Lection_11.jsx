import pol from "./pol_11.json";
import pol2 from "./pol_11-2.json";

const Lection_11 = () => {
	
	

	return (
		<>
			<h3>Mój dzień</h3>
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

				



				<div className="www">
					<h4>Która godzina? O której (godzinie)?</h4>
				</div>

				<table className="table">
					<thead>
						<tr>
							<th>Pytanie</th>
							<th>Odpowiedź</th>
						</tr>
					</thead>
					<tbody>
						{pol2.map((postDetail, index) => {
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

export { Lection_11 };
