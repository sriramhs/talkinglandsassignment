export type PointFeature = {
  id: string;
  type: "Point";
  properties: Record<string, any>;
  coordinates: { lat: number; lng: number };
};

export type PolygonFeature = {
  id: string;
  type: "Polygon";
  properties: Record<string, any>;
  coordinates: Array<{ lat: number; lng: number }>; 
};

export type MultiPolygonFeature = {
  id: string;
  type: "MultiPolygon";
  properties: Record<string, any>;
  coordinates: Array<Array<{ lat: number; lng: number }>>; 
};

export type SpatialFeature = PointFeature | PolygonFeature | MultiPolygonFeature;

export type SpatialResponse = {
  points: PointFeature[];
  polygons: PolygonFeature[];
  multipolygons: MultiPolygonFeature[];
};
