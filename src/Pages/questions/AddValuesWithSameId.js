import React from "react";

const AddValuesWithSameId = () => {
  return (
    <div className=" col-md-8  py-4 px-4 position-absolute end-0 positionTop scroll">
      <h4>Find Only Duplicates Items From An Array ?</h4>
      <div className="card p-2 text-justify fs-5 fw-bold">
        <p className="text-success">Type 1 :-</p>
        <pre className="text-primary">
          <code>
            {` 
            input = [
                { id: 1, value: 20 },
                { id: 2, value: 6 },
                { id: 3, value: 14 },
                { id: 1, value: 4 },
                { id: 2, value: 15 },
              ];
              
              const modifiedArray = [];
              
              input.map((item) => {
                const obj = modifiedArray.find((newValue) => newValue.id === item.id);
                if (obj) {
                  obj.value = obj.value + item.value;
                } else {
                  modifiedArray.push(item);
                }
              });
              console.log(modifiedArray);          
           `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AddValuesWithSameId;
