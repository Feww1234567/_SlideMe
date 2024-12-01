import "./ChatMessageDriver.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ChatMessageDriver({ NameUser,messages, setMessages, input, setInput }) {


  const handleSendMessage = (sender) => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender, text: input }]);
      setInput("");
    }
  };

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
              Chat to User
            </h2>
          </i>
        </div>
      </Link>
      <div
        className="Header-Chat"
        style={{
          display: "flex",
          width: "85%",
          backgroundColor: "#D9D9D9",
          borderRadius: "20px",
          marginLeft: "7.5%",
          marginTop: "1rem",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <i
          className="bi bi-person-circle"
          style={{ fontSize: "3rem", color: "green", marginLeft: "1rem" }}
        ></i>
        <div style={{ marginLeft: "1rem" }}>
          <h2>{NameUser}</h2>
          <p>Driver</p>
        </div>
      </div>
      <div className="Chat-Window" style={{ padding: "1rem", height: "70vh", overflowY: "scroll" }}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <div style={{ position: "relative", marginBottom: "15px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage("driver");
                }
              }}
              style={{
                borderRadius: "20px",
                width: "90%",
                height: "7vh",
                backgroundColor: "#D9D9D9",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
              }}
            />
            <i
              className="bi bi-send-fill"
              onClick={() => handleSendMessage("driver")}
              style={{
                position: "absolute",
                top: "50%",
                right: "10%",
                transform: "translateY(-50%)",
                color: "green",
                cursor: "pointer",
              }}
            ></i>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ChatMessageDriver;
