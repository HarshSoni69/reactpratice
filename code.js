import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'


const List = () => {
 return  (
    <ul id="List">
      <li>About</li>
      <li>Contact US</li>
      <li>Support</li>
      <li>Help</li>
    </ul>
  )
};
const HeaderConatainer=()=>{
 return (
    <div id="container">
       <img src={logo} alt="logo" />
      {List()}
      <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="..Search anything"></input>
        </div>
        <FontAwesomeIcon icon={faUser} />

    </div>


  )
};

const root = document.getElementById("hello");
ReactDOM.render(<HeaderConatainer />, root);
