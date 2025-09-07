import { useState } from "react";
import MapView from "./components/MapView";
import type { SpatialFeature } from "./types/types";
import FeatureCard from "./components/FeatureCard";
import Header from "./components/Header";

export default function App() {
  const [selected, setSelected] = useState<SpatialFeature | null>(null);
  const [view, setView] = useState<"All" | "Points" | "Polygon">("All");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800 ">
      <Header setView={setView} view={view} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">
        <div className="lg:col-span-4 p-6">
          <MapView
            onFeatureSelect={(f) => {
              console.log(f);
              setSelected(f);
            }}
            view={view}
          />
        </div>

        <aside className="p-4 lg:p-0">
          <div className="mb-4 ">
            <h2 className="text-lg font-medium">Feature Info</h2>
            <p className="text-sm text-gray-500">
              Click a marker, polygon or the map to see details
            </p>
          </div>

          {selected && (
            <FeatureCard feature={selected} onClose={() => setSelected(null)} />
          )}
        </aside>
      </div>
    </div>
  );
}
