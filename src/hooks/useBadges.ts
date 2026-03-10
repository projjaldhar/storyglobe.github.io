import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "stories-around-the-world-badges";

export interface BadgeState {
  unlockedCountries: string[];
  storiesRead: string[];
}

function loadState(): BadgeState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { unlockedCountries: [], storiesRead: [] };
}

function saveState(state: BadgeState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useBadges() {
  const [state, setState] = useState<BadgeState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const unlockCountry = useCallback((countryId: string) => {
    setState((prev) => {
      if (prev.unlockedCountries.includes(countryId)) return prev;
      return { ...prev, unlockedCountries: [...prev.unlockedCountries, countryId] };
    });
  }, []);

  const markStoryRead = useCallback((storyId: string) => {
    setState((prev) => {
      if (prev.storiesRead.includes(storyId)) return prev;
      return { ...prev, storiesRead: [...prev.storiesRead, storyId] };
    });
  }, []);

  const isCountryUnlocked = useCallback((countryId: string) => {
    return state.unlockedCountries.includes(countryId);
  }, [state.unlockedCountries]);

  const isStoryRead = useCallback((storyId: string) => {
    return state.storiesRead.includes(storyId);
  }, [state.storiesRead]);

  return {
    ...state,
    unlockCountry,
    markStoryRead,
    isCountryUnlocked,
    isStoryRead,
    totalCountries: state.unlockedCountries.length,
    totalStories: state.storiesRead.length,
  };
}
