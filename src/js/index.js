//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import NavBar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx"

//render your react application
ReactDOM.render(
  <div >
    <NavBar />
    <Jumbotron
      title="Check THIS out!"
      description="Did you drink water?!"
      buttonLabel="Click to start"
      buttonURL="https://reactjs.org/"
    />
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Card title="First title" text="Some description here" button="hello please click here" image="https://bigthink.com/wp-content/uploads/2022/08/AdobeStock_306680244.jpeg?resize=480,270"/>
    <Card title="Random words" text="random description here, Hello!!" button="Dont click this one!" image="https://cdn-adventures-live.azureedge.net/adventurescache/e/4/c/2/4/8/e4c2482e0df3df62761d5b4cc43ba78454c92577.jpg"/>
    <Card title="This one had more thought" text="but nothing intresting came up here" button="Click if you want" image="https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg"/>
   </div> <Footer/>
  </div>,
  document.querySelector("#app")
);
