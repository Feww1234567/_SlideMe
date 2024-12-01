import React, { useState, useEffect } from "react";
import "./ChatCall.css";
import { Link } from "react-router-dom";

function ChatCall({ NameDriver }) {
  const [isCalling, setIsCalling] = useState(true); 
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (isCalling) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isCalling && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isCalling, seconds]);

  const handleHangUp = () => {
    setIsCalling(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <Link to={"/map"}>
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
              Call Driver
            </h2>
          </i>
        </div>
      </Link>
      <div>
        <div
          className="Header-call"
          style={{
            textAlign: "center",
            width: "85%",
            marginLeft: "7.5%",
            marginTop: "1rem",
          }}
        >
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "10rem", color: "green", marginLeft: "1rem" }}
          ></i>
          <h2 style={{ fontSize: "2rem" }}>{NameDriver}</h2>
          <h3>{isCalling ? formatTime(seconds) : "0:00"}</h3>
        </div>  
      </div>
      <footer style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around", fontSize: "4rem" }}>
            <div style={{ color: "red" }} onClick={handleHangUp}>
            <Link to={"/Chat"} style={{ color: "red" }}>
              <i className="bi bi-telephone-x"></i>
            </Link>
            </div>
            <div style={{ color: "green" }}>
              <i className="bi bi-telephone"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ChatCall;
