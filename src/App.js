import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
   <Router>
     <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:id">
        <PostDetails />
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
