function Form(){
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(e)
    console.log("UserCadastrado.")
  }
  return(
    <div>
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