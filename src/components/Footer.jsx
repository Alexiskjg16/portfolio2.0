import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        Alexis Grisham
    {" "}
      using <i className="fab fa-react"></i>

    </footer>
  );
};

export default Footer;
