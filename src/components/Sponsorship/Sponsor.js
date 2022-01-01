import React from "react";
import "./Sponsor.css";

const Sponsor = (props) => {

  const URLopenerHandler=(webL)=>{
    window.open(webL,'mywindow');
  }

  return (
    <div className={`${props.details.cls} outterContainer`}>
      <div className={`prUnique-${props.details.key} completeLevel`}>
        <div className="heirarchy-name">{props.details.name}</div>
        <div className="companiesContainer">
          {props.details.companies.map((company) => {
            return (
              <div className="lnContainer" href={company.webL} onClick={()=>{URLopenerHandler(company.webL)}}>
                <img src={company.logo} />
                {props.details.isN && <div>{company.name}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
