import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Aux from './hoc/Auxilairy'
import Home from './components/Home/Home'
import OrderNow from './components/OrderNow/orderNow'
import ProductDesc from './components/Product/ProductDesc'
import Review from './components/Review/Review'
import './App.scss';
function App() {
  return (
  <Aux>
     <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orderNow"  component={OrderNow} />
            <Route path="/products/:id"  component={ProductDesc} />
             <Route path="/reviewOrder"  component={Review} />
          </Switch>
  </Aux>
  );
}


export default App;
