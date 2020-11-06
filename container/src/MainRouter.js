import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import ShowData from "./Pages/ShowData";
import Home from "./Pages/Home";
import Singup from "./Pages/Singup";
import PrivteRouter from './auth/priveteRouter'

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/singup" component={Singup} />
          <Route exact path="/showdata" component={ShowData}  /> */}
          <PrivteRouter exact path="/home" component={Home} ></PrivteRouter>
          <PrivteRouter exact path="/singup" component={Singup} ></PrivteRouter>
          <PrivteRouter exact path="/showdata" component={ShowData} ></PrivteRouter>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;