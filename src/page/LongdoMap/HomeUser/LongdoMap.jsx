import React, { useEffect, useState, useRef } from "react";
import "./LongdoMap.css";
import { Link } from "react-router-dom";

const MAP_KEY = "68b1e8dcb7e978de4eddd55e74c118e8";

const LongdoMap = ({
  isExpanded,
  setIsExpanded,
  NameDriver,
  Work,
  setWork,
  setIsLiveLocation,
  isLiveLocation,
  isOnline,
  setIsOnline,
  liveLocation,
  setLiveLocation,
  isDriverlocation,
  Price,
  isCarSelection,
  setIsCarSelection,
  isConfirmPickup,
  setIsConfirmPickup,
  EndLocation,
  setEndLocation,
}) => {
  const [map, setMap] = useState(null);
  const [showSavedPlaces, setShowSavedPlaces] = useState(false);
  const [savedPlaces, setSavedPlaces] = useState([
    { icon: "bi-house", name: "Home", address: "Bangkok, xxxx, xxxx" },
    { icon: "bi-tools", name: "Garage", address: "Bangkok, xxxx, xxxx" },
  ]);
  const [pickupLocation, setPickupLocation] = useState("Fetching location...");
  const [selectedCar, setSelectedCar] = useState(null); // เก็บข้อมูลรถที่ถูกเลือก


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
      // var nowLocation = mapInstance.location();
      var userLocation = mapInstance.location();
      mapInstance.Route.add(userLocation)
      mapInstance.Route.add(EndLocation);
      mapInstance.Route.search();
      mapInstance.zoom(12, true);
      setMap(mapInstance);

      if (userLocation) {
        const { lon, lat } = userLocation;
        setPickupLocation(`Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`);
      };
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
  }, [EndLocation.lon, EndLocation.lat,]);

  useEffect(() => {
    if (isConfirmPickup) {
      setIsExpanded(false);
    }
  }, [isConfirmPickup]);

  useEffect(() => {
    if (isLiveLocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLiveLocation(
            `Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`
          );
        },
        (error) => {
          console.error("Error watching position:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, [isLiveLocation]);

  const cars = [
    { id: 1, name: "Slide Car", rating: "★★★★☆", price: 2200 },
    { id: 2, name: "Slide Car", rating: "★★★☆☆", price: 1950 },
    { id: 3, name: "Slide Car", rating: "★★★★☆", price: 2200 },
    { id: 4, name: "Slide Car", rating: "★★★★★", price: 2500 },
    { id: 5, name: "Slide Car", rating: "★★★★☆", price: Price },
  ];

  const handleCarClick = (car) => {
    setSelectedCar(car); // บันทึกข้อมูลรถที่ถูกเลือก
    setIsConfirmPickup(true); // เปิดหน้า Confirm Pickup
  };

  const handleConfirmPickup = () => {
    setIsLiveLocation(true);
  };

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" style={{ height: "100%" }} />

      <div className={`main-content ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="toggle-button">
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
              setShowSavedPlaces(false); 
            }}
            style={{ width: "100%", height: "100%" }}
          >
            {isExpanded ? "▼" : "▲"}
          </button>
        </div>

        {!isCarSelection && !isConfirmPickup && !isLiveLocation && (
          <>
            {isExpanded && !showSavedPlaces ? (
              <div className="search-mode">
                <h2>Plan Your Ride</h2>
                <div className="input-group">
                  <div className="input-item">
                    <i className="bi bi-person-fill" />
                    <span>{pickupLocation}</span>
                    <i className="bi bi-plus" />
                  </div>
                  <div className="input-item">
                    <i className="bi bi-geo-alt-fill" />
                    <span>{`Lat: ${EndLocation.lat}, Lon: ${EndLocation.lon}`}</span>
                  </div>
                </div>
                <div
                  className="saved-places"
                  onClick={() => setShowSavedPlaces(true)}
                >
                  <h3>
                    <i className="bi bi-bookmark"></i> Saved Places
                  </h3>
                </div>
                <div className="place-item" onClick={() => setEndLocation({ lat: 122, lon: 100 })}>
                  <i className="bi bi-house"></i>
                  <div >
                    <p>Home</p>
                    <p>Bangkok, xxxx, xxxx</p>
                  </div>
                </div>
                <div className="place-item" onClick={() => setEndLocation({ lat: 112, lon: 115 })}>
                  <i className="bi bi-tools"></i>
                  <div>
                    <p>Garage</p>
                    <p>Bangkok, xxxx, xxxx</p>
                  </div>
                </div>
                <div>
                  <h3>More Options</h3>
                  <label>
                    <input
                      type="checkbox"
                      checked={isOnline}
                      onChange={(e) => setIsOnline(e.target.checked)}
                    />
                    Set driver Online
                  </label>
                </div>
                <button
                  className="agree-button"
                  onClick={() => {
                    if (isOnline) {
                      setIsCarSelection(true);
                      setWork(true);
                    } else {
                      alert("No Driver Online");
                    }
                  }}
                >
                  Agree
                </button>
              </div>
            ) : null}

            {showSavedPlaces && (
              <div className="saved-places-container">
                <h2>Saved Places</h2>
                <div className="place-list">
                  {savedPlaces.map((place, index) => (
                    <div key={index} className="place-item">
                      <i className={`bi ${place.icon}`} />
                      <div>
                        <p>{place.name}</p>
                        <p>{place.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="agree-button"
                  onClick={() => setShowSavedPlaces(false)}
                >
                  Back
                </button>
              </div>
            )}
          </>
        )}

        {isCarSelection && !isConfirmPickup && !isLiveLocation && (
          <div className="container">
            <div className="header">
              <div onClick={() => setIsCarSelection(false)}>
                <i
                  className="bi bi-arrow-left"
                  style={{
                    fontSize: "3rem",
                    color: "green",
                    marginLeft: "1rem",
                  }}
                />
                <h2
                  style={{
                    position: "absolute",
                    left: "40%",
                    top: "5%",
                    transform: "translateY(100%)",
                    color: "black",
                  }}
                >
                  Select Car
                </h2>
              </div>
            </div>
            <div className="map-placeholder"></div>
            <div className="car-list">
              {cars.map((car) => (
                <div className="car-item" key={car.id}>
                  <div className="icon">🚗</div>
                  <div className="details" onClick={() => handleCarClick(car)}>
                    <p className="car-name">{car.name}</p>
                    <p className="rating">{car.rating}</p>
                  </div>
                  <p className="price">{car.price} ฿</p>
                </div>
              ))}
            </div>
            <Link to="/HomeDriver">
              <p onClick={() => { setWork(true) }}>Pricerate</p>
            </Link>
          </div>
        )}

        {isConfirmPickup && !isLiveLocation && (
          <div className="confirm-pickup">
            <h2>Confirm Pickup</h2>
            <p>
              You have selected: <strong>{selectedCar.name}</strong>
            </p>
            <p>Price: {selectedCar.price} ฿</p>
            <div className="button-group">
              <button
                onClick={() => {
                  handleConfirmPickup();
                  setIsConfirmPickup(false);
                }}
                className="confirm-button custom-button"
              >
                Confirm Pickup
              </button>
              <button
                onClick={() => { setIsConfirmPickup(false), setWork(false) }}
                className="cancel-button custom-button"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {isLiveLocation && (
          <div className="location-section">
            <Link
              to="/HomeDriver"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2>Live Location</h2>
            </Link>
            {liveLocation && isDriverlocation ? (
              <div className="location-section">
                <div className="ride-status-header">
                  <Link
                    to="/QR"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h3>Active Ride</h3>
                  </Link>
                  <p>5 min away from destination</p>
                </div>
                <div className="driver-info-section">
                  <div className="driver-avatar">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="driver-details">
                    <h4>{NameDriver}</h4>
                    <p>Driver</p>
                    <p>1พxxxxxx</p>
                  </div>
                  <div className="driver-actions">
                    <Link to="/chat">
                      <button className="action-button">
                        <i className="bi bi-chat-left-dots-fill"></i>
                      </button>
                    </Link>
                    <Link to="/call">
                      <button className="action-button">
                        <i className="bi bi-telephone-fill"></i>
                      </button>
                    </Link>
                    <Link to="/HomeDriver">
                      <button className="action-button"></button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <p>Fetching live location...</p>
            )}
          </div>
        )}

        {!isExpanded &&
          !isConfirmPickup &&
          !isCarSelection &&
          !isLiveLocation && (
            // Collapsed content
            <>
              <div className="content__container">
                {/* <Link to="/HomeDriver" style={{ textDecoration: "none",color:"black" }}>  */}
                  <h2>Where to?</h2>
                {/* </Link> */}
                <div className="navigation-icons">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <p>Destination</p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-house" />
                    </div>
                    <p>Home</p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-airplane-fill" />
                    </div>
                    <p>Airport</p>
                  </div>
                </div>
              </div>

              {/* Render footer only in collapsed state */}
              <footer className="footer-icons">
                <div className="icon-box">
                  <i className="bi bi-house" />
                  <p>Home</p>
                </div>
                <div className="icon-box">
                  <i className="bi bi-chat" />
                  <p>Message</p>
                </div>
                <div className="icon-box">
                  <i className="bi bi-bookmark-fill" />
                  <p>Bookmark</p>
                </div>
                <div className="icon-box">
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="bi bi-person-fill" />
                    <p>Profile</p>
                  </Link>
                </div>
              </footer>
            </>
          )}
      </div>
    </div>
  );
};

export default LongdoMap;
