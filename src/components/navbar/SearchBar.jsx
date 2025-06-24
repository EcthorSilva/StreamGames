"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
        type="search"
        placeholder="Pesquisar jogos no catálogo..."
        className="border block w-full rounded-md border-input bg-background/50 py-2 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
      />
    </div>
  );
}