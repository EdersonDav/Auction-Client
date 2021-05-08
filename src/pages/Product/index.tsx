import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import toReal from 'helpers/toReal';
import api from 'service/api';
import Layout from 'components/Layout';
import image from 'assets/image.png';
import BidModal from './modal/BidModal';
import {
  ProductWrapper,
  ImageDiv,
  DetailDiv
} from './style'

interface ProductProps{
  name: string,
  description: string,
  id: string,
  price: number,
  expiredTime: string,
  lastBidPrice: number
}

const Product = () =>{
  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<ProductProps>();
  const [priceShow, setPriceShow] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [typeBit, setTypeBid] = useState('')

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const productResponse = await api.get(`product/${id}`);
        setProduct(productResponse.data)
        const {lastBidPrice, price} = productResponse.data;
        setPriceShow(price > lastBidPrice ? price : lastBidPrice);

      }catch(err){
        alert(err.response.data.message);
      }
      
    }
    getProducts();
  },[id])

  const close = ()=>{
    setOpenModal(false)
  }

  const handleBid = (type: string) =>{
    setTypeBid(type);
    setOpenModal(true);
  }

  return(
    <Layout>
      {product &&(
        <ProductWrapper>
          <ImageDiv>
            <img src={image} alt="Product" />
          </ImageDiv>
          <DetailDiv>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>Current Price: { toReal(priceShow)}</span>
            <span style={{color: '#a3a3a3'}}>Initial Price: { toReal(product.price)} </span>
            <span id='time'>Expires In: {product.expiredTime.split('T')[0]} </span>
            <div>
              <button onClick={()=>handleBid('bit')}>Bid</button>
              <button onClick={()=>handleBid('automatic')}>Automatic bidding</button>
            </div>
          </DetailDiv>

        </ProductWrapper>
      )}
      {openModal &&(
        <BidModal
          close={close}
          currentValue={priceShow}
          product_id={product.id}
          type={typeBit}
        />
      )}
    </Layout>
  )
}

export default Product;