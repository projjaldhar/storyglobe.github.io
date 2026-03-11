import { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { track } from "@vercel/analytics";
import { motion, AnimatePresence } from "framer-motion";
import Globe3D from "@/components/Globe3D";
import StoryDrawer from "@/components/StoryDrawer";
import BadgeCollection from "@/components/BadgeCollection";
import { useCountries } from "@/hooks/useCountries";
import { useBadges } from "@/hooks/useBadges";
import type { Country } from "@/data/stories";
import globeHero from "@/assets/globe-hero.png";

const Index = () => {
  const navigate = useNavigate();
  const badges = useBadges();
  const { data: countries = [] } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showBadges, setShowBadges] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleCountryClick = (countryId: string) => {
    const country = countries.find((c) => c.id === countryId);
    if (country) {
      setSelectedCountry(country);
      track("country_opened", { country: country.name });
    }
  };

  return (
    <div className="h-[100dvh] w-screen overflow-hidden relative bg-[#dbeafe]">
      {/* Fullscreen Globe */}
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-center">
              <img src={globeHero} alt="Globe" className="w-48 h-48 mx-auto float-animation opacity-60" />
              <p className="font-display text-base text-muted-foreground mt-4">Loading the globe…</p>
            </div>
          </div>
        }
      >
        <Globe3D countries={countries} onCountryClick={handleCountryClick} drawerOpen={!!selectedCountry} />
      </Suspense>

      {/* Minimal overlay title */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 pt-6 pb-4 flex items-center justify-between"
        >
          <div>
            <h1 className="font-display text-xl md:text-2xl font-bold text-slate-800 drop-shadow-sm">
              Story Globe
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5 font-body">
              Tap a country to explore
            </p>
          </div>
          <div className="pointer-events-auto">
            <button
              onClick={() => setShowBadges(true)}
              className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md border border-slate-200 rounded-full px-3 py-1.5 text-xs font-display font-semibold text-slate-600 hover:bg-white/80 transition-colors"
            >
              🛂 {badges.unlockedCountries.length}/{countries.length}
            </button>
          </div>
        </motion.div>
      </div>


      {/* Built by */}
      <div className="absolute bottom-4 left-4">
        <a
          href="https://github.com/projjaldhar/storyglobe.github.io/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-600 font-body hover:text-slate-800 transition-colors"
        >
          <span>Built by Projjal</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Info icon */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setShowInfo(true)}
          className="w-6 h-6 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 text-slate-500 text-xs font-bold flex items-center justify-center hover:bg-white/80 transition-colors"
        >
          i
        </button>
      </div>

      {/* Info overlay */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-end justify-end p-6 pb-14"
            onClick={() => setShowInfo(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl px-4 py-3 max-w-xs shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs text-slate-600 font-body leading-relaxed">
                This interactive experience was created by Projjal Dhar to preserve and share global oral traditions.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Badges modal */}
      <AnimatePresence>
        {showBadges && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-6"
            onClick={() => setShowBadges(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-display text-base font-bold text-slate-800">My Passport</span>
                <button
                  onClick={() => setShowBadges(false)}
                  className="text-slate-400 hover:text-slate-600 text-xl leading-none"
                >
                  ✕
                </button>
              </div>
              <BadgeCollection
                unlockedCountries={badges.unlockedCountries}
                talesCompleted={badges.talesCompleted}
                totalStories={badges.totalStories}
                countries={countries}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Sheet Story Drawer */}
      <StoryDrawer
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onStoryClick={(storyId) => {
          if (selectedCountry) {
            track("story_opened", { story: storyId, country: selectedCountry.name });
            navigate(`/country/${selectedCountry.id}?story=${storyId}`);
          }
        }}
        onAuthorClick={(authorId) => {
          if (selectedCountry) {
            navigate(`/country/${selectedCountry.id}?author=${authorId}`);
          }
        }}
        badges={badges}
      />
    </div>
  );
};

export default Index;
