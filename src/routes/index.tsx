import {Route, Switch} from 'react-router-dom';
import Login from 'pages/Login'
import Home from 'pages/Home'

const Routes = ()=>(
   <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={Login}/>
   </Switch>
)

export default Routes;