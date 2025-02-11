import "./profile.css"

const Profile = ({ name, position, img }) => {
  return (
    <div className="profiledetails">
      <div>
        <b>{name}</b>
        <small>{position}</small>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Profile;
