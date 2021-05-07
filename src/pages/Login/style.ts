import styled from 'styled-components';

export const LoginWrapper = styled.div`
  background: linear-gradient(143deg, rgba(110,189,227,1) 3%, rgba(1,148,218,1) 45%, rgba(24,92,189,1) 85%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const LoginForm = styled.form`
  width: 30%;
  height: 50vh;
  display:  flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;

  h1{
    margin: 80px auto 50px;
    font-size: 3rem;
  }

  input{
    margin-bottom: 50px;
    height: 40px;
    padding:10px;
    width: 50%;
    border-radius:10px;
    border: 1px solid #999999; 
    font-size: 1rem;
  }

  button{
    background: linear-gradient(97deg,#3ac7a4 0%,#1bac83 100%);
    color: #fff;
    border: none;
    height: 40px;
    width: 50%;
    border-radius:10px;
    font-size: 1rem;
    position: relative;
    svg{
      position: absolute;
      right: 10px;
      *{
        color: #fff;
        font-size: 1.3rem;
      }
    }
  }
` 