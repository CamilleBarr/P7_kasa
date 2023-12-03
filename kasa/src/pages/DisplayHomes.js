import {HomeList} from '../datas/HomeList'

function DisplayHomes() {
	const categories = HomeList.reduce(
		(acc, home) =>
			acc.includes(home.category) ? acc : acc.concat(home.category),
		[]
	)

	return (
		<div>
			
			<ul 
			/*className='lmj-plant-list'*/
			>
				{HomeList.map(({ id, cover, title }) => (
					<HomeList
						id={id}
						cover={cover}
						name={title}
					/>
				))}
			</ul>
		</div>
	)
}

// A rajouter si toutefois on prpose des filtres par catégories ?
//<ul>
//{categories.map((cat) => (
//	<li key={cat}>{cat}</li>
//))}
//</ul>

export default DisplayHomes