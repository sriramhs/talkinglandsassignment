import logo from "../assets/logo.png";

interface Props {
  setView: (f: any) => void;
  view: "All" | "Points" | "Polygon";
}
import { useState } from "react";

export default function ResponsiveHeader({ view, setView }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuButton = ({ label, target }: any) => (
    <button
      className={`rounded-lg border px-4 py-2 text-sm font-medium whitespace-nowrap
        ${
          view === target
            ? "border-[#e85f5a] bg-[#fdeaea] text-[#e85f5a]"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
      onClick={() => {
        setView(target);
        setMobileOpen(false);
      }}
    >
      {label}
    </button>
  );

  return (
    <header className="mb-6 rounded-lg bg-white px-4 py-3 shadow-md sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto sm:h-10 sm:w-40 object-contain"
            />
            <h1 className="text-lg font-bold text-[#e85f5a] sm:text-xl">
              Sriram H S - FE Assignment
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-3">
              <MenuButton label="All View" target="All" />
              <MenuButton label="Points View" target="Points" />
              <MenuButton label="Polygon View" target="Polygon" />
            </div>

            <div className="sm:hidden relative">
              <button
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((s) => !s)}
                className="rounded-md p-2 border border-gray-300 bg-white shadow-sm"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      mobileOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>

              {mobileOpen && (
                <div
                  role="menu"
                  aria-label="Header menu"
                  className="absolute right-0 top-12 z-1000 w-44 rounded-md bg-white p-3 shadow-lg"
                >
                  <div className="flex flex-col gap-2">
                    <MenuButton label="All View" target="All" />
                    <MenuButton label="Points View" target="Points" />
                    <MenuButton label="Polygon View" target="Polygon" />
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>
    </header>
  );
}
