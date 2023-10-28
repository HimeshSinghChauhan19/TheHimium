import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Projects from "./pages/Projects";
import someBlogs from "./pages/someBlogs";
import Contact from "./pages/Contact";
// import CourseDetails from "./pages/CourseDetails";


function App(){
  return (
    // <>
    // <a href="https://stupendoushsc.blogspot.com">This is the anchor tag</a>
    // <h2>This is the App.js returning a h2 tag...</h2>
    // </>
    <>
    <BrowserRouter basename="/TheHimium">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resumes}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/someBlogs" component={someBlogs}/>
      </Switch>
    </BrowserRouter>
    </>
);
}

export default App;
