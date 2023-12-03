
import Banner from '../components/Banner.js'
import card from '../styles/card.css'

function DisplayHomes() {
	//const categories = HomeList.reduce(
	//	(acc, home) =>
	//		acc.includes(home.category) ? acc : acc.concat(home.category),
	//	[]
	//)

	return (
		<>
			<Banner />
			<div className="list">
				<card className="card">
					texte 1
				</card>
				<card className="card">
					texte 2
				</card>
				<card className="card">
					texte 3
				</card>
			</div>
			
		</>
	)
}
export default DisplayHomes

// A rajouter si toutefois on prpose des filtres par catégories ?

//const HouseName = HomeList.map(home => home.title);

/*<ul>
{categories.map((cat) => (
	<li key={cat}>{cat}</li>
))}
</ul>



//import {HomeList} from '../datas/HomeList.js'
/*<div>
				<ul>
					{HomeList.map(({ id, cover, title }) => (
						<HomeList
							id={id}
							cover={cover}
							name={title}
						/>
					))}
				</ul>
			</div> */