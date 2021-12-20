import React from "react";
import "./Sponsor.css";

const Sponsor = (props) => {
  return (
    <div className={props.details.cls}>
      <div className={`pr-${props.details.key} completeLevel`}>
        <div className="heirarchy-name">{props.details.name}</div>
        <div className="companiesContainer">
          {props.details.companies.map((company) => {
            return (
              <div className="lnContainer">
                <img src={company.logo} />
                <div>{company.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
