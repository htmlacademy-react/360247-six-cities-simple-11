export type CityType = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
  name: string;
};

export type CityPointType = {
  location: {
    latitude: number;
    longitude: number;
  };
  id: number;
};
