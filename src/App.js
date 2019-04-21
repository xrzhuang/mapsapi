import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, Polygon} from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <h1>Hello Google Maps</h1>
    )
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'ENTER_YOUR_API_KEY_HERE'
})(MapContainer);