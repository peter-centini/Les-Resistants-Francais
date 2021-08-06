import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeDetails from './components/Home/HomeDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Detail/:id' component={HomeDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
