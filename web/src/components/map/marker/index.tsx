import PropTypes from 'prop-types';

import { Marker, useMapEvents } from 'react-leaflet';

import mapMarker from '../../../utils/mapMarker';

type MapMarkerProps = {
  currentPosition: [number, number];
  // eslint-disable-next-line no-unused-vars
  setCurrentPosition: (currentPosition: [number, number]) => void;
};

const MapMarker: React.FC<MapMarkerProps> = ({
  currentPosition,
  setCurrentPosition,
}) => {
  useMapEvents({
    click(e) {
      setCurrentPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return (
    <Marker icon={mapMarker} interactive={false} position={currentPosition} />
  );
};

MapMarker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentPosition: PropTypes.any.isRequired,
  setCurrentPosition: PropTypes.func.isRequired,
};

export default MapMarker;
