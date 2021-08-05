import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game/Game';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'component={Home} />
          <Route path='/:id' component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
