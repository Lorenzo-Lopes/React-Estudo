function OutraLista ({itens}){
  return(
    <>
    <h3>Lista de coisas boas:</h3>
    {itens.length > 0 ?(
    itens.map((item, index)=>(
      <p key={index}> {item}</p>
     
      ))):(
        <p>Nao tem nada aqui</p>
      )}
    
    </>
  )

}
export default OutraLista