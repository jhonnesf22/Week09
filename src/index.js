/* Simple Component */

// 2.
/*
import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Nasi Goreng</li>
      <li>Indomie Goreng</li>
      <li>Bakso Goreng</li>
    </ul>
  </div>,
  document.getElementById("root")
);
*/

/* Component File */

// 2.
/*
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Nasi Goreng</li>
      <li>Indomie GOreng</li>
      <li>Bakso Goreng</li>
    </ul>
  </div>,
  document.getElementById("root")
);
*/

// 4.
/*
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
*/

// 6.
/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
*/

// 8.
/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
*/

/* React Props */

// 1.
/*
import React from "react";
import ReactDOM from "react-dom";

function Card() {
  return (
    <div>
      <h2>John Thor</h2>
      <p>+62123456789</p>
      <p>john.thor@gmail.com</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card />
  </div>,
  document.getElementById("root")
);
*/

// 2.
/*
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="John Thor" tel="+62123456789" email="john.thor@gmail.com" />
  </div>,
  document.getElementById("root")
);
*/

/* TUGAS */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
