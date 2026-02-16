export default function Layout({ view, onHome, onProfile, children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={onHome}
            className="flex items-center gap-2 font-bold text-lg text-slate-800 hover:text-primary-600 transition-colors"
          >
            <span className="text-2xl">🤔</span>
            <span className="hidden sm:inline">Oliver vs Philosophy</span>
          </button>
          <nav className="flex items-center gap-1">
            <button
              onClick={onHome}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                view === "home"
                  ? "bg-primary-100 text-primary-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Explore
            </button>
            <button
              onClick={onProfile}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                view === "profile"
                  ? "bg-primary-100 text-primary-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              My Profile
            </button>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
