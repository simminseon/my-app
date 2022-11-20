import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function Input() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      아이디 : <input type="text" value={id} onChange={onChangeId} />
      비밀번호 :{" "}
      <input type="text" value={password} onChange={onChangePassword} />
    </>
  );
}

export default Input;
