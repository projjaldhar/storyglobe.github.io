import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "stories-around-the-world-badges";

export interface BadgeState {
  unlockedCountries: string[];
  storiesRead: string[];
  talesCompleted: string[];
}

function loadState(): BadgeState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { talesCompleted: [], ...parsed };
    }
  } catch {}
  return { unlockedCountries: [], storiesRead: [], talesCompleted: [] };
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

  const completeTale = useCallback((taleId: string) => {
    setState((prev) => {
      if (prev.talesCompleted.includes(taleId)) return prev;
      return { ...prev, talesCompleted: [...prev.talesCompleted, taleId] };
    });
  }, []);

  const isTaleCompleted = useCallback((taleId: string) => {
    return state.talesCompleted.includes(taleId);
  }, [state.talesCompleted]);

  return {
    ...state,
    unlockCountry,
    markStoryRead,
    isCountryUnlocked,
    isStoryRead,
    completeTale,
    isTaleCompleted,
    totalCountries: state.unlockedCountries.length,
    totalStories: state.storiesRead.length,
  };
}
