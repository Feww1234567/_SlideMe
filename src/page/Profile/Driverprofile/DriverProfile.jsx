import "./DriverProfile.css";

import { Link } from "react-router-dom";

function DriverProfile({ NameDriver, setNameDriver}) {
  return (
    <div>
      <Link to={"/HomeDriver"}>
        <div onClick={() => console.log("Back")}>
          <i
            className="bi bi-arrow-left"
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
              My Profile
            </h2>
          </i>
        </div>
      </Link>
      <div>
        <div className="Profile__container" style={{ textAlign: "center" }}>
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "7rem", color: "green" }}
          ></i>
          <h2>{NameDriver}</h2>
          <p>My Address</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            className="About"
            style={{
              textAlign: "center",
              backgroundColor: "lightgreen",
              width: "40%",
              height: "3.5rem",
              borderRadius: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h3
              style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              About
            </h3>
          </div>
          <div
            className="Review"
            style={{
              textAlign: "center",
              backgroundColor: "gray",
              width: "40%",
              height: "3.5rem",
              borderRadius: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h3
              style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              Review
            </h3>
          </div>
        </div>
        <div>
          <div>
            <h3
              style={{
                position: "relative",
                transform: "translateY(80%)",
                left: "15%",
              }}
            >
              About
            </h3>
            <p
              style={{
                position: "relative",
                transform: "translateY(20%)",
                left: "15%",
                fontWeight: "bold",
              }}
            >
              xxxxxxxxxxxxxxxxxxxxxxxx <br />
              xxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div
              style={{
                position: "relative",
                transform: "translateY(30%)",
                left: "15%",
                color: "Green",
                fontWeight: "bold",
              }}
            >
              <p>Read more</p>
            </div>
          </div>
          <div>
            <h4
              style={{
                position: "relative",
                transform: "translateY(80%)",
                left: "15%",
              }}
            >
              Car Details
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                transform: "translateY(20%)",
              }}
            >
              <p
                style={{
                  position: "relative",
                  transform: "translateY(20%)",
                  left: "15%",
                }}
              >
                Car Model
              </p>
              <h4
                style={{ position: "relative", transform: "translateX(-50%)" }}
              >
                xxxxxxx
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                transform: "translateY(20%)",
              }}
            >
              <p
                style={{
                  position: "relative",
                  transform: "translateY(20%)",
                  left: "15%",
                }}
              >
                Car Number
              </p>
              <h4
                style={{ position: "relative", transform: "translateX(-50%)" }}
              >
                กรอ-xxx
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                transform: "translateY(20%)",
              }}
            >
              <p
                style={{
                  position: "relative",
                  transform: "translateY(20%)",
                  left: "15%",
                }}
              >
                Car Color
              </p>
              <h4
                style={{ position: "relative", transform: "translateX(-110%)" }}
              >
                red
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
