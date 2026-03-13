import React from "react";
import TipCard from "@/components/prompt/TipCard";
import { tips } from "@/components/prompt/promptData";

export default function Tips() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Prompt Engineering Tips</h1>
        <p className="text-sm text-slate-400 mt-1">
          Techniques to get better, more structured responses from AI
        </p>
      </div>
      <div className="grid gap-3">
        {tips.map((tip, i) => (
          <TipCard key={i} tip={tip} index={i} />
        ))}
      </div>
    </div>
  );
}