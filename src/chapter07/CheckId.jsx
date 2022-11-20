import React from "react";

function CheckId() {
  const id = React.useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={id + "-firstName"}>{id}First Name</label>
      <div>
        <input id={id + "-firstName"} type="text" />
      </div>
      <label htmlFor={id + "-lastName"}>{id}Last Name</label>
      <div>
        <input id={id + "-lastName"} type="text" />
      </div>
    </div>
  );
}

export default CheckId;
