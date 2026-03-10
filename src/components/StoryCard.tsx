import { motion } from "framer-motion";
import type { Story } from "@/data/stories";
import { CheckCircle } from "lucide-react";

interface StoryCardProps {
  story: Story;
  onClick: () => void;
  index: number;
  isRead?: boolean;
}

export default function StoryCard({ story, onClick, index, isRead }: StoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      onClick={onClick}
      className="story-card text-left w-full p-5 group relative"
    >
      {isRead && (
        <span className="absolute top-3 right-3 text-accent">
          <CheckCircle className="w-5 h-5" />
        </span>
      )}
      <div className="flex items-start gap-4">
        <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
          {story.emoji}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{story.origin}</p>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{story.summary}</p>
          {story.moral && (
            <p className="text-xs text-primary mt-2 italic">💡 "{story.moral}"</p>
          )}
        </div>
      </div>
    </motion.button>
  );
}
