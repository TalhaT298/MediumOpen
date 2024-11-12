/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillEnvironment } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <a
            className="text-xl"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
          >
            বাংলাGPT 
          </a>
        </div>
        <div className="flex-none ">
          <ul className="menu-horizontal gap-x-4">
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>
                <AiFillEnvironment className="w-6 h-6" />
              </a>
            </li>
            <li>
              {/* <details>
          <summary></summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
