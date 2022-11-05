import React from "react";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card m-5">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a
            href="https://en.wikipedia.org/wiki/Bob_Dylan"
            className="btn btn-primary"
          >
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
