import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height:300px;
  box-shadow: rgb(0 0 0 / 20%) 2px 3px 5px;
  background-color: #fff;
  transition: all 0.3s linear 0s;
  border-radius:30px;
  padding: 30px;
  cursor: pointer;
  margin: 20px auto;
  &:hover{
    box-shadow: rgb(0 0 0 / 30%) 2px 5px 7px;
  }
  div{
    width:50%;
  }
  img{
    width: 70%;
  }
  div:last-child{
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height:80%;
  }
  h2{
    font-size: 2rem;
  }
  p{
    font-size: 1.2rem;
  }
  span{
    font-size: 1.2rem;
    color: #1bac83;
    font-weight: 700;
  }
  span:last-child{
    font-size: 1rem;
    color:#fe1251
  }
`