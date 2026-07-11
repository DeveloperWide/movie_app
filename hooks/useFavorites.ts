import { FavoritesContext } from "@/context/FavoritesContext";
import { useContext } from "react";

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
