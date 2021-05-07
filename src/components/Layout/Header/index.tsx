import {HeaderWrapper} from './style';
import {Link} from 'react-router-dom';
import {FiHome} from 'react-icons/fi'

const Header = () =>{
  return(
    <HeaderWrapper>
      <Link to='/'><FiHome size={20}/>Back to Home </Link>
    </HeaderWrapper>
  )
}

export default Header;