import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, BookOpen, ChevronRight, CheckCircle } from "lucide-react";
import type { Country, Story, Author } from "@/data/stories";

interface StoryDrawerProps {
  country: Country | null;
  onClose: () => void;
  onStoryClick: (storyId: string) => void;
  onAuthorClick: (authorId: string) => void;
  badges: {
    isStoryRead: (id: string) => boolean;
  };
}

function estimateReadTime(summary: string): number {
  const words = summary.split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 150));
}

export default function StoryDrawer({ country, onClose, onStoryClick, onAuthorClick, badges }: StoryDrawerProps) {
  return (
    <AnimatePresence>
      {country && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px] z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 z-50 max-h-[75vh] flex flex-col"
          >
            <div className="bg-card/95 backdrop-blur-xl rounded-t-3xl border-t border-x border-border/50 shadow-2xl flex flex-col max-h-[75vh]">
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-muted-foreground/20" />
              </div>

              {/* Header */}
              <div className="px-6 pb-4 pt-2 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.emoji}</span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{country.name}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {country.stories.length} stories · {country.authors.length} authors
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted/30 transition-colors text-muted-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 px-6 pb-8">
                {/* Stories */}
                <div className="mb-6">
                  <h3 className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Stories
                  </h3>
                  <div className="space-y-2">
                    {country.stories.map((story, i) => (
                      <StoryListItem
                        key={story.id}
                        story={story}
                        index={i}
                        isRead={badges.isStoryRead(story.id)}
                        onClick={() => onStoryClick(story.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Authors */}
                <div>
                  <h3 className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Famous Authors
                  </h3>
                  <div className="space-y-2">
                    {country.authors.map((author, i) => (
                      <AuthorListItem
                        key={author.id}
                        author={author}
                        index={i}
                        onClick={() => onAuthorClick(author.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function StoryListItem({ story, index, isRead, onClick }: { story: Story; index: number; isRead: boolean; onClick: () => void }) {
  const readTime = estimateReadTime(story.summary);

  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/20 transition-colors text-left group"
    >
      <span className="text-2xl flex-shrink-0">{story.emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
            {story.title}
          </h4>
          {isRead && <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">{story.origin}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/20 px-2 py-0.5 rounded-full">
          <Clock className="w-2.5 h-2.5" />
          {readTime} min
        </span>
        <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
      </div>
    </motion.button>
  );
}

function AuthorListItem({ author, index, onClick }: { author: Author; index: number; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.05 }}
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/20 transition-colors text-left group"
    >
      <span className="text-2xl flex-shrink-0">{author.emoji}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
          {author.name}
        </h4>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">
          {author.famousBooks.slice(0, 2).join(", ")}
        </p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" />
    </motion.button>
  );
}
