import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {id:"parent"}, 
//                     React.createElement("div", {id:"child"},
//                      [React.createElement("h1", {},  "I'm h1 tag"),React.createElement("h2", {"id":"h2"},  "I'm h2 tag")  ]) );

// //const heading = React.createElement("h1", {id: "heading"}, "Hello world by react!!");
// console.log(heading);

const JsxHeading = () => (<h1>Hello using jsx</h1>);

//React element
const reactElement = (<h2>This is a react element</h2>);

//React functional component
const FunctionalComponenet = () => (
    <div>
        {reactElement}
        <JsxHeading />
        <h1 className="ff">
            This is a functional component
        </h1>
    </div>
    
);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<FunctionalComponenet/>);