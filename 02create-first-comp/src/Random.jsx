import React from "react";

const Random = () => {
  let number = Math.random() * 100;
  return (
    <div>
      <h2 style={{'backgroundColor':'#985496'}}>Random Number : {Math.round(number)}</h2>
    </div>
  );
};

export default Random;
