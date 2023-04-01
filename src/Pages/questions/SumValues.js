import React from "react";

const SumValues = () => {
  return (
    <div className=" col-md-8  py-4 px-5 position-absolute end-0 positionTop scroll">
      <h4>Sum Values ?</h4>
      <div className="card p-2 text-justify fs-5 mb-2 fw-bold">
        <p className="text-success">Type 1 :-</p>
        <pre className="text-primary">
          <code>
            {` 
      const SumValues = (a) => {
        return function (b) {
          return function (c) {
            return a + b + c;
          };
        };
      };
      console.log(SumValues(2)(3)(4));   
           `}
          </code>
        </pre>
      </div>
      <div className="card p-2 text-justify mb-2 fs-5 fw-bold">
        <p className="text-success">Type 2 :-</p>
        <pre className="text-primary">
          <code>
            {` 
      const SumValues = () => {
        return function (a) {
          return function (b) {
            return a + b;
          };
        };
      };
      const ReturnValuesFunction = SumValues()
      console.log(ReturnValuesFunction(4)(5));   
           `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default SumValues;
