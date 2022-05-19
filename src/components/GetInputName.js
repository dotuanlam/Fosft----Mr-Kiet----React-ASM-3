import React, { useState } from "react";
import '../CSS/FormInput.scss'

function GetInputName(props) {
  const [inputName, setInputName] = useState("");
 
  return (
    <div className="form-input">
      <input onChange={(e) => setInputName(e.target.value)} placeholder=" " />
      <label className="lable-input">Name</label>
      <button className="btn-get" onClick={()=>props.onGetData(inputName)}>Get</button>
    </div>
  );
}

export default GetInputName;
