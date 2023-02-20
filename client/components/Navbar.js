import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { handleThemeChange } = props;

  return (
    <div className="fixed z-[40]">
      <Link to="/">
        <img
          id="logo"
          className="fixed w-[50px] h-[50px] left-5 top-5"
          src="./images/doublek.png"
        ></img>
      </Link>
      <Sidebar handleThemeChange={handleThemeChange} />
    </div>
  );
}

export default Navbar;
