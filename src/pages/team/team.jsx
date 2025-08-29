import "./team.css";
import { profileData } from "../../data/toknerData";
import Profile from "../../components/profilecard/profile";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import BlurBg from "../../assets/image/blurbg";

const Team = () => {
  return (
    <>
      <BlurBg />

      <NavBar />
      <div className="teamprofile">
        <b>Our Team</b>
        <div>
          {profileData.length &&
            profileData.map((product, index) => (
              <Profile
                key={index}
                name={product.name}
                position={product.position}
                img={product.img}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
