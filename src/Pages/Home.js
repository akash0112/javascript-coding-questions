import React from "react";
import { codingQuestionsData } from "../data/CodingQuestionsData";
import { NavLink } from "react-router-dom";
import {Outlet} from 'react-router-dom'
const Home = () => {
  return (
    <div className="scroll col-md-4 p-2 fw-bold">
      {codingQuestionsData.map((item, index) => (
        <div className="text-justify " key={index}>
          <p>
            <span className="mr-4">{index + 1} :- </span>{" "}
            <NavLink className="link" to={item.link}>
              {item.name}
            </NavLink>
          </p>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Home;
