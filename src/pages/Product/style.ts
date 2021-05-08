import styled from 'styled-components';

export const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 30px calc(10% - 2px) 0px;
  background: linear-gradient(rgb(255, 255, 255) calc(50% + 8px), transparent 50%);
  margin-top:20px;
  >div{
    margin-top: 50px;
    display: flex;
  }
`

export const ImageDiv = styled.div`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 60%;
  img{
    width: 80%;
  }
`

export const DetailDiv = styled.div`
  border-radius: 20px;
  flex-direction: column;
  background-color: transparent;
  padding: 50px;
  width: 40%;
  box-shadow: rgb(0 0 0 / 20%) 2px 3px 5px;
  h2{
    font-size: 3rem;
    margin-bottom: 20px;
  }
  p{
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  span{
    font-size: 1.8rem;
    color:#1bac83;
    font-weight: 700;
    margin-bottom: 20px;
  }
  span#time{
    font-size: 2rem;
    margin-bottom: 20px;
    color:#fe1251 !important;
  }
  >div{
    margin-top: 30px;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    button{
      width: 45%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border: none;
      border-radius: 20px;
      padding: 20px;
      background-color: #fff;
      font-weight: 500;
      box-shadow: rgb(0 0 0 / 20%) 2px 3px 5px;
      transition: all 0.3s linear 0s;
      background: linear-gradient(97deg,#3ac7a4 0%,#1bac83 100%);
      color: #fff;
      &:hover{
        box-shadow: rgb(0 0 0 / 30%) 2px 5px 7px;
      }
      &:last-child{
        background: linear-gradient(97deg,#fe1252 0%,#fe1241 100%);
      }
    }
  }
`