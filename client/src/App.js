import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./css/style.scss";
import "./charts/ChartjsConfig";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
