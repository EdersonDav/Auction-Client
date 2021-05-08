import toReal from 'helpers/toReal';
import {CardWrapper} from './style'

import image from 'assets/image.png'

interface CardProps{
  name: string,
  description: string,
  id: string,
  price: number,
  expiredTime: string,
  lastBidPrice: number
}

interface Product{
  product: CardProps;
}

const Card = ({product}:Product) =>{
  const{
    name,
    description,
    price,
    id,
    expiredTime,
    lastBidPrice,
  } = product
  const priceShow = price > lastBidPrice ? price : lastBidPrice;
  return(
    <CardWrapper to={`product/${id}`}>
      <div>
        <img src={image} alt="Product" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>Current Price: { toReal(priceShow)}</span>
        <span style={{color: '#a3a3a3'}}>Initial Price: { toReal(price)} </span>
        <span>Expires In: {expiredTime.split('T')[0]} </span>
      </div>
    </CardWrapper>
  )
}

export default Card;