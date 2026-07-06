import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value.trim());
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar cidade..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button" type="submit" disabled={loading}>
        {loading ? "..." : "Buscar"}
      </button>
    </form>
  );
}
