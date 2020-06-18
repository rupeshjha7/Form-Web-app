import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import MyForm from "./myForm";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NotFound from "./notFound";
import Table from "./table";
import "./sass/main.scss";



function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/form" exact component={MyForm}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/table" exact component={Table}/>
              <Route  component={NotFound}/>
          <MyForm/>
          </Switch>
          
        </div>
      </div>
    </div>
    </React.Fragment>
    </Router>
  );
}
export default App;
