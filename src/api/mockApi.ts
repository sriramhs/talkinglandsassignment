import type { SpatialResponse } from "../types/types";

const DELAY = 300;

const sample: SpatialResponse = {
  points: [
    {
      id: "p1",
      type: "Point",
      properties: {
        title: "Cafe Blue",
        description:
          "Cozy cafe with great espresso and plant-filled interior — good for remote work.",
        summary: "Popular local cafe, accepts card payments and has free Wi-Fi.",
        tags: ["cafe", "wifi", "remote-friendly"],
      },
      coordinates: { lat: 37.7639, lng: -122.4312 },
    },
    {
      id: "p2",
      type: "Point",
      properties: {
        title: "Bookstore",
        description: "Small independent used bookstore with a curated poetry section.",
        summary: "Cozy used-bookshop run by local volunteers.",
        tags: ["books", "used", "community"],
      },
      coordinates: { lat: 37.7898, lng: -122.4460 },
    },
    {
      id: "p3",
      type: "Point",
      properties: {
        title: "Blue Harbor Parking",
        description: "Public pay-and-display parking lot (200 spaces).",
        summary: "Short-term parking with EV charging stalls.",
        tags: ["parking", "ev-charging"],
      },
      coordinates: { lat: 37.7515, lng: -122.4031 },
    },
    {
      id: "p4",
      type: "Point",
      properties: {
        title: "Northside Library",
        description: "Small public library with children's reading hour.",
        summary: "Community library with free events.",
        tags: ["library", "community"],
      },
      coordinates: { lat: 37.8002, lng: -122.3974 },
    },
    {
      id: "p5",
      type: "Point",
      properties: {
        title: "Green Pharmacy",
        description: "Independent pharmacy with 24hr counter on weekends.",
        summary: "Open late; health supplies and consultations.",
        tags: ["pharmacy", "24hr"],
      },
      coordinates: { lat: 37.7721, lng: -122.4599 },
    },
    {
      id: "p6",
      type: "Point",
      properties: {
        title: "Harbor View Hotel",
        description: "Boutique hotel with rooftop terrace and harbor views.",
        summary: "Popular for short stays and photography.",
        tags: ["hotel", "views"],
      },
      coordinates: { lat: 37.8054, lng: -122.4209 },
    },
    {
      id: "p7",
      type: "Point",
      properties: {
        title: "Electric Bike Hub",
        description: "E-bike rentals and repair shop.",
        summary: "Rent hourly or daily.",
        tags: ["rental", "bikes", "repair"],
      },
      coordinates: { lat: 37.7970, lng: -122.4486 },
    },
    {
      id: "p8",
      type: "Point",
      properties: {
        title: "Corner Deli",
        description: "24/7 deli serving breakfast sandwiches and coffee.",
        summary: "Neighborhood staple.",
        tags: ["food", "24hr"],
      },
      coordinates: { lat: 37.7462, lng: -122.4149 },
    },
    {
      id: "p9",
      type: "Point",
      properties: {
        title: "Southside Clinic",
        description: "Community health clinic offering walk-in hours.",
        summary: "Primary care and vaccinations.",
        tags: ["health", "clinic"],
      },
      coordinates: { lat: 37.7350, lng: -122.4470 },
    },
    {
      id: "p10",
      type: "Point",
      properties: {
        title: "Uptown Market",
        description: "Large weekly market with local vendors.",
        summary: "Sundays only — seasonal produce and crafts.",
        tags: ["market", "vendors"],
      },
      coordinates: { lat: 37.8180, lng: -122.3920 },
    },
  ],
  polygons: [
 
    {
      id: "poly2",
      type: "Polygon",
      properties: {
        name: "Bayfront Industrial Reserve",
        description:
          "Expanded industrial/reserve zone including warehouses, light manufacturing, and transit hubs. Large footprint with restricted access.",
        summary: "Major industrial corridor spanning a wide bayfront area.",
        tags: ["industrial", "transport", "reserve"],
      },
      coordinates: [
        { lat: 37.7600, lng: -122.5050 },
        { lat: 37.7600, lng: -122.4400 },
        { lat: 37.7450, lng: -122.4200 },
        { lat: 37.7300, lng: -122.4100 },
        { lat: 37.7150, lng: -122.4200 },
        { lat: 37.7100, lng: -122.4700 },
        { lat: 37.7200, lng: -122.5100 },
        { lat: 37.7400, lng: -122.5200 },
        { lat: 37.7600, lng: -122.5050 }, 
      ],
    },
    {
      id: "poly3",
      type: "Polygon",
      properties: {
        name: "University & Research Park",
        description:
          "Large combined university campus and research park including quads, labs, and innovation centers.",
        summary: "Campus and research facilities spanning multiple blocks.",
        tags: ["education", "research", "campus"],
      },
      coordinates: [
        { lat: 37.8120, lng: -122.4050 },
        { lat: 37.8080, lng: -122.3950 },
        { lat: 37.8000, lng: -122.3900 },
        { lat: 37.7900, lng: -122.3925 },
        { lat: 37.7870, lng: -122.4020 },
        { lat: 37.7885, lng: -122.4120 },
        { lat: 37.7980, lng: -122.4170 },
        { lat: 37.8060, lng: -122.4100 },
        { lat: 37.8120, lng: -122.4050 }, 
      ],
    },
  ],
  multipolygons: [
    {
      id: "mp1",
      type: "MultiPolygon",
      properties: {
        name: "Twin Fields Complex",
        description:
          "Two very large sports and events complexes separated by major roadway. Each polygon represents a separate stadium/field area.",
        summary: "Hosts regional tournaments and community sporting events.",
        tags: ["sports", "events", "stadium"],
      },
      coordinates: [
        [
          { lat: 37.8150, lng: -122.4800 },
          { lat: 37.8150, lng: -122.4400 },
          { lat: 37.7950, lng: -122.4400 },
          { lat: 37.7950, lng: -122.4800 },
          { lat: 37.8150, lng: -122.4800 },
        ],
        [
          { lat: 37.7600, lng: -122.4000 },
          { lat: 37.7600, lng: -122.3600 },
          { lat: 37.7400, lng: -122.3600 },
          { lat: 37.7400, lng: -122.4000 },
          { lat: 37.7600, lng: -122.4000 },
        ],
      ],
    },
    {
      id: "mp2",
      type: "MultiPolygon",
      properties: {
        name: "Harbor Isles Expanded",
        description:
          "Cluster of large landscaped isles and promenades along an extended harbor; includes recreational areas.",
        summary: "Designed for leisure, walking, and large-scale public installations.",
        tags: ["harbor", "island", "recreation"],
      },
      coordinates: [
        [
          { lat: 37.8050, lng: -122.5200 },
          { lat: 37.8050, lng: -122.5050 },
          { lat: 37.7980, lng: -122.5050 },
          { lat: 37.7980, lng: -122.5200 },
          { lat: 37.8050, lng: -122.5200 },
        ],
        [
          { lat: 37.7850, lng: -122.4300 },
          { lat: 37.7850, lng: -122.4100 },
          { lat: 37.7750, lng: -122.4100 },
          { lat: 37.7750, lng: -122.4300 },
          { lat: 37.7850, lng: -122.4300 },
        ],
      ],
    },
  ],
};

export function fetchSpatialData(): Promise<SpatialResponse> {
  return new Promise((res) => setTimeout(() => res(sample), DELAY));
}
