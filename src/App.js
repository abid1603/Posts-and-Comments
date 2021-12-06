import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Posts from './Components/Posts/Posts';
import Comments from "./Components/Comments/Comments";

 
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Posts/>
        </Route>
        <Route exact path='/detailse/:userId/:id'>
          <Comments></Comments>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
