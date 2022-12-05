import React from "react";

function Test() {
  const [food, setFood] = React.useState("샐러드");
  const [menuAsked, setMenuAsked] = React.useState(false);

  React.useEffect(() => {
    if (menuAsked === true) {
      printMenu();
      setMenuAsked(false); // state를 초기상태로 돌려준다.
    }
  }, [menuAsked]);

  const printMenu = React.useCallback(() => {
    console.log(`[ Today's Dinner Menu : ${food} ]`);
  }, [food]);

  const handleClick = () => {
    setMenuAsked(!menuAsked);
    setFood("피자");
  };

  return (
    <>
      <div>{food}</div>
      <button type="button" onClick={handleClick}>
        dd
      </button>
    </>
  );
}

export default Test;
