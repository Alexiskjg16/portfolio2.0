import React from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
} from "../../editable-stuff/configurations.json";

const MainBody = () => {




  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 className="display-1">
            {FirstName + " " + MiddleName + " " + LastName}
          </h1>
          <Typist className="lead"> {devDesc}</Typist>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
