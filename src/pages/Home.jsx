import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import PromptInput from "@/components/prompt/PromptInput";
import EnhancedOutput from "@/components/prompt/EnhancedOutput";
import TemplateCard from "@/components/prompt/TemplateCard";
import { templates } from "@/components/prompt/promptData";
import { toast } from "sonner";

export default function Home() {
  const [rawPrompt, setRawPrompt] = useState("");
  const [category, setCategory] = useState("general");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const enhanceMutation = useMutation({
    mutationFn: async () => {
      // This is a mock enhancement. In a real app, you would call an AI service.
      return new Promise(resolve => {
        setTimeout(() => {
          const enhanced = `This is an enhanced version of the prompt: "${rawPrompt}" in the "${category}" category.`;
          resolve(enhanced);
        }, 500);
      });
    },
    onSuccess: (result) => {
      setEnhancedPrompt(result);
      setIsSaved(false);
    },
  });

  const handleSave = () => {
    const history = JSON.parse(localStorage.getItem("promptHistory") || "[]");
    const newEntry = {
      id: Date.now(),
      original_prompt: rawPrompt,
      enhanced_prompt: enhancedPrompt,
      category: category,
      is_favorite: false,
      created_at: new Date().toISOString(),
    };
    localStorage.setItem("promptHistory", JSON.stringify([newEntry, ...history]));
    setIsSaved(true);
    toast.success("Prompt saved to history");
  };

  const handleReset = () => {
    setRawPrompt("");
    setEnhancedPrompt("");
    setIsSaved(false);
  };

  const handleTemplateSelect = (template) => {
    setRawPrompt(template.prompt);
    setCategory(template.category);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          AI Prompt Enhancer
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Write better prompts,<br />
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            get better answers.
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Transform rough ideas into structured, effective prompts that produce logical, high-quality AI responses.
        </p>
      </div>

      {/* Input */}
      <PromptInput
        value={rawPrompt}
        onChange={setRawPrompt}
        category={category}
        onCategoryChange={setCategory}
        onEnhance={() => enhanceMutation.mutate()}
        isLoading={enhanceMutation.isPending}
      />

      {/* Output */}
      <EnhancedOutput
        enhancedPrompt={enhancedPrompt}
        onSave={handleSave}
        onReset={handleReset}
        isSaved={isSaved}
      />

      {/* Templates */}
      {!enhancedPrompt && (
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Quick Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {templates.map((template, i) => (
              <TemplateCard key={template.id} template={template} onSelect={handleTemplateSelect} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}