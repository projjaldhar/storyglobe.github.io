import { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleCountryClick = (countryId: string) => {
    const country = countries.find((c) => c.id === countryId);
    if (country) {
      setSelectedCountry(country);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#dbeafe]">
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
        <Globe3D countries={countries} onCountryClick={handleCountryClick} />
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
              🏅 {badges.unlockedCountries.length}/{countries.length}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom hint */}
      <AnimatePresence>
        {!selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-0 right-0 text-center pointer-events-none"
          >
            <p className="text-xs text-slate-400 font-body">
              🖱️ Drag to spin · Click a flag to discover stories
            </p>
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
                <span className="font-display text-base font-bold text-slate-800">My Country Badges</span>
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
