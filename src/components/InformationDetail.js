import "../CSS/UserDetailInfor.scss";

function ShowInformationDetail(props) {
  return (
    <div className="UserDetailInfor">
      <h1>User Detail Information</h1>
      <div className="avatar">
        <img alt="avatar" src={props?.infor?.avatar} />
      </div>
      <h3>{props?.infor?.company ? props?.infor?.company : "Updating"}</h3>
      <h3>{props?.infor?.role ? props?.infor?.role : "Updating"}</h3>
      <h3>{props?.infor?.email ? props?.infor?.email : "Updating"}</h3>
      <h3>{props?.infor?.followers ? props?.infor?.followers : "Updating"}</h3>
    </div>
  );
}
export default ShowInformationDetail;
