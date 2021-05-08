import {Route, Switch} from 'react-router-dom';
import Login from 'pages/Login'
import Home from 'pages/Home'
import Product from 'pages/Product'

const Routes = ()=>(
   <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/product/:id' exact component={Product}/>
   </Switch>
)

export default Routes;