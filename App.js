import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id:"parent"}, 
                    React.createElement("div", {id:"child"},
                     [React.createElement("h1", {},  "I'm h1 tag"),React.createElement("h2", {},  "I'm h2 tag")  ]) );

//const heading = React.createElement("h1", {id: "heading"}, "Hello world by react!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);