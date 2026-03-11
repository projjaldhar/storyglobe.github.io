import { motion } from "framer-motion";
import { countries as staticCountries } from "@/data/stories";
import { tales } from "@/data/tales";
import type { Country } from "@/data/stories";

interface BadgeCollectionProps {
  unlockedCountries: string[];
  talesCompleted: string[];
  totalStories: number;
  countries?: Country[];
}

export default function BadgeCollection({ unlockedCountries, talesCompleted, totalStories, countries = staticCountries }: BadgeCollectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-3xl p-6 border border-border"
    >
      <h3 className="font-display text-lg font-bold text-foreground mb-1">
        🛂 My Passport
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {unlockedCountries.length} / {countries.length} countries explored • {talesCompleted.length} stories read
      </p>
      <div className="flex flex-wrap gap-3">
        {countries.map((country) => {
          const unlocked = unlockedCountries.includes(country.id);
          const countryStoryIds = country.stories.map((s) => s.id);
          const countryTales = tales.filter(
            (t) => countryStoryIds.includes(t.storyId) && t.pages && t.pages.length > 0 && t.questions && t.questions.length > 0
          );
          const completedCount = countryTales.filter((t) => talesCompleted.includes(t.id)).length;
          const totalCount = countryTales.length;

          return (
            <motion.div
              key={country.id}
              initial={false}
              animate={{ scale: unlocked ? 1 : 0.9, opacity: unlocked ? 1 : 0.5 }}
              className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors min-w-[70px] ${
                unlocked ? "bg-primary/10" : "bg-muted"
              }`}
            >
              <span className={`text-2xl ${unlocked ? "" : "grayscale filter"}`}>
                {country.emoji}
              </span>
              <span className="text-[10px] font-display font-semibold text-foreground text-center">
                {country.name}
              </span>
              {unlocked ? (
                <span className="text-[10px]">✅</span>
              ) : (
                <span className="text-[10px] text-muted-foreground font-display">
                  {completedCount}/{totalCount} tales
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
