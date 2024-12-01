import React, { useEffect, useState, useRef } from "react";
import "./HomeDriver.css";
import { Link } from "react-router-dom";

const MAP_KEY = "68b1e8dcb7e978de4eddd55e74c118e8";

function HomeDriver({
  Work,
  NameUser,
  NameDriver,
  setWork,
  PriceRef,
  setPrice,
  Price,
  isLiveLocationFormDriver,
  setIsLiveLocationFormDriver,
  isOnline,
  setIsOnline,
  setIsDriverlocation,
  EndLocation,
}) {
  const [map, setMap] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://api.longdo.com/map/?key=${MAP_KEY}`;
      script.onload = () => initMap();
      script.async = true;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const mapInstance = new window.longdo.Map({
        placeholder: mapRef.current,
      });

      mapInstance.location(longdo.LocationMode.Geolocation);
      var nowLocation = mapInstance.location();
      mapInstance.Route.add(nowLocation)
      mapInstance.Route.add(EndLocation);
      mapInstance.Route.search();
      mapInstance.zoom(12, true);
      setMap(mapInstance);
    };

    if (!window.longdo) {
      loadMapScript();
    } else {
      initMap();
    }

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  const handleAgree = () => {
    setShowOrderDetails(true);
    setIsDriverlocation(true);
  };

  const handleSubmit = () => {
    console.log("Order submitted!");
    setShowOrderDetails(false);
    setPrice(PriceRef.current);
    setIsLiveLocationFormDriver(true);
  };

  console.log({ PriceRef });
  console.log({ Price });
  return (
    <div className="home-driver">
      <div ref={mapRef} className="mapDriver" style={{ height: "100vh" }} />

      {isLiveLocationFormDriver ? (
        <div className="live-location">
          <h2>Live Location</h2>
          <div className="active-ride-header">
            <h3>Active Ride</h3>
            <p>5 min away from destination</p>
          </div>
          <div className="driver-info-container">
            <Link to="/map" style={{ textDecoration: "none" }}>
              <div className="driver-avatar">
                <i className="bi bi-person-circle"></i>
              </div>
            </Link>
            <div className="driver-details">
              <h4>{NameUser}</h4>
              <p>Driver</p>
              <p>1พxxxxxx</p>
            </div>
            <div className="driver-actions">
              <Link to="/chatDriverMessage">
                <button className="action-button">
                  <i className="bi bi-chat-left-dots-fill"></i>
                </button>
              </Link>
              <Link to="/callDriver">
                <button className="action-button">
                  <i className="bi bi-telephone-fill"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {showOrderDetails ? (
            // Order Details Screen
            <div className="order-details-overlay">
              <div className="back-button">
                <button onClick={() => setShowOrderDetails(false)}>
                  <i className="bi bi-arrow-left"></i>&nbsp;Back
                </button>
              </div>
              <div className="order-header">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "8rem", color: "green" }}
                ></i>
                <div className="order-name">{NameUser}</div>
                <div className="order-location">Bangkok, xxxxxxx</div>
              </div>
              <div className="order-input">
                <label htmlFor="price-rate">Price rate</label>
                <input
                  id="price-rate"
                  type="Number"
                  placeholder="Enter price rate"
                  className="price-input"
                  ref={PriceRef}
                  onChange={(e) => {
                    PriceRef.current = e.target.value;
                  }}
                />
              </div>
              <button
                className="btn-submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          ) : Work ? (
            <div className="work-overlay">
              <div className="driver-info-header">
                <div className="avatar">
                  <i
                    className="bi bi-person-circle"
                    style={{ fontSize: "2rem", color: "green" }}
                  ></i>
                </div>
                <div className="info">
                  <div className="name">{NameUser}</div>
                </div>
              </div>

              <div className="ride-details">
                <div>
                  <strong>Pick Up</strong>
                  <div className="ride-location">Bangkok, xxxxxxx</div>
                </div>
                <div>
                  <strong>Drop Off</strong>
                  <div className="ride-location">Bangkok, xxxxxxx</div>
                </div>
              </div>

              <div className="action-buttons">
                <button
                  className="btn btn-danger"
                  onClick={() => setWork(false)}
                >
                  Ignore
                </button>
                <button className="btn btn-success" onClick={handleAgree}>
                  Agree
                </button>
              </div>
            </div>
          ) : (
            <div className="driver-overlay">
              <div className="toggle-online">
                <span>{isOnline ? "Online" : "Offline"}</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isOnline}
                    onChange={() => setIsOnline(!isOnline)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="driver-info">
                <Link to="/DriverProfile" style={{ textDecoration: "none" }}>
                  <div className="avatar" >
                    <i
                      className="bi bi-person-circle"
                      style={{ fontSize: "2rem", color: "green" }}
                    ></i>
                  </div>
                </Link>
                <div className="info">
                  <Link to="/map" style={{ textDecoration: "none" }}>
                    <div className="name">{NameDriver}</div>
                  </Link>
                  <div className="role" onClick={() => setWork(true)}>Driver</div>
                  <div className="id">1xxxxxxx</div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default HomeDriver;
