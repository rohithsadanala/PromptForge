import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Star, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function EnhancedOutput({ enhancedPrompt, onSave, onReset, isSaved }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(enhancedPrompt);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  if (!enhancedPrompt) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Enhanced prompt
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="h-8 text-slate-400 hover:text-white hover:bg-slate-700/50"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            Reset
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onSave}
            disabled={isSaved}
            className="h-8 text-slate-400 hover:text-yellow-400 hover:bg-slate-700/50 disabled:text-yellow-400"
          >
            <Star className={`w-3.5 h-3.5 mr-1.5 ${isSaved ? "fill-yellow-400" : ""}`} />
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 text-slate-400 hover:text-white hover:bg-slate-700/50"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 mr-1.5" />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </div>
      <div className="relative rounded-xl bg-slate-800/50 border border-slate-700/50 p-5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-emerald-500 to-indigo-500" />
        <pre className="text-sm text-slate-200 whitespace-pre-wrap leading-relaxed font-sans">
          {enhancedPrompt}
        </pre>
      </div>
    </motion.div>
  );
}