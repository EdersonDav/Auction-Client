import {useState, ChangeEvent} from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {useHistory} from 'react-router-dom';

import api from 'service/api'
import {LoginForm, LoginWrapper} from './style';

interface ILoginInformation {
  name: string;
  password: string;
}

const Login = () =>{
  const [informations, setInformations] = useState<ILoginInformation>();

  const history = useHistory();

  const handleInformations = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInformations({ ...informations, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(informations);
    try{
      const response = await api.post('login', informations);
      console.log(response)
      await localStorage.setItem('-action-', response.data.id);
      history.push('/')
    }catch(err){
      alert(err.response.data.message);
    }
    
  };

  return(
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input type="text" name="name" id="username" placeholder='Username' onChange={handleInformations}/>
        <input type="password" name="password" id="password" placeholder='Password' onChange={handleInformations} />
        <button type="submit">Sign in <AiOutlineArrowRight/></button>
      </LoginForm>
    </LoginWrapper>
  )
}

export  default Login;