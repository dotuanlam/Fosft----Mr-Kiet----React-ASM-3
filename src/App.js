import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");
  const [infor, setInfor] = useState({
    Role: "",
    Company: "",
    Email: "",
    NumberOfFollowers: 0,
    Avatar: null,
  });

  const getData = (name) => {
    return fetch(`https://api.github.com/users/${name}`);
  };

  const onGettingData = () => {
    getData(inputName)
      .then((res) => res.json())
      .then((res) => {
        const avatarUser = res.avatar_url;
        const role = res.type;
        const company = res.company;
        const email = res.email;
        const followers = res.followers;
        setInfor({
          Role: role,
          Company: company,
          Email: email,
          NumberOfFolowers: followers,
          Avatar: avatarUser,
        });
      });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="form-input">
            <input
              onChange={(e) => setInputName(e.target.value)}
              placeholder=" "
            />
            <label className="lable-input">Name</label>
            <button className="btn-get" onClick={onGettingData}>
              Get
            </button>
          </div>
          <div className="UserDetailInfor">
            <h1>User Detail Information</h1>
          </div>
          <div className="avatar">
            <img alt="avatar" src={infor.Avatar}></img>
          </div>
          <h3>Role: {infor.Role === "null" ? "Updating" : infor.Role}</h3>
          <h3>Email: {infor.Email === null ? "Updating" : infor.Email}</h3>
          <h3>Number Of Follower: {infor.NumberOfFolowers}</h3>
          <h3>
            Company: {infor.Company === null ? "Updating" : infor.Company}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
