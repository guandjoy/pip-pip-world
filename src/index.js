import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import First from "./First";
import Second from "./Second";

function GoodbyeWorld(props) {
  const [number, setNumber] = useState(0);
  const [grandNum, setGrandNum] = useState(0);
  useEffect(() => {
    setGrandNum(number * number);
  }, [number]);
  return (
    <div>
      <div>Hello {props.name}</div>
      <First />
      <Second />
      <div>Number: {number}</div>
      <div>Grand number: {grandNum}</div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}

GoodbyeWorld.propTypes = {
  name: PropTypes.string
};

export default GoodbyeWorld;
