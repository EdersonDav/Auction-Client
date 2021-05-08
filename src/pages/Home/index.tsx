import {useEffect, useState, ChangeEvent} from 'react';
import {AiOutlineSearch, AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';

import api from 'service/api';
import Layout from 'components/Layout';
import Card from 'components/ProduCard';
import {
  HomeWrappers, 
  SearchFilter, 
  ButtonsDiv,
  ProductsListDiv,
  ButtonsPages
} from './style';

interface ProductProps{
  name: string,
  description: string,
  id: string,
  price: number,
  expiredTime: string,
  lastBidPrice: number
}

const Home = () =>{
  const [products, setProducts] = useState<ProductProps[]>();
  const [term, setTerm] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pagesArray = [1,2,3];

  useEffect(()=>{
    console.log(term);
    
    const getProducts = async () =>{
      try{
        const productResponse = await api.get(`${term}?page=${page}`);
        setProducts(productResponse.data)

      }catch(err){
        alert(err.response.data.message);
      }
      
    }
    getProducts();
  },[page, term])
  
  const filterd = (value: string) =>{
    const productsFiltered = value === "highest" ? 
    products.sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    }) : products.sort((a, b) =>{
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
    setProducts(productsFiltered);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value)
    if(e.target.value === ''){
      setTerm(search)
    }
  }
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setTerm(search)
  }

  return(
    <Layout>
      <HomeWrappers>
        <SearchFilter onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type="text" name="search" id="search" placeholder='Search by product name or description' />
          <ButtonsDiv>
            <button type='submit'>Search <AiOutlineSearch size={20}/></button>
            <button type='button' onClick={()=>filterd('highest')}>Highest<AiOutlineArrowUp size={20}/></button>
            <button type='button'onClick={()=>filterd('lower')} >Lower<AiOutlineArrowDown size={20}/></button>
          </ButtonsDiv>
        </SearchFilter>

        {products &&(
          <ProductsListDiv>
          {products.map(product =>(
            <Card
              key={product.id}
              product={product}
            />
          ))}
          </ProductsListDiv>
        )}
        
        <div>
          <ul>
            {pagesArray.map(pageNumber=>(
              <li key={pageNumber}>
                <ButtonsPages currentPage={page === pageNumber} onClick={()=> setPage(pageNumber)} type="button">{pageNumber}</ButtonsPages>
              </li>
            ))}
          </ul>
        </div>
      </HomeWrappers>
    </Layout>
  )
}

export default Home;