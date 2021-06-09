import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Aux from './hoc/Auxilairy'
import Home from './components/Home/Home'
import OrderNow from './components/OrderNow/orderNow'
function App() {
  return (
  <Aux>
     <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orderNow"  component={OrderNow} />
          </Switch>
  </Aux>
  );
}

export default App;
