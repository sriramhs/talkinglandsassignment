import  { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import type { SpatialResponse } from "../types/types";
import { fetchSpatialData } from "../api/mockApi";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const redPinIcon = L.divIcon({
  className: "custom-pin-icon", 
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 24 34" aria-hidden="true">
      <!-- outer pin shape with white border -->
      <path
        d="M12 0C7.03 0 3 4.03 3 9c0 6.6 9 17 9 17s9-10.4 9-17c0-4.97-4.03-9-9-9z"
        fill="#e85f5a"
        stroke="#ffffff"
        stroke-width="1.6"
        stroke-linejoin="round"
      />
      <!-- inner circle (hole) -->
      <circle cx="12" cy="9" r="3.2" fill="#fff" />
    </svg>
  `,
  iconSize: [28, 40],    
  iconAnchor: [14, 36], 
});



type Props = {
  onFeatureSelect: (f: any) => void;
  view : "All" | "Points" | "Polygon"
};

export default function MapView({ onFeatureSelect,view }: Props) {
  const [data, setData] = useState<SpatialResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const center = useMemo(() => ({ lat: 37.7785, lng: -122.4194 }), []);

 useEffect(() => {
  const loadData = async () => {
    try {
      const res = await fetchSpatialData();
      setData(res);
    } catch (err) {
      console.error("Error fetching spatial data:", err);
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);


  if (loading || !data) {
    return (
      <div className="flex items-center justify-center h-96">
        <div>Loading map data…</div>
      </div>
    );
  }

  return (
    <MapContainer center={[center.lat, center.lng]} zoom={14} className="h-165 rounded-lg shadow">
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {(view==="All" || view ==="Points") && data.points.map((pt: { id: any; coordinates: any; properties: any }) => (
        <Marker
          icon={redPinIcon}
          key={pt.id}
          position={[pt.coordinates.lat, pt.coordinates.lng]}
          eventHandlers={{
            click: () => onFeatureSelect(pt),
          }}
        >
          <Popup>
            <div className="font-semibold">{pt.properties.title}</div>
            <div className="text-sm">{pt.properties.description}</div>
          </Popup>
        </Marker>
         
      ))}

      {(view==="All" || view ==="Polygon") && data.polygons.map((poly: { id: any; coordinates: any;properties:any }) => (
        <Polygon
        color="#e85f5a"
          key={poly.id}
          positions={poly.coordinates.map((c: { lat: number; lng: number; }) => [c.lat, c.lng] as [number, number])}
          eventHandlers={{
            click: () => onFeatureSelect(poly),
          }}
        ><Popup>
            <div className="font-semibold">{poly.properties.name}</div>
            <div className="text-sm">{poly.properties.description}</div>
          </Popup></Polygon>
      ))}

      {(view==="All" || view ==="Polygon") && data.multipolygons.map((mp: { coordinates: any[]; id: any; properties:any }) =>
        mp.coordinates.map((polyCoords: any[], idx: any) => (
          <Polygon
           color="#e85f5a"
            key={`${mp.id}-${idx}`}
            positions={polyCoords.map((c: { lat: number; lng: number; }) => [c.lat, c.lng] as [number, number])}
            eventHandlers={{
              click: () => {;onFeatureSelect(mp)},
              
            }}
          >

            <Popup>
            <div className="font-semibold">{mp.properties.name}</div>
            <div className="text-sm">{mp.properties.description}</div>
          </Popup>
          </Polygon>
        ))
      )}

    </MapContainer>
  );
}
