
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function TipCard({ tip, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/40"
    >
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-amber-500/10 mt-0.5">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-200 mb-1">{tip.title}</h4>
          <p className="text-xs text-slate-400 leading-relaxed">{tip.description}</p>
          {tip.example && (
            <div className="mt-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-700/30">
              <p className="text-[11px] text-slate-500 mb-1 uppercase tracking-wider font-medium">Example</p>
              <p className="text-xs text-slate-300 italic leading-relaxed">{tip.example}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}