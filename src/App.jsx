import React, { Component, useEffect, useRef, useState } from "react";
import "./App.css";
import { Router, Route, Routes, HashRouter } from "react-router-dom";

import Login from "./page/login/login.jsx";
import LongdoMap from "./page/LongdoMap/HomeUser/LongdoMap.jsx";
import Chat from "./page/Chat/UserChat/ChatMassage/Chat.jsx";
import ChatCall from "./page/Chat/UserChat/ChatCall/ChatCall.jsx";
import Profile from "./page/Profile/Profil.jsx";
import UserProfile from "./page/Profile/Userprofile/UserProfile.jsx";
import QR from "./page/QR/QR.jsx";
import HomeDriver from "./page/LongdoMap/HomeDriver/HomeDriver.jsx";
import ChatCallDriver from "./page/Chat/DriverChat/ChatCallDriver/ChatCallDriver.jsx";
import ChatMessageDriver from "./page/Chat/DriverChat/ChatMessageDriver/ChatMessageDriver.jsx";
import DriverProfile from "./page/Profile/Driverprofile/DriverProfile.jsx";
function App() {
  const [NameDriver, setNameDriver] = useState("Mr.P");
  const [NameUser, setNameUser] = useState("Mr.User");
  const [Work, setWork] = useState(false);
  const PriceRef = useRef(null);
  const [Price, setPrice] = useState(0);
  const [isLiveLocationFormDriver, setIsLiveLocationFormDriver] =
    useState(false);
  const [isLiveLocation, setIsLiveLocation] = useState(false);
  const [liveLocation, setLiveLocation] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [isDriverlocation, setIsDriverlocation] = useState(false);
  const [isCarSelection, setIsCarSelection] = useState(false);
  const [isConfirmPickup, setIsConfirmPickup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [EndLocation, setEndLocation] = useState({ lon: 100.0, lat: 15.0 });
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/map"
            element={
              <LongdoMap
                NameDriver={NameDriver}
                Work={Work}
                setWork={setWork}
                setIsLiveLocation={setIsLiveLocation}
                isLiveLocation={isLiveLocation}
                isOnline={isOnline}
                setIsOnline={setIsOnline}
                liveLocation={liveLocation}
                setLiveLocation={setLiveLocation}
                isDriverlocation={isDriverlocation}
                Price={Price}
                isCarSelection={isCarSelection}
                setIsCarSelection={setIsCarSelection}
                isConfirmPickup={isConfirmPickup}
                setIsConfirmPickup={setIsConfirmPickup}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                EndLocation={EndLocation}
                setEndLocation={setEndLocation}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <Chat
                NameDriver={NameDriver}
                setNameDriver={setNameDriver}
                messages={messages}
                setMessages={setMessages}
                input={input}
                setInput={setInput}
              />
            }
          ></Route>
          <Route
            path="/call"
            element={<ChatCall NameDriver={NameDriver} />}
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile NameDriver={NameUser} setNameUser={setNameUser} />
            }
          ></Route>
          <Route
            path="/Userprofile"
            element={
              <UserProfile NameUser={NameUser} setNameUser={setNameUser} />
            }
          ></Route>

          <Route
            path="/homeDriver"
            element={
              <HomeDriver
                Work={Work}
                setWork={setWork}
                NameUser={NameUser}
                NameDriver={NameDriver}
                PriceRef={PriceRef}
                Price={Price}
                setPrice={setPrice}
                isLiveLocationFormDriver={isLiveLocationFormDriver}
                setIsLiveLocationFormDriver={setIsLiveLocationFormDriver}
                isOnline={isOnline}
                setIsOnline={setIsOnline}
                setIsDriverlocation={setIsDriverlocation}
                EndLocation={EndLocation}
              />
            }
          ></Route>
          <Route
            path="/callDriver"
            element={<ChatCallDriver NameUser={NameUser} />}
          ></Route>
          <Route
            path="/chatDriverMessage"
            element={
              <ChatMessageDriver
                NameUser={NameUser}
                messages={messages}
                setMessages={setMessages}
                input={input}
                setInput={setInput}
              />
            }
          ></Route>
          <Route
            path="/Driverprofile"
            element={
              <DriverProfile
                NameDriver={NameDriver}
                setNameDriver={setNameDriver}
              />
            }
          ></Route>
          <Route path="/QR" element={<QR />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
