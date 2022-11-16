import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';

function Map(): JSX.Element {

  const mapRef = useRef(null);

  return (
    <div className="cities__right-section">
      <section ref={mapRef} className="cities__map map" />
    </div>
  );
}

export default Map;
