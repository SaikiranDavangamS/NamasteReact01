        // const heading = React.createElement("h1",{id:"heading"},"Hello World From React!!!")

        
        
        /* 
        <div id="parent">
        <div id="child">
        <h1></h1>
        </div>
        </div>
         */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
[  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is Namaste React"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
]
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)