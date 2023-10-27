import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

// Note that many syntax may be a ilttle older cause I am using the older version of React, however the syntax doesn't matter much and speciawlly for React it is really fast-growing, so makes sense
ReactDOM.render(<App/>, document.getElementById("root"));

// ReactDOM.render(<h1>Haha</h1> , document.getElementById("root"));


/* The below is the practice part kindly ignore this, I wrote this when I was learning and understanding about some stuff during the
development of this portfolio webSite
*/
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <h1>This is h1..</h1>
//     <App/>
//     <h4>this is h4</h4>
//   </React.StrictMode>
// );

// reportWebVitals();
