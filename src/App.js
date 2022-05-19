import React, { useEffect, useState } from "react";
import ShowInformationDetail from "./components/InformationDetail";
import GetInputName from "./components/GetInputName";
import "./CSS/App.scss";
import Mounting from "./components/Mounting";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [infor, setInfor] = useState({
    role: "",
    company: "",
    email: "",
    followers: "",
    avatar: "",
  });

  const getData = (name) => {
    setLoading(true);
    return fetch(`https://api.github.com/users/${name}`);
  };

  const onGetData = (name) => {
    getData(name)
      .then((res) => res.json())
      .then((res) => {
        const avatar = res?.avatar_url;
        const role = res?.type;
        const company = res?.company;
        const email = res?.email;
        const followers = res?.followers;
        setLoading(false);
        setInfor({
          role: role,
          company: company,
          email: email,
          folowers: followers,
          avatar: avatar,
        });
        setLoading(false);
      })
      .catch((Error) => console.log("Error 404"));
  };

  useEffect(()=>{
     const autoReload =  setInterval(() => {
      getData('name')
      .then((res) => res.json())
      .then((res) => {
        const avatar = res?.avatar_url;
        const role = res?.type;
        const company = res?.company;
        const email = res?.email;
        const followers = res?.followers;
        setLoading(false);
        setInfor({
          role: role,
          company: company,
          email: email,
          folowers: followers,
          avatar: avatar,
        });
        setLoading(false);
      })
      .catch((Error) => console.log("Error 404"));
    }, 5000);
    return()=>{
      clearInterval(autoReload)
    }
  },[infor])


  return (
    <div className="App">
      <div className="container">
        <div className="content">
          {<GetInputName onGetData={onGetData} />}
          {infor.avatar === "" ? (
            <Mounting />
          ) : loading ? (
            <Loading />
          ) : (
            <ShowInformationDetail infor={infor} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
