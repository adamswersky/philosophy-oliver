export default function ChoiceButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-primary-400 hover:bg-primary-50 transition-all cursor-pointer active:scale-[0.98]"
    >
      <span className="text-slate-800 font-medium">{label}</span>
    </button>
  );
}
