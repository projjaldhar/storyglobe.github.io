import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { countries as staticCountries } from "@/data/stories";
import type { Country } from "@/data/stories";

// Local asset images keyed by the value stored in the DB
import indiaImg from "@/assets/country-india.png";
import germanyImg from "@/assets/country-germany.png";
import ukImg from "@/assets/country-uk.png";
import japanImg from "@/assets/country-japan.png";
import africaImg from "@/assets/country-africa.png";

import storyPanchatantra from "@/assets/story-panchatantra.png";
import storyGrimm from "@/assets/story-grimm.png";
import storyCeltic from "@/assets/story-celtic.png";
import storyMomotaro from "@/assets/story-momotaro.png";
import storyAnansi from "@/assets/story-anansi.png";
import storyLionMouse from "@/assets/story-lion-mouse.png";

const countryImages: Record<string, string> = {
  india: indiaImg,
  germany: germanyImg,
  "uk-ireland": ukImg,
  japan: japanImg,
  "west-africa": africaImg,
};

const illustrationImages: Record<string, string> = {
  panchatantra: storyPanchatantra,
  grimm: storyGrimm,
  celtic: storyCeltic,
  momotaro: storyMomotaro,
  anansi: storyAnansi,
  "lion-mouse": storyLionMouse,
};

async function fetchCountries(): Promise<Country[]> {
  const { data, error } = await supabase
    .from("countries")
    .select("*, stories(*), authors(*)")
    .order("sort_order");

  if (error) {
    console.error("[useCountries] Supabase error, falling back to static data:", error.message);
    return staticCountries;
  }

  if (!data || data.length === 0) {
    console.warn("[useCountries] No data returned, falling back to static data");
    return staticCountries;
  }

  return data.map((c) => {
    const stories = ((c.stories as any[]) ?? [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((s) => ({
        id: s.id as string,
        title: s.title as string,
        summary: s.summary as string,
        origin: s.origin as string,
        emoji: s.emoji as string,
        moral: (s.moral as string | null) ?? undefined,
        illustration: illustrationImages[s.illustration_key as string] ?? undefined,
      }));

    const authors = ((c.authors as any[]) ?? [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((a) => ({
        id: a.id as string,
        name: a.name as string,
        bio: a.bio as string,
        emoji: a.emoji as string,
        famousBooks: (a.famous_books as string[]) ?? [],
        birthYear: (a.birth_year as string | null) ?? undefined,
      }));

    return {
      id: c.id,
      name: c.name,
      emoji: c.emoji,
      color: c.color,
      image: countryImages[c.image_key] ?? "",
      description: c.description,
      lat: c.lat,
      lng: c.lng,
      stories,
      authors,
    } satisfies Country;
  });
}

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    // Show static data instantly while the real fetch runs
    placeholderData: staticCountries,
    staleTime: 5 * 60 * 1000, // re-fetch at most every 5 minutes
  });
}
