function Evento({numero}){
  function meuEvento(){
    console.log(`Numero ${numero}`)
  }
  return(
    <>
    <p>Cliquei para ativar!</p>
    <button onClick={meuEvento}>Clique aqui!</button>
    </>
  )

}


export default Evento