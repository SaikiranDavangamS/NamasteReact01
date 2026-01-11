import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀")

// const jsxHeading = <h1 id="heading">Namaste React 🚀</h1>

// React component


const Title = () => {
  return <h1>Namaste React 🚀</h1>;
};

const element = <div id="heading">Namaste React 🚀</div>;



const title = (
  <h1 id="heading" key="h1">
  {element}
    Namaste React with JSX 🚀
  </h1>
)

const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}

    <h1>Namaste React Fucntional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); - rending an react element
// root.render(<HeadingComponent />);  // - rendering a react component
root.render(<HeadingComponent />);  // - rendering a react component
