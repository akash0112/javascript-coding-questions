import React from "react";

const LargestElement = () => {
  return (
    <div className=" col-md-8  py-4 px-5 position-absolute end-0 positionTop scroll">
      <h4>Find The Largest Element From An Array ?</h4>
      <div className="card p-2 text-justify fs-5 fw-bold">
        <p className="text-success">Type 1 :-</p>
        <pre className="text-primary">
          <code >
            {` 
            const dummyData = [21, 2, 34, 56, 54];
            const findLargestElement = (arr) => {
              return arr.sort((a, b) => {
                return a - b;
              });
            };
            const newarray = findLargestElement(dummyData);
            console.log(newarray[newarray.length - 1]);
             `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default LargestElement;
