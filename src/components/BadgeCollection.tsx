import { motion } from "framer-motion";
import { countries as staticCountries } from "@/data/stories";
import type { Country } from "@/data/stories";

interface BadgeCollectionProps {
  unlockedCountries: string[];
  totalStories: number;
  countries?: Country[];
}

export default function BadgeCollection({ unlockedCountries, totalStories, countries = staticCountries }: BadgeCollectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-3xl p-6 border border-border"
    >
      <h3 className="font-display text-lg font-bold text-foreground mb-1">
        🏅 My Badges
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {unlockedCountries.length} / {countries.length} countries explored • {totalStories} stories read
      </p>
      <div className="flex flex-wrap gap-3">
        {countries.map((country) => {
          const unlocked = unlockedCountries.includes(country.id);
          return (
            <motion.div
              key={country.id}
              initial={false}
              animate={{ scale: unlocked ? 1 : 0.9, opacity: unlocked ? 1 : 0.3 }}
              className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
                unlocked ? "bg-primary/10" : "bg-muted"
              }`}
            >
              <span className={`text-2xl ${unlocked ? "" : "grayscale filter"}`}>
                {country.emoji}
              </span>
              <span className="text-[10px] font-display font-semibold text-foreground">
                {country.name}
              </span>
              {unlocked && <span className="text-[10px]">✅</span>}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
