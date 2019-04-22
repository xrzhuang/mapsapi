import React, { Component } from 'react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello Google Maps</h1>
      </div>
    ) 
  }
}

export default GoogleApiWrapper({
  apiKey: 'ENTER_YOUR_API_KEY_HERE'
})(MapContainer);