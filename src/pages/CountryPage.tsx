import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useCountries } from "@/hooks/useCountries";
import StoryDetail from "@/components/StoryDetail";
import AuthorDetail from "@/components/AuthorDetail";
import StoryCard from "@/components/StoryCard";
import AuthorCard from "@/components/AuthorCard";
import { useBadges } from "@/hooks/useBadges";
import type { Story, Author } from "@/data/stories";

export default function CountryPage() {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const badges = useBadges();
  const { data: countries = [] } = useCountries();

  const country = countries.find((c) => c.id === countryId);

  // Direct-link to a story or author via query params
  const storyParam = searchParams.get("story");
  const authorParam = searchParams.get("author");

  const selectedStory = storyParam ? country?.stories.find((s) => s.id === storyParam) ?? null : null;
  const selectedAuthor = authorParam ? country?.authors.find((a) => a.id === authorParam) ?? null : null;

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <span className="text-6xl block mb-4">🗺️</span>
          <h1 className="font-display text-2xl font-bold text-foreground">Country not found</h1>
          <button onClick={() => navigate("/")} className="mt-4 text-primary font-semibold hover:underline">
            Go back to the globe
          </button>
        </div>
      </div>
    );
  }

  // Reading room for a specific story
  if (selectedStory) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <StoryDetail
            story={selectedStory}
            onBack={() => navigate(`/country/${countryId}`)}
            isRead={badges.isStoryRead(selectedStory.id)}
            onMarkRead={() => badges.markStoryRead(selectedStory.id)}
            countryId={countryId}
          />
        </div>
      </div>
    );
  }

  // Author detail
  if (selectedAuthor) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <AuthorDetail author={selectedAuthor} onBack={() => navigate(`/country/${countryId}`)} />
        </div>
      </div>
    );
  }

  // Country overview
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-body font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to globe
        </button>

        <div className="text-center mb-8">
          <span className="text-5xl">{country.emoji}</span>
          <h1 className="font-display text-3xl font-bold text-foreground mt-2">{country.name}</h1>
          <p className="text-muted-foreground mt-1 text-sm max-w-md mx-auto">{country.description}</p>
        </div>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <h2 className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider mb-3">Collections</h2>
          <div className="grid gap-3">
            {country.stories.map((story, i) => (
              <StoryCard
                key={story.id}
                story={story}
                onClick={() => navigate(`/country/${countryId}?story=${story.id}`)}
                index={i}
                isRead={badges.isStoryRead(story.id)}
              />
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8">
          <h2 className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider mb-3">Famous Authors</h2>
          <div className="grid gap-3">
            {country.authors.map((author, i) => (
              <AuthorCard
                key={author.id}
                author={author}
                index={i}
                onClick={() => navigate(`/country/${countryId}?author=${author.id}`)}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
