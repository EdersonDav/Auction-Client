import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #a777;
  >div{
    background: linear-gradient(143deg, rgba(110,189,227,1) 3%, rgba(1,148,218,1) 45%, rgba(24,92,189,1) 85%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 70%;
    border-radius: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:auto;
    form{
      width: 40%;
      height: 80%;
      display:  flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      border-radius: 10px;

      h1{
        margin-top: 80px;
        font-size: 3rem;
      }
      p{
        margin-top: 50px;
        font-size: 1.3rem;
      }

      input{
        margin-top: 50px;
        margin-bottom: 50px;
        height: 40px;
        padding:10px;
        width: 50%;
        border: none;
        border-bottom: 1px solid #999999; 
        font-size: 1rem;
      }

      button{
        background: linear-gradient(97deg,#3ac7a4 0%,#1bac83 100%);
        color: #fff;
        border: none;
        height: 40px;
        width: 50%;
        border-radius:10px;
        font-size: 1.5rem;
      }
      button:last-child{
        background: transparent;
        position: absolute;
        width:30px;
        height:30px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content:center;
        top: 10px;
        right:10px;

      }
    }
  }
  
`