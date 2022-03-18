import pol from "./pol_12.json";

const Lection_121 = () => {
	
	

	return (
		<>
			<h3>Historia Polski</h3>
			<div className="www" >
				<table className="table"  >
					<thead>
						<tr>
							<th width="12%" >data</th>
							<th width="20%">krótko</th>
							<th>szczegółowy</th>
						</tr>
					</thead>
					<tbody>
						{pol.map((postDetail, index) => {
							return (
								<tr>
									<td className="tabl1">{postDetail.pl}</td>
									<td className="tabl1">{postDetail.tu}</td>
									<td className="tabl2">{postDetail.ru}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				
				
			</div>
				
		</>
	);
};

export { Lection_121 };
