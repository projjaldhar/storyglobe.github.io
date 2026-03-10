import { motion } from "framer-motion";
import type { Country } from "@/data/stories";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
  index: number;
}

export default function CountryCard({ country, onClick, index }: CountryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={onClick}
      className="story-card text-left group w-full"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-3xl mr-2">{country.emoji}</span>
          <span className="font-display text-xl font-bold text-primary-foreground drop-shadow-lg">
            {country.name}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{country.description}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="country-badge">
            📖 {country.stories.length} {country.stories.length === 1 ? "story" : "stories"}
          </span>
          <span className="country-badge">
            ✍️ {country.authors.length} {country.authors.length === 1 ? "author" : "authors"}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
