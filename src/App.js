import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Deities from "./components/Deities";
import Priests from "./components/Priests";
import Events from "./components/Events";
import Donate from "./components/Donate";
import ContactUs from "./components/ContactUs";
import Appointment from './components/Appointment';
// import TempleMap from "./components/TempleMap";
import PayPal1 from './components/PayPal1';
import Map from './components/Map';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Deities />
      <Priests />
      <Events />

      {/* <TempleMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
      {/* <PayPal1 /> */}

      <Donate />
      <ContactUs />
      <Map />
      <Appointment />
      <Footer />
    </div>
  );
};

export default App;
