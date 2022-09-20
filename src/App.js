
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
       <Nav/>
       <switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tweets" exact component={Tweet}/>
        </switch>

    </div>
    </Router>
  );
}

export default App;
