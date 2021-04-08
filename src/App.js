import './App.css';
import Nav from './Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
