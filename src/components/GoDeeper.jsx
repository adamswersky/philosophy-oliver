import { useState } from "react";

export default function GoDeeper({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 cursor-pointer"
      >
        <span className={`transition-transform ${open ? "rotate-90" : ""}`}>
          ▶
        </span>
        {open ? "Less" : "Go Deeper"}
      </button>
      {open && (
        <div className="mt-3 pl-4 border-l-2 border-primary-200 text-sm text-slate-600 fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
