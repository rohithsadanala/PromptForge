import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2 } from "lucide-react";

const categories = [
  { value: "general", label: "General" },
  { value: "coding", label: "Coding" },
  { value: "writing", label: "Writing" },
  { value: "analysis", label: "Analysis" },
  { value: "brainstorming", label: "Brainstorming" },
  { value: "research", label: "Research" },
];

export default function PromptInput({ value, onChange, category, onCategoryChange, onEnhance, isLoading }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Your rough prompt</h2>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-40 h-8 bg-slate-800/50 border-slate-700 text-slate-300 text-xs">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700">
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value} className="text-slate-300 focus:bg-slate-700 focus:text-white">
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your rough idea or prompt here... e.g. 'help me write a function that sorts data'"
        className="min-h-[140px] bg-slate-800/30 border-slate-700/50 text-slate-100 placeholder:text-slate-500 resize-none focus:border-violet-500/50 focus:ring-violet-500/20 text-sm leading-relaxed"
      />
      <Button
        onClick={onEnhance}
        disabled={!value?.trim() || isLoading}
        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium h-11 shadow-lg shadow-violet-500/20 transition-all duration-300 disabled:opacity-40"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enhancing...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            Enhance Prompt
          </>
        )}
      </Button>
    </div>
  );
}