import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import ShowData from "./Pages/ShowData";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/singup" component={Singup} />
          <Route exact path="/showdata" component={ShowData}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;