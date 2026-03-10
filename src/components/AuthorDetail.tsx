import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import type { Author } from "@/data/stories";

interface AuthorDetailProps {
  author: Author;
  onBack: () => void;
}

export default function AuthorDetail({ author, onBack }: AuthorDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-body font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="story-card p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-6xl block mb-3">{author.emoji}</span>
          <h1 className="font-display text-3xl font-bold text-foreground">{author.name}</h1>
          {author.birthYear && (
            <p className="text-sm text-muted-foreground mt-1">Born {author.birthYear}</p>
          )}
        </div>

        {/* Bio */}
        <div className="bg-muted/50 rounded-2xl p-6">
          <h2 className="font-display text-lg font-semibold text-foreground mb-3">📝 About</h2>
          <p className="text-foreground leading-relaxed">{author.bio}</p>
        </div>

        {/* Famous Books */}
        {author.famousBooks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5"
          >
            <h2 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Famous Books
            </h2>
            <div className="grid gap-2">
              {author.famousBooks.map((book, i) => (
                <motion.div
                  key={book}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-card rounded-xl p-3 border border-border flex items-center gap-3"
                >
                  <span className="text-lg">📚</span>
                  <span className="font-body font-semibold text-foreground">{book}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
