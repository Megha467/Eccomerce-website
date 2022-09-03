import './App.css';
import Navbar from './components/layouts/Navbar';
import {Switch, Route} from 'react-router-dom';
import Home from './components/ui/Support/Home';
import Products from './components/ui/Support/Products';
import Product from './components/ui/Support/Product';
import Cart from './components/ui/Support/Cart';
import Login from './components/ui/Support/Login';
import Register from './components/ui/Support/Registration';
import Drop from './components/ui/Support/Drop';
function App() {
  return (
   <>
  <Navbar />
  <Switch>
      <Route  exact path = "/" component = {Home} />
      <Route  exact path ='/products' component = {Products} />
      <Route  exact path ='/products/:id' component = {Product} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>


   </>
  );
}

export default App;
