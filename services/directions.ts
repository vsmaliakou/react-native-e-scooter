const BASE_URL = 'https://api.mapbox.com/directions/v5/mapbox';

export async function getDirections(from: number[], to: number[]) {
  const response = await fetch(
    `${BASE_URL}/walking/${from[0]}%2C${from[1]}%3B${to[0]}%2C${to[1]}?alternatives=false&annotations=distance%2Cduration&continue_straight=true&geometries=geojson&overview=full&steps=false&access_token=${process.env.EXPO_PUBLIC_MAPBOX_KEY}`
  );
  const json = await response.json();

  return json;
}
