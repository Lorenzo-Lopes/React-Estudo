import { useState } from "react"
function Form(){
 
  function cadastrarUsuario(e){
    e.preventDefault()
    // console.log(e.target.nome.value)
    console.log("UserCadastrado.")
    console.log(`User cadastrado:${name} Senha utilizada:${password}`)
  }
  
  const [name,setName] = useState()
  const [password,setPassword] = useState()
  
  return(
    <div className="formulario">
      <form onSubmit={cadastrarUsuario}>
      <div>
      <label htmlFor="name">Nome:</label>
        <input type="text" name='nome' placeholder="Digite seu nome:"
        onChange={(e)=>{setName(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" 
        name='password' 
        placeholder="Digite sua Senha:" 
        onChange={(e)=>{setPassword(e.target.value)}}        
        />
      </div>
      <div>
        <input type="submit" value="Cadastrar" />
      </div>
     </form>
    
    </div>
  )
}
export default Form