import React from "react";

function Test() {

        const [isToggleOn, setIsToggleOn] = React.useState(true);
      
        const handleClick = () => {
          setIsToggleOn((isToggleOn) => !isToggleOn);
          console.log(this)
        }
      
        return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;


}

export default Test;