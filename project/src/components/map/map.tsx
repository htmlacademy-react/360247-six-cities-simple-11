import { Icon, Marker, Layer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { CityType, CityPointType } from '../../types/city-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../types/paths';

type MapProps = {
  city: CityType;
  points: CityPointType[];
  selectedPointId: number | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points, selectedPointId}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    const markersGroup: Layer[] = [];

    if (map) {

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPointId !== undefined && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          );

        markersGroup.push(marker);
      });
    }

    return () => {
      markersGroup?.forEach((marker: Layer) => {
        map?.removeLayer(marker);
      });
    };
  }, [map, points, selectedPointId]);

  return (
    <div className="cities__right-section">
      <section ref={mapRef} className="cities__map map" />
    </div>
  );
}

export default Map;
