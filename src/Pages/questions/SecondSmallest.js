import React from 'react'

const SecondSmallest = () => {
  return (
    <div className=" col-md-8  py-4 px-5 position-absolute end-0 positionTop scroll">
    <h4>Find The Second Smallest Element From An Array ?</h4>
    <div className="card p-2 text-justify fs-5 fw-bold">
      <p className="text-success">Type 1 :-</p>
      <pre className="text-primary">
        <code >
          {`
          const dummyData = [21, 2, 34, 56, 54];
          const findSecondSmallestElement = (arr) => {
            return arr.sort((a, b) => {
              return b - a;
            });
          };
          console.log(findSecondSmallestElement(dummyData)[dummyData.length - 2]);
          `}
        </code>
      </pre>
    </div>
  </div>
  )
}

export default SecondSmallest