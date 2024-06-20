import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';

import LineRoute from './LineRoute';
import ScooterMarkers from './ScooterMarkers';

import { useScooter } from '~/providers/ScooterProvider';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map() {
  const { directionCoordinates } = useScooter();

  return (
    <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/standard">
      <Camera followZoomLevel={14} followUserLocation />

      <LocationPuck />

      <ScooterMarkers />

      {directionCoordinates && <LineRoute coordinates={directionCoordinates} />}
    </MapView>
  );
}
