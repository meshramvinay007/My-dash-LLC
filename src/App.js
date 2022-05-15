// import "./App.css";
import './App.scss'
import Graph from "./components/BarGraph/Graph";
import { Switch,Route } from "react-router-dom";
import Registration from "./components/Registration";
import { Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
    const [registered,setRegistered] = useState(false);

  
  return (
    <div className="App">
      <div className="row ">
     <Switch>
   {!registered && <Route path='/' exact>
    <Registration setRegistered={setRegistered} />
    </Route>}
   {registered && <Route path='/dashboard'>
    <Graph />
    </Route>}
   <Route path={'*'}>
  {!registered ?<Redirect to='/' /> : <>
  <center>
   <pre>404</pre>
    <h1>Not Found</h1>
   </center>
  </>}
   </Route>
  
   </Switch>
       
      </div>
    </div>
  );
}

export default App;
