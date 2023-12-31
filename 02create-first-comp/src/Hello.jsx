import React from "react";

const Hello = () => {
  let name = "Shubham";
  let no = 17;
  function fullname() {
    return <h2>Shubham Deshmukh</h2>;
  }
  return (
    <>
      <h3>
        Message No - {no} Hello this is the future speking and my name is{" "}
        {fullname()}
      </h3>
    </>
  );
};

export default Hello;
