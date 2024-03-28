function Saudacao({nome}){
  function escreveSaudacao(outroNome){
    return `Ola ${outroNome}, tudo bem?`
  }
  return(
    <>
    {(nome) &&  <p>{escreveSaudacao(nome)}</p>}
      </>
  )

}
export default Saudacao