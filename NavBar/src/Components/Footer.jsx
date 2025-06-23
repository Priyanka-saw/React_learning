import React from "react";

function Footer() {
  return (
    <div
      className="footer bg-red" >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap:"10px"
          
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Email</li>
        <li>services</li>
      </ul>
    </div>
  );
}

export default Footer;
