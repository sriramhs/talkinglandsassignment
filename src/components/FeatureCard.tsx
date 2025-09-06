import type { SpatialFeature } from "@/types/types";
import { useEffect, useState } from "react";

type FeatureCardProps = {
  feature: SpatialFeature;
  onClose: () => void;
};

export default function FeatureCard({ feature, onClose }: FeatureCardProps) {
  const ANIMATION_DURATION = 400;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, [feature]);

  function handleClose() {
    setVisible(false);
    setTimeout(() => onClose(), ANIMATION_DURATION);
  }

  return (
    <div
      className={`w-full md:w-80 bg-white dark:bg-slate-900 border border-gray-300 rounded p-4 shadow-md
    transform transition-all duration-${ANIMATION_DURATION} ease-out
    ${
      visible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-2 scale-95"
    }`}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      role="dialog"
      aria-labelledby="feature-title"
      aria-modal="true"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 id="feature-title" className="text-lg font-semibold">
            {feature.type === "Point"
              ? feature.properties.title ?? "Point"
              : feature.properties.name ?? feature.type}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <span
              className="rounded-lg border px-3 py-0.5 text-xs font-medium border-[#e85f5a] bg-[#fdeaea] text-[#e85f5a]"
              aria-hidden
            >
              {feature.type}
            </span>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-[#e85f5a] rounded p-1.5 hover:bg-[#fdeaea]"
          aria-label="Close"
          title="Close"
        >
          ✕
        </button>
      </div>

      <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        {feature.properties.description || feature.properties.desc ? (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {feature.properties.description ?? feature.properties.desc}
          </p>
        ) : null}

        {feature.properties?.summary && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {feature.properties.summary}
          </p>
        )}

        {feature.type === "Point" && (feature as any).coordinates && (
          <div className="mt-3">
            <strong className="text-sm">Coordinates:</strong>
            <div className="mt-1 tabular-nums text-sm">
              {(feature as any).coordinates.lat.toFixed(5)},{" "}
              {(feature as any).coordinates.lng.toFixed(5)}
            </div>
          </div>
        )}

        {feature.type === "Polygon" && (
          <div className="mt-2 text-sm">
            <strong>Polygon vertices:</strong>{" "}
            {(feature as any).coordinates.length}
          </div>
        )}

        {feature.type === "MultiPolygon" && (
          <div className="mt-2 text-sm">
            <strong>Polygons:</strong> {(feature as any).coordinates.length}
          </div>
        )}

        {Array.isArray(feature.properties?.tags) &&
          feature.properties.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {feature.properties.tags.map((t: any, i: number) => (
                <span
                  key={`${t}-${i}`}
                  className="rounded-md border px-2 py-0.5 text-xs border-gray-300 text-gray-700 dark:text-gray-200"
                >
                  {String(t)}
                </span>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
