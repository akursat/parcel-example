import React from "react";
import { render } from "react-dom";
import "./style.scss";

const App = () => {
  return (
    <div>
      <h1>Up and Running with Parcel</h1>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));

export default App;
