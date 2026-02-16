import { useState } from "react";
import { shareResults } from "../utils/share";

export default function ShareCard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const success = await shareResults(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-full py-3 px-6 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-900 transition-colors cursor-pointer active:scale-[0.98]"
    >
      {copied ? "Copied!" : "Share My Results"}
    </button>
  );
}
