import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Trash2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { format } from "date-fns";

export default function HistoryItem({ item, onDelete, onToggleFavorite, index }) {
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.enhanced_prompt);
    toast.success("Copied to clipboard");
  };


  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="group p-4 rounded-xl bg-slate-800/30 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              {item.category || "general"}
            </span>
            <span className="text-[10px] text-slate-500">
              {format(new Date(item.created_date), "MMM d, yyyy · h:mm a")}
            </span>
          </div>
          <p className="text-xs text-slate-400 line-clamp-1 mb-1.5">
            <span className="text-slate-500">Original:</span> {item.original_prompt}
          </p>
          <p className="text-sm text-slate-200 line-clamp-3 leading-relaxed">
            {item.enhanced_prompt}
          </p>
        </div>
        <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-slate-500 hover:text-yellow-400 hover:bg-slate-700/50"
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(item); }}
          >
            <Star className={`w-3.5 h-3.5 ${item.is_favorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-slate-500 hover:text-white hover:bg-slate-700/50"
            onClick={handleCopy}
          >
            <Copy className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-slate-500 hover:text-red-400 hover:bg-slate-700/50"
            onClick={(e) => { e.stopPropagation(); onDelete(item); }}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}