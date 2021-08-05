import { Route, Switch } from 'react-router-dom';
import { AllSales } from './pages/AllSales';
import { AddSale } from './pages/AddSale';
import { Priorities } from './pages/Priorities';
import { Layout } from './components/layout/Layout';


function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllSales />
          </Route>
          <Route path='/add-sale'>
            <AddSale />
          </Route>
          <Route path='/priorities'>
            <Priorities />        
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;