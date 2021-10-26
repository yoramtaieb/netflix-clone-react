import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

import Sun from "../../assets/svgr/Sun.jsx";
import Togglemoon from "../../assets/svgr/Moon.jsx";

const Button = styled.button`
   {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 0 0 10px;
    padding: 0;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Togglemoon /> : <Sun />}
    </Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
