

/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillEnvironment } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
  <a className="btn btn-ghost text-xl" style={{ fontFamily: 'Atma, sans-serif', fontWeight: 400 }}>ChatGPT বাংলা</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary><AiFillEnvironment /></summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Navbar;