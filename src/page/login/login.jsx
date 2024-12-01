import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSendOtp = () => {
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSending(true);

    // Simulate sending OTP (replace this with API call)
    setTimeout(() => {
      setIsSending(false);
      alert(`OTP sent to ${phoneNumber}`);
    }, 2000);
  };

  return (
    <>
      {isLogin ? (
        <div className="login">
          <h1 className="login__title">Slide Me</h1>
          <div className="login_container">
            {/* Phone Number Input */}
            <div style={{ position: "relative", marginBottom: "15px" }}>
              <i
                className="bi bi-phone"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#aaa",
                }}
              ></i>
              <input
                type="tel"
                className="login__input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ paddingLeft: "30px" }}
              />
            </div>

            {/* OTP Input */}
            <div style={{ position: "relative", marginBottom: "15px" }}>
              <i
                className="bi bi-key"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#aaa",
                }}
              ></i>
              <input
                type="text"
                className="login__input"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{ paddingLeft: "30px" }}
              />
            </div>
          </div>

          <div
            className="login__buttons"
            style={{
              display: "grid",
              gap: "1rem",
              margin: "1rem auto",
              width: "80%",
            }}
          >
            {/* Button to Send OTP */}
            <button
              className="login__button"
              onClick={handleSendOtp}
              disabled={isSending}
              style={{ background: isSending ? "lightblue" : "lightblue" }}
            >
              {isSending ? "Sending OTP..." : "Send OTP"}
            </button>

            {/* Button to Log In */}
            <Link to="/HomeDriver">
              <button
                className="login__button"
                style={{ background: "lightgreen" }}
              >
                Login
              </button>
            </Link>

            {/* Additional Link to Map */}
            <h3 style={{ textAlign: "center" }}>or</h3>
            <Link to="/map">
              <button className="login__button">Get Started</button>
            </Link>
            <button className="Development_button" onClick={() => setIsLogin(false)}>
              "Developement Credits"
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ display: "flex" }} onClick={() => setIsLogin(true)}>
            <i
              className="bi bi-arrow-left"
              style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
            ></i>
            <h1
              style={{
                position: "absolute",
                left: "25%",
                top: "5%",
                transform: "translateY(-50%)",
                color: "black",
              }}
            >
              Development By
            </h1>
          </div>
          <div className="developers">
            <div className="developer">
              <img src="./img/DevFew.jpg" alt="อัมรินทร์" />
              <h3>นาย อัมรินทร์ ทรายแก้ว</h3>
              <h3>รหัสนักศึกษา 66057161</h3>
            </div>
            <div className="developer">
              <img src="./img/DevKing.jpg" alt="วาศิษฎ์รัก" />
              <h3>นาย วาศิษฎ์รัก ผิวเกลี้ยง</h3>
              <h3>รหัสนักศึกษา 66060191</h3>
            </div>
            <div className="developer">
              <img src="./img/DevEng.jpg" alt="รัฐศาสตร์" />
              <h3>นาย รัฐศาสตร์ แก้วผ่อง</h3>
              <h3>รหัสนักศึกษา 66049530</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
