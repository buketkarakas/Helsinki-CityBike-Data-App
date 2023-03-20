import React from "react";
import GoogleMapReact from 'google-map-react';

interface Props {
    lat:number,
    lng:number,
    text:string
}

const AnyReactComponent = (props:Props) => <div>{props.text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 24.840319,
      lng: 60.16582
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAubx4dvDcTRttpwo0NtmJRqLu16Dd6lnY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={24.840319}
          lng={60.16582}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}