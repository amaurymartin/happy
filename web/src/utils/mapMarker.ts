import Leaflet from 'leaflet';

import mapMarkerImg from '../assets/images/map-marker.svg';

const mapMarker = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [42, 42],
  popupAnchor: [0, -10],
});

export default mapMarker;
