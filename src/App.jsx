import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeDetails from './components/Home/HomeDetails';
import Home from './components/Home/Home';
import './App.css';
//import Access from './pages/Access';
//import Refused from './pages/Refused';



function App() {
  return (
    <div className="App">  
    <Router>
      <Switch>
        <Route path='/Home' component={Home} /> 
        <Route path='/Detail/:id' component={HomeDetails} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;