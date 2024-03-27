function Form(){
 
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(e.target.nome.value)
    console.log("UserCadastrado.")
  
  }
  
  return(
    <div className="formulario">
      <form onSubmit={cadastrarUsuario}>
      <div>
        <input type="text" name='nome' placeholder="Digite seu nome:" />
      </div>
      <div>
        <input type="submit" value="Cadastrar" />
      </div>
     </form>
    
    </div>
  )
}
export default Form