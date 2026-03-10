import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, CheckCircle, Clock } from "lucide-react";
import type { Story } from "@/data/stories";

interface StoryDetailProps {
  story: Story;
  onBack: () => void;
  isRead: boolean;
  onMarkRead: () => void;
}

function estimateReadTime(text: string): number {
  return Math.max(2, Math.ceil(text.split(/\s+/).length / 150));
}

export default function StoryDetail({ story, onBack, isRead, onMarkRead }: StoryDetailProps) {
  const readTime = estimateReadTime(story.summary);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body font-semibold text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Header illustration */}
      {story.illustration && (
        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
          <img
            src={story.illustration}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      )}

      {/* Title area */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{story.emoji}</span>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {story.title}
            </h1>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-xs text-muted-foreground">{story.origin}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" /> {readTime} min read
              </span>
              {isRead && (
                <span className="flex items-center gap-1 text-xs text-primary font-semibold">
                  <CheckCircle className="w-3 h-3" /> Read
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Story body — elegant typography */}
      <div className="prose prose-lg max-w-none">
        <p className="font-serif text-foreground/90 leading-[1.8] text-base md:text-lg">
          {story.summary}
        </p>
      </div>

      {/* Moral card */}
      {story.moral && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-primary/5 border border-primary/10 rounded-2xl p-6"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-wider mb-2">
            Moral of the Story
          </p>
          <p className="font-serif text-foreground italic text-base leading-relaxed">
            "{story.moral}"
          </p>
        </motion.div>
      )}

      {/* Mark as read */}
      {!isRead && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <button
            onClick={onMarkRead}
            className="bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm"
          >
            <CheckCircle className="w-4 h-4" />
            I finished this story!
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
