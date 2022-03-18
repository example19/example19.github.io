import pol from "./pol_06.json";

const Lection_06 = () => {
	
	

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
				
				<div className="article">
					<h2>Legenda o Lechu, Czechu i Rusie</h2>
					<p>Legenda opowiada o trzech braciach - Lechu, Czechu i Rusie, którzy szukali nowych ziem dla zamieszkania. Dzięki Lechowi powstało państwo polskie i pierwsza stolica Polski - Qniezno. Lech zobaczył gniazdo orła i pomyślał, że to dobry znak, i zaczął tam się budować. Od tych czasów biały orzeł jest symbolem Polski. Czech poszedł na zachód i założył Czechy, Rus podał się na wschód i założył Rosję.</p></div>
				<div className="article">
					<h2>Legenda o smoku wawelskim</h2>
					<p>Legenda opowiada o smoku, który pożerał bydło, i nikt go nie mógł pokonać. Lecz miasto wyratował szewczyk, który wypełnił skórę barana siarką i podsunął smokowi. Smok zjadł barana i dużo pił, aż dopóki nie pękł. I teraz w Krakowie można zobaczyć smoka wawelskiego: to rzeźba stojąca przy wzgórzu wawelskim w Krakowie obok wejścia do jaskini Smocza Jama.</p></div>
				<div className="article">
					<h2>Legenda o Warsie i Sawie</h2>
					<p>Ta legenda opowiada o powstaniu stolicy Polski Warszawy. To historia miłości rybaka Warsa i syreny Sawy. Pewnego dnia rybak Wars zobaczył przepiękną syrenę nad brzegiem Wisły. Zakochał się w niej, syrena również zakochała się w rybaku. Później pobrali się i założyli rybacką osadę, która po jakimś czasie została miastem. Od imion Wars i Sawa pochodzi nazwa Warszawy, a syrena znajduje się na godle Warszawy.</p>
				</div>
				<div className="article">
					<h2>Po co panu (pani) Karta Polaka?</h2>
					<p>-W Polsce mieszkają nasi krewni: ciocie i wujkowie ze strony ojca. Chciałbym odwiedzić jego braci i swoich kuzynków.</p>
					<p>-Chciał(a)bym studiować w Polsce na Uniwersytecie.</p>
					<p>-Chciał(a)bym, aby moje dzieci miały możliwość studiować w Polsce.</p>
					<p>-Chcę pracować i mieszkać w Polsce.</p>
					<p>-Chcę ćwiczyć język polski w Polsce i w przyszłości nauczyć się doskonale mówić po polsku.</p>
				</div>
				<div className="article">
					<h2>Skąd pan (pani) zna język polski?</h2>
					<p>-Po polsku ze mną w dzieciństwie rozmawiał ojciec, nauczył mnie czytać.</p>
					<p>-Chodzimy razem z rodziną do kościoła, gdzie msze prowadzą się w języku polskim.</p>
					<p>-Obecnie chodzę na kursy językowe i uczę się samodzielnie.</p>
					<p>-Czytam wiadomości w Internecie po polsku.</p>
				</div>
				<div className="article">
					<h2>Legenda o Warszawskiej Syrence</h2>
					<p>Pewnego dnia u podnóża dzisiejszego Starego Miasta wyszła z wody przepiękna syrena, aby nieco odpocząć na brzegu. Tak spodobało jej się miejsce, że postanowiła tu zostać na zawsze.</p>
					<p>Niestety rybacy zauważyli, że ktoś podczas połowów wzburza fale Wisły, plącze sieci i wypuszcza ryby.</p>
					<p>Postanowili więc schwytać szkodnika. Kiedy jednak usłyszeli przepiękny głos syreny, odmówili swoich zamiarów i szczerze pokochali piękną kobietę-rybę, która od tej pory co wieczór umilała im czas przepięknym śpiewem.</p>
					<p>Pewnego dnia zobaczył syrenkę bogaty kupiec i postanowił ją schwytać. Płacz syreny usłyszał młody syn rybaka i za pomocą przyjaciół, pod osłoną nocy uwolnił ją.</p>
					<p>Syrena z wdzięczności za uratowanie życia obiecała im, że zawsze kiedy tylko będą potrzebowali pomocy, stanie w ich obronie. I odtąd warszawska syrenka, uzbrojona w miecz i tarczę, broni miasta i jego mieszkańców.</p>
				</div>
				<div className="gimn">
					<h2>Mazurek Dąbrowskiego (1797)</h2>
					<h3>Muzyka: autor nieznany, na motywach mazura. Słowa: Józef Wybicki</h3>
					<p>Jeszcze Polska nie zginęła,</p>
					<p>Kiedy my żyjemy.</p>
					<p>Co nam obca przemoc wzięła,</p>
					<p>Szablą odbierzemy.</p>			
					<br />
					<p>Marsz, marsz Dąbrowski,</p>
					<p>Z ziemi włoskiej do Polski.</p>
					<p>Za twoim przewodem</p>
					<p>Złączym się z narodem.</p>
					<br></br>
					<p>Przejdziem Wisłę, przejdziem Wartę,</p>
					<p>Będziem Polakami.</p>
					<p>Dał nam przykład Bonaparte,</p>
					<p>Jak zwyciężać mamy.</p>
					<br />
					<p>Marsz, marsz Dąbrowski …</p>
					<br />
					<p>Jak Czarniecki do Poznania</p>
					<p>Po szwedzkim zaborze,</p>
					<p>Dla ojczyzny ratowania</p>
					<p>Wrócim się przez morze.</p>
					<br />
					<p>Marsz, marsz Dąbrowski …</p>
					<br />
					<p>Już tam ojciec do swej Basi</p>
					<p>Mówi zapłakany –</p>
					<p>Słuchaj jeno, pono nasi</p>
					<p>Biją w tarabany.</p>
					<br />
					<p>Marsz, marsz Dąbrowski …</p>
				</div>
				<img src="/img/pol-4-1.jpg" alt="" />
				<img src="/img/pol-4-2.jpg" alt="" />
			</div>
		</>
	);
};

export { Lection_06 };
