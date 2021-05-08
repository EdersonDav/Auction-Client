import styled, {css} from 'styled-components';

export const HomeWrappers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px calc(5% - 2px) 0px;
  background: linear-gradient(rgb(255, 255, 255) calc(50% + 8px), transparent 50%);
  margin-top:20px;
  >div:last-child{
    margin: 20px auto 50px;
    display: flex;
    ul{
      display: flex;
      list-style: none;
      li{
        margin-right: 20px;
      }
    }
  }
`
 
interface ButtonsPagesProps{
  currentPage: boolean;
}
export const ButtonsPages = styled.button`
  font-size: 1.5rem;
  height: 50px;
  width:50px;
  border: none;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 20%) 2px 3px 5px;
  transition: all 0.3s linear 0s;
  &:hover{
    box-shadow: rgb(0 0 0 / 30%) 2px 5px 7px;
  }
  ${({currentPage}: ButtonsPagesProps) => currentPage ? css`
    background: #fff;
    color: #212121; 
  `: css`
    background: linear-gradient(97deg,#3ac7a4 0%,#1bac83 100%);
    color: #fff; 
  `}
`

export const SearchFilter = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  input{
    height: 45px;
    flex-grow: 3;
    max-width: 70%;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    box-shadow: rgb(0 0 0 / 20%) 2px 3px 5px;
    background-color: #fff;
    transition: all 0.3s linear 0s;
    &:hover{
      box-shadow: rgb(0 0 0 / 30%) 2px 5px 7px;
    }
  }
`

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  button{
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    width: 130px;
    border: none;
    border-radius: 20px;
    padding: 20px;
    background-color: #fff;
    font-weight: 500;
    box-shadow: rgb(0 0 0 / 20%) 2px 3px 5px;
    transition: all 0.3s linear 0s;
    &:hover{
      box-shadow: rgb(0 0 0 / 30%) 2px 5px 7px;
      background: linear-gradient(97deg,#3ac7a4 0%,#1bac83 100%);
      color: #fff;
    }
  }
`

export const ProductsListDiv = styled.div`
  margin-top: 70px;
  background: #f0f0f0;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  >a{
    width: 29%;
  }
`