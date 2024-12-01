import "./Profile.css";
import { Link } from "react-router-dom";
function Profile({ NameDriver, setNameUser }) {
  return (
    <div className="Profile__container">
      <Link to={"/map"}>
        <div onClick={() => console.log("Back")}>
          <i
            class="bi bi-arrow-left"
            style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
          >
            <h2
              style={{
                position: "absolute",
                left: "40%",
                top: "5%",
                transform: "translateY(-50%)",
                color: "black",
              }}
            >
              Profile
            </h2>
          </i>
        </div>
      </Link>
      <Link to={"/UserProfile"} style={{ textDecoration: "none", color: "black" }}>
        <div
          className="My_Profile"
          style={{
            display: "flex",
            width: "85%",
            backgroundColor: "#D9D9D9",
            borderRadius: "20px",
            marginLeft: "7.5%",   
            marginTop: "2rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
          ></i>
          <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
            <h2>My Profile</h2>
          </div>
        </div>
      </Link>
      <div
        className="Manager_Address"
        style={{
          display: "flex",
          width: "85%",
          backgroundColor: "#D9D9D9",
          borderRadius: "20px",
          marginLeft: "7.5%",
          marginTop: "2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <i
          className="bi bi-geo-alt-fill"
          style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
        ></i>
        <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <h2>Manage Address</h2>
        </div>
      </div>
      <div
        className="Notification"
        style={{
          display: "flex",
          width: "85%",
          backgroundColor: "#D9D9D9",
          borderRadius: "20px",
          marginLeft: "7.5%",
          marginTop: "2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <i
          className="bi bi-bell-fill"
          style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
        ></i>
        <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <h2>Notification</h2>
        </div>
      </div>
      <div
        className="Setting"
        style={{
          display: "flex",
          width: "85%",
          backgroundColor: "#D9D9D9",
          borderRadius: "20px",
          marginLeft: "7.5%",
          marginTop: "2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <i
          className="bi bi-gear-fill"
          style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
        ></i>
        <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <h2>Setting</h2>
        </div>
      </div>
      <div
        className="Help_Center"
        style={{
          display: "flex",
          width: "85%",
          backgroundColor: "#D9D9D9",
          borderRadius: "20px",
          marginLeft: "7.5%",
          marginTop: "2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <i
          className="bi bi-question-circle-fill"
          style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
        ></i>
        <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <h2>Help Center</h2>
        </div>
      </div>

      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <div
          className="logout"
          style={{
            display: "flex",
            width: "85%",
            backgroundColor: "#D9D9D9",
            borderRadius: "20px",
            marginLeft: "7.5%",   
            marginTop: "2rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <i
            className="bi bi-box-arrow-right"
            style={{ fontSize: "3rem", color: "Red", marginLeft: "1rem" }}
          ></i>
          <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
            <h2>Logout</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Profile;
