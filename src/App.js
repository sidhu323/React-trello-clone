import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import AllBoards from './Components/AllBoards/AllBoards';
import SingleBoard from './Components/SingleBoard/SingleBoard';
function App() {
  return (
    <div className="App">
      <Router>
        <TopNavBar/>
         <Switch>
         <Route path="/boards" exact component={AllBoards} />
         <Route path="/boards/:boardId" exact component={SingleBoard}/>
         </Switch>
      </Router>

    </div>
  );
}

export default App;
