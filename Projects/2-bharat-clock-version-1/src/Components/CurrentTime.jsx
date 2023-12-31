import React from "react";

const CurrentTime = () => {
  let time = new Date();
  return (
    <div>
      <p>
        This is the Current Time -{time.toLocaleTimeString()} -{" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
};

export default CurrentTime;
