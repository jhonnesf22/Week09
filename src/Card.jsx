import React from "react";
import "../public/styles.css";

function Card(props) {
  return (
    <div>
      <div class="card">
        <div class="name">
          <h2>{props.name}</h2>
        </div>
        <img src={props.imgURL} />
        <div class="text">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
