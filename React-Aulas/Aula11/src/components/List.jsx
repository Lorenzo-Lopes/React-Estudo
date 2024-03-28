import ItemList from "./ItemList"

function List() {
	return (
		<>
		<h1>Minha lista</h1>
		<ul className="lista">
			<ItemList marca='Fiat' ano={2021} />
			<ItemList marca='Ferrari'  />
			<ItemList marca='' ano={1955}/>
			<ItemList marca='McLaren' ano={1989}/>
			
		</ul>

		</>
	)
}
export default List