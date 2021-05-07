import {BrowserRouter} from 'react-router-dom';
import Routes from 'routes';

import GlobalStyled from 'style/global'

const App = () => {
  return (
    <BrowserRouter >
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
