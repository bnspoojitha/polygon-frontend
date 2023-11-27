import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from "./routes/router";
import './index.css';
ReactDOM.render(
  <Router>
{/* <Loginpage /> */}
<Routers />
  </Router>,
  document.getElementById('root')
);