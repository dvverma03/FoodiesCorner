import React from "react";


const Schimme = () => {
  
    return (
        <div className="container">
          {Array(16).fill("").map((e, index)=>(
          <div className="box" key={index}>
            <div className="major"></div>
            <div className="minor_1"></div>
            <div className="minor_2"></div>
          </div>
          )) }
        </div>
    )}

export default Schimme;