import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import UI from "./components/UI";
import Datatable from "./components/Table";
import Hook from "./components/Hook";

ReactDOM.render(
  <>
    <Datatable />
    <Car age="25" eye="black" />
    <List />
    <UI />
    <Hook />
    </>,
  document.getElementById("root")
);
