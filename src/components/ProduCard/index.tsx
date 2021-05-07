import toReal from 'helpers/toReal';
import {CardWrapper} from './style'

const Card = () =>{
  return(
    <CardWrapper>
      <div>
        <img src="" alt="Product" />
      </div>
      <div>
        <h2>Product Name</h2>
        <p>Product Descripition</p>
        <span>{toReal(1300)}</span>
        <span>Expires In: </span>
      </div>
    </CardWrapper>
  )
}

export default Card;