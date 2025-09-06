import logo from "../assets/logo.png";

interface Props {
  setView: (f: any) => void;
  view: "All" | "Points" | "Polygon";
}
const Header = ({ setView, view }: Props) => {
  return (
    <header className="mb-6 flex items-center justify-between rounded-lg bg-white px-6 py-4 shadow-md">
      <div className="flex gap-3 items-center">
        <img src={logo} alt="Logo" className="h-10 w-40" />
        <h1 className="text-xl font-bold text-[#e85f5a]">
          {" "}
          Sriram H S - FE Assignment
        </h1>
      </div>

      <div className="flex gap-3">
        <button
          className={`rounded-lg border px-4 py-2 text-sm font-medium 
      ${
        view === "All"
          ? "border-[#e85f5a] bg-[#fdeaea] text-[#e85f5a]"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
          onClick={() => setView("All")}
        >
          All View
        </button>

        <button
          className={`rounded-lg border px-4 py-2 text-sm font-medium 
      ${
        view === "Points"
          ? "border-[#e85f5a] bg-[#fdeaea] text-[#e85f5a]"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
          onClick={() => setView("Points")}
        >
          Points View
        </button>

        <button
          className={`rounded-lg border px-4 py-2 text-sm font-medium 
      ${
        view === "Polygon"
          ? "border-[#e85f5a] bg-[#fdeaea] text-[#e85f5a]"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
          onClick={() => setView("Polygon")}
        >
          Polygon View
        </button>
      </div>
    </header>
  );
};

export default Header;
