"use client";

import { useState, useMemo } from "react";

import characterData from "../lib/data/Customers.json";
import CustomerCard from "./components/CustomerCard";

export default function Home() {
  const [filters, setFilters] = useState({
    gender: "",
    headwear: "",
    skin_colour: "",
    glasses: "",
    facial_hair: "",
  });

  type FilterCategory = keyof typeof filters;

  const selectFilter = (category: FilterCategory, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }));
  };

  const toggleOptions = [
    { label: "Yes", value: "true" },
    { label: "No", value: "false" },
  ];

  const filteredCharacters = useMemo(() => {
    return Object.entries(characterData).filter(([name, info]) => {
      const genderMatch = filters.gender
        ? info.gender === filters.gender
        : true;

      const headwearMatch =
        filters.headwear !== ""
          ? info.headwear === (filters.headwear === "true")
          : true;

      const skinMatch = filters.skin_colour
        ? info.skin_colour === filters.skin_colour
        : true;

      const glassesMatch =
        filters.glasses !== ""
          ? info.glasses === (filters.glasses === "true")
          : true;

      const facial_hairMatch =
        filters.facial_hair !== ""
          ? info.facial_hair === (filters.facial_hair === "true")
          : true;

      return (
        name &&
        genderMatch &&
        headwearMatch &&
        skinMatch &&
        glassesMatch &&
        facial_hairMatch
      );
    });
  }, [filters]);

  return (
    <div className="p-4 space-y-6 max-w-6xl mx-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-4 underline">Customer Filters</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 border rounded-xl p-3 bg-[#d5e0c5]">
        <div>
          <h3 className="font-semibold mb-2">Gender</h3>
          {["male", "female"].map((gender) => (
            <label key={gender} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={filters.gender === gender}
                onChange={() => selectFilter("gender", gender)}
              />
              <span className="capitalize">{gender}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Headwear</h3>
          {toggleOptions.map(({ label, value }) => (
            <label key={value} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={filters.headwear === value}
                onChange={() => selectFilter("headwear", value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Glasses</h3>
          {toggleOptions.map(({ label, value }) => (
            <label key={value} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={filters.glasses === value}
                onChange={() => selectFilter("glasses", value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Facial Hair</h3>
          {toggleOptions.map(({ label, value }) => (
            <label key={value} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={filters.facial_hair === value}
                onChange={() => selectFilter("facial_hair", value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Skin Tone</h3>
          {["light", "dark"].map((option) => (
            <label key={option} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={filters.skin_colour === option}
                onChange={() => selectFilter("skin_colour", option)}
              />
              <span className="capitalize">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Results:</h3>
        {filteredCharacters.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {filteredCharacters.map(([name]) => (
              <CustomerCard key={name} name={name} />
            ))}
          </div>
        ) : (
          <p>No customers match the selected filters.</p>
        )}
      </div>
    </div>
  );
}
