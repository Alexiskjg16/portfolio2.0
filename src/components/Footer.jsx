import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by
       <a href="https://github.com/Alexiskjg16"> Alexis Grisham </a>
      using <a href="https://reactjs.org/"><i className="fab fa-react"></i></a>

    </footer>
  );
};

export default Footer;
