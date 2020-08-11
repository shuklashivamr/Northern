import React from 'react'
import "../App.css";
import { Line } from "react-lineto";

function Header() {
    return (
      <div className="Header-text">
        <h1>INTERNSHIP SIGNUP FORM</h1>
        <Line  x0={413} y0={70} x1={557} y1={70} borderWidth="5px" />
      </div>
    );
}

export default Header
