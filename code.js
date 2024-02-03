import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import food from './mylogo.png'

const Title=()=>{
  return (
    <img src="{food}" alt="image logo"/>
  )
}

const HeaderComponet=()=>{
 return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>


  )
};

const root = document.getElementById("hello");
ReactDOM.render(<HeaderComponet />, root);
