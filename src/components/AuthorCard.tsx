import { motion } from "framer-motion";
import type { Author } from "@/data/stories";

interface AuthorCardProps {
  author: Author;
  index: number;
  onClick?: () => void;
}

export default function AuthorCard({ author, index, onClick }: AuthorCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      onClick={onClick}
      className="story-card p-5 text-left w-full group"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{author.emoji}</span>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{author.name}</h3>
          {author.birthYear && (
            <p className="text-xs text-muted-foreground">Born {author.birthYear}</p>
          )}
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{author.bio}</p>
          <p className="text-xs text-primary mt-2">
            📚 {author.famousBooks.length} famous books → Tap to explore
          </p>
        </div>
      </div>
    </motion.button>
  );
}
