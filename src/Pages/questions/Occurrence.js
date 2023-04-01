import React from "react";

const Occurrence = () => {
  return (
    <div className=" col-md-8  py-4 px-5 position-absolute end-0 positionTop scroll">
      <h4>Find How Many Times Occur Element In Array ?</h4>
      <div className="card p-2 text-justify fs-5 fw-bold">
        <p className="text-success">Type 1 :-</p>
        <pre className="text-primary">
          <code>
            {` 
           const dummyData = [21, 21, 34, 56, 54];
           const newarr = dummyData.reduce((acc, curr) => {
             if (acc[curr]) {
               acc[curr] += 1;
             } else {
               acc[curr] = 1;
             }
             return acc;
           }, {});
           
           console.log(newarr);
             `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Occurrence;

