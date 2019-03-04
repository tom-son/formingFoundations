import React from 'react';
import GoogleMapReact, { Marker } from 'google-map-react';

const contactUs = props => {

  const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'red',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {/* {text} */}
    </div>
  );

  return (
    <div>
      <p>Address</p>
      <p>Class Timetable</p>
      <p>Location</p>
      <div style={{width: "100vw", height: "100vh"}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyDRNxIb8ls_EQLMMeHXSUeki45XJUNxcxI"}}
          defaultCenter={{lat: -33.87334068, lng: 150.8900374}}
          defaultZoom={13}
        >
          <AnyReactComponent 
          lat={-33.87334068}
          lng={150.8900374}
          text={'Home'}
        />

        </GoogleMapReact>
      </div>
      <p>FAQ</p>
    </div>
  );
};

export default contactUs;