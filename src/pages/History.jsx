import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import HistoryItem from "@/components/prompt/HistoryItem";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Inbox } from "lucide-react";

const getHistory = () => {
  return JSON.parse(localStorage.getItem("promptHistory") || "[]");
};

const deleteHistoryItem = (itemId) => {
  const history = getHistory();
  const updatedHistory = history.filter(item => item.id !== itemId);
  localStorage.setItem("promptHistory", JSON.stringify(updatedHistory));
};

const toggleFavoriteItem = (itemId) => {
  const history = getHistory();
  const updatedHistory = history.map(item => 
    item.id === itemId ? { ...item, is_favorite: !item.is_favorite } : item
  );
  localStorage.setItem("promptHistory", JSON.stringify(updatedHistory));
};

export default function History() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();

  const { data: history = [], isLoading } = useQuery({
    queryKey: ["prompt-history"],
    queryFn: getHistory,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteHistoryItem,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["prompt-history"] }),
  });

  const toggleFavMutation = useMutation({
    mutationFn: toggleFavoriteItem,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["prompt-history"] }),
  });

  const filtered = history.filter((item) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "favorites" && item.is_favorite) ||
      item.category === filter;
    const matchesSearch =
      !searchQuery ||
      item.original_prompt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.enhanced_prompt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Prompt History</h1>
        <p className="text-sm text-slate-400 mt-1">Your saved enhanced prompts</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 h-9"
          />
        </div>
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="bg-slate-800/50 border border-slate-700/50">
            <TabsTrigger value="all" className="text-xs data-[state=active]:bg-slate-700">All</TabsTrigger>
            <TabsTrigger value="favorites" className="text-xs data-[state=active]:bg-slate-700">⭐ Favorites</TabsTrigger>
            <TabsTrigger value="coding" className="text-xs data-[state=active]:bg-slate-700">Coding</TabsTrigger>
            <TabsTrigger value="writing" className="text-xs data-[state=active]:bg-slate-700">Writing</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* List */}
      {isLoading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 rounded-xl bg-slate-800/30 animate-pulse" />
          ))}
        </div>
      ) : filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((item, i) => (
            <HistoryItem
              key={item.id}
              item={item}
              index={i}
              onDelete={() => deleteMutation.mutate(item.id)}
              onToggleFavorite={() => toggleFavMutation.mutate(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Inbox className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 text-sm">No prompts found</p>
          <p className="text-slate-500 text-xs mt-1">Enhanced prompts you save will appear here</p>
        </div>
      )}
    </div>
  );
}