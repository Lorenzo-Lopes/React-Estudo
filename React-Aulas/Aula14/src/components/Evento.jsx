import Button from "./Button"
function Evento(){
  function primeiroEvento(e){
    console.log(e.target.innerText)
  }
  function segundoEvento(e){
    console.log(e.target.innerText)
  }
  return(
    <>
    <p>Cliquei para ativar!</p>
    <Button event={primeiroEvento} text='Primeiro evento'/>
    <Button event={segundoEvento} text='Segundo evento'/>
    <br/><br/>
    </>
  )

}


export default Evento