import React from "react";
import fundation from "../../dataForFundation";

function Fundation() {
  return fundation.map((el, index) => {
    return (
      <>
       

        <div className="fundation__item">

          <div className="fundation__info">
            <h1 className="fundation__name">{el.name}</h1>{" "}
            <p className="fundation__about">{el.target}</p>
          </div>
          <p className="fundation__whatNeed">{el.items}</p>
        </div>
      </>
    );
  });
}

export default Fundation;
