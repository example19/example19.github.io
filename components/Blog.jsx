import pol from "./pol_01.json";

const Blog = () => {
    return (
        <>
			<h3>Wiadomości o Polsce</h3>
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
				
				
                
				<img src="/img/111.png" alt="" />
			</div>
		</>
    )
}

export { Blog }
