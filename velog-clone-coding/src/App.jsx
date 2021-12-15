import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './pages/Home';
import Write from './pages/Write';
import SeriesCategory from './pages/SeriesCategory'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/write" component={Write}/>
        {/* <Route exact path="/series" component={SeriesCategory}/> */}
        <Route path="/" component={Home}/>
        <Route component={() => <div>Page Not Found</div> }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
