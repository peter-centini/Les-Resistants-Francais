import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Access from './pages/Access';
import Refused from './pages/Refused'



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Access}/>
          <Route path='/refused' component={Refused} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
