import {useEffect} from 'react';
import {HeaderWrapper} from './style';
import {Link} from 'react-router-dom';
import {FiHome} from 'react-icons/fi'
import {useHistory} from 'react-router-dom';


const Header = () =>{
  const history = useHistory();
  useEffect(()=>{
    const user_id = localStorage.getItem('-action-');
    if(!user_id){
      history.push('/login')
    }
  },[history])
  const Logout = () =>{
    localStorage.removeItem('-action-')
    history.goBack()
  }
  return(
    <HeaderWrapper>
      <Link to='/'><FiHome size={20}/>Back to Home </Link>
      <button onClick={Logout}>Log out</button>
    </HeaderWrapper>
  )
}

export default Header;