import React from "react";

function ConfirmButtonF() {
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButtonF;
