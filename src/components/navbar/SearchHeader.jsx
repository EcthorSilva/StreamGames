import SearchBar from "./SearchBar";

export default function SearchHeader({ value, onChange }) {
  return (
    <div className="sticky top-0 z-40 w-full border-border/80 bg-background/95 backdrop-blur-sm border-t">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <SearchBar value={value} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}