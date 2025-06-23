import React from "react";

function Navbar() {
  return (
    <div className="">
      <ul
        className=" flex item-center text-white"
        type="none" style={{
          padding:"10px",
            backgroundColor:"#000",
            justifyContent: "space-evenly",
            fontWeight:"Bold",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
    </div>
  );
}

export default Navbar;
