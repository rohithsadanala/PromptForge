import React from "react";
import { motion } from "framer-motion";

export default function TemplateCard({ template, onSelect, index }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      onClick={() => onSelect(template)}
      className="group text-left p-4 rounded-xl bg-slate-800/30 border border-slate-700/40 hover:border-violet-500/40 hover:bg-slate-800/60 transition-all duration-300 w-full"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{template.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
            {template.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {template.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}