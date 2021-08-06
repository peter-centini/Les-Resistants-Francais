import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeDetails from './components/Home/HomeDetails';
import Home from './components/Home/Home';
import Access from './pages/Access';
import Refused from './pages/Refused';
import './App.css';



function App() {
  return (
    <div className="App">  
    <Router>
      <Switch>
        <Route exact path='/' component={Access}/>
        <Route path='/refused' component={Refused} />
        <Route path='/Home' component={Home} /> 
        <Route path='/Detail/:id' component={HomeDetails} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;