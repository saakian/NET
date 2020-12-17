
import './App.css';
import oneComp from './one_comp'
import twoComp from './two_comp'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

function App() {
  
  return (
    
    <Router>
      <Switch>
    <div className="App">
      <Route path="/" exact component={oneComp}/>
      <Route path="/two" component ={twoComp}/>
    </div>
    </Switch>
    </Router>
   
  );
  
}

export default App;
