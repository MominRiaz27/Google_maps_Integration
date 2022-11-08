import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.3753,
            lng: 69.3451
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBSjLilFJW_-D68wtqwZCgxcGDN2p_QTXE"
})(MapContainer);
