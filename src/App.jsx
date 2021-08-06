import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeDetails from './components/Home/HomeDetails';
import Home from './components/Home/Home';
import Access from './pages/Access';
import Refused from './pages/Refused';
import Game from './components/Game/Game';
import Contact from './components/Contact/Contact';
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
        <Route path='/:id' component={Game} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;