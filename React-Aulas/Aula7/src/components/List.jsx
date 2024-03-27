import ItemList from "./ItemList"

function List() {
	return (
		<>
		<h1>Minha lista</h1>
		<ul className="lista">
			<ItemList marca='Fiat'/>
			<ItemList marca='Ferrari'/>
			<ItemList marca='Mercedes'/>
			<ItemList marca='McLaren'/>
			
		</ul>

		</>
	)
}
export default List