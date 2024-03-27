import PropTypes from 'prop-types'

function ItemList({marca, ano}){
  return(
    <>
    <li>
      {marca} - {ano}
    </li>
    </>
  )
}

ItemList.propTypes = {
  marca: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired
}

ItemList.defaultProps = {
  marca: 'A marca nao foi informada',
  ano: 'Não foi informado.'
}


export default ItemList