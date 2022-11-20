import React from "react";
import useInput from "./useInput";

function InputTest() {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  return (
    <>
      아이디 : <input type="text" value={id} onChange={onChangeId} />
      비밀번호 :{" "}
      <input type="text" value={password} onChange={onChangePassword} />
    </>
  );
}

export default InputTest;
