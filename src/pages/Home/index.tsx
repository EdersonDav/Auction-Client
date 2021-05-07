import {AiOutlineSearch, AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';

import Layout from 'components/Layout';
import Card from 'components/ProduCard';
import {
  HomeWrappers, 
  SearchFilter, 
  ButtonsDiv,
  ProductsListDiv
} from './style';

const Home = () =>{
  return(
    <Layout>
      <HomeWrappers>
        <SearchFilter>
          <input type="text" name="search" id="search" placeholder='Search by product name or description' />
          <ButtonsDiv>
            <button type='submit'>Search <AiOutlineSearch size={20}/></button>
            <button type='button'>Highest<AiOutlineArrowUp size={20}/></button>
            <button type='button'>Lower<AiOutlineArrowDown size={20}/></button>
          </ButtonsDiv>
        </SearchFilter>

        <ProductsListDiv>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ProductsListDiv>
      </HomeWrappers>
    </Layout>
  )
}

export default Home;