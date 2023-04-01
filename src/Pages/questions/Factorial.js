import React from "react";

const Factorial = () => {
  return (
    <div className=" col-md-8  py-4 px-5 position-absolute end-0 positionTop scroll">
      <h4>Factorial ?</h4>
      <div className="card p-2 text-justify fs-5 fw-bold">
        <p className="text-success">Type 1 :-</p>
        <pre className="text-primary">
          <code>
            {` 
         const Factorial = (num) => {
            if (num > 0) {
              return num * Factorial(num - 1);
            } else {
              return 1;
            }
          };
          
          console.log(Factorial(5));        
             `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Factorial;
