import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, BookOpen, CheckCircle, ChevronDown, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Story } from "@/data/stories";
import { tales } from "@/data/tales";
import type { Tale } from "@/data/tales";
import { useBadges } from "@/hooks/useBadges";

// Thematic animated hero scenes per story
const storyScenes: Record<string, { gradient: string; emojis: string[] }> = {
  // India
  'panchatantra':            { gradient: 'from-amber-700 via-orange-800 to-amber-900',    emojis: ['🦁','🐭','🐦','🌿','🌳'] },
  'hitopadesha':             { gradient: 'from-yellow-700 via-amber-800 to-orange-900',   emojis: ['📖','🦁','🕊️','🌸','✨'] },
  'jataka-tales':            { gradient: 'from-violet-800 via-purple-900 to-indigo-900',  emojis: ['🐘','🌙','🌸','🕊️','🌿'] },
  // Japan
  'momotaro':                { gradient: 'from-pink-600 via-rose-700 to-pink-900',        emojis: ['🍑','🐒','🐕','🐦','🌸'] },
  'tanuki-tales':            { gradient: 'from-green-700 via-emerald-800 to-green-900',   emojis: ['🦝','🍃','🍄','🌙','✨'] },
  'urashima-taro':           { gradient: 'from-blue-700 via-cyan-800 to-blue-900',        emojis: ['🐢','🐠','🌊','🐙','✨'] },
  // China
  'journey-to-the-west':    { gradient: 'from-red-700 via-orange-800 to-yellow-900',     emojis: ['🐒','🌩️','🏔️','🌸','✨'] },
  'legend-white-snake':      { gradient: 'from-teal-700 via-cyan-800 to-blue-900',        emojis: ['🐍','🌊','🌿','🏮','✨'] },
  // UK
  'arthurian-legends':       { gradient: 'from-slate-700 via-blue-800 to-slate-900',     emojis: ['🗡️','🏰','✨','🛡️','🌟'] },
  'peter-pan':               { gradient: 'from-indigo-600 via-blue-800 to-indigo-900',   emojis: ['✨','🧚','⭐','🌙','🐊'] },
  // Ireland
  'irish-folk-tales':        { gradient: 'from-emerald-600 via-green-700 to-emerald-900',emojis: ['🍀','🌈','🧚','🌿','✨'] },
  'celtic-fairy-tales':      { gradient: 'from-purple-700 via-emerald-800 to-teal-900',  emojis: ['🔮','🦌','🌊','🌙','🍀'] },
  // Germany
  'grimms-fairy-tales':      { gradient: 'from-green-800 via-emerald-900 to-slate-900',  emojis: ['🏰','🍎','🐺','🌲','✨'] },
  'struwwelpeter':           { gradient: 'from-red-800 via-orange-900 to-gray-900',      emojis: ['✂️','🔥','🌧️','📖','⚠️'] },
  // Ghana / West Africa
  'anansi-stories':          { gradient: 'from-amber-700 via-orange-800 to-yellow-900',  emojis: ['🕷️','🌙','🌿','🔥','🌟'] },
  'why-stories':             { gradient: 'from-orange-600 via-amber-700 to-orange-900',  emojis: ['🌅','🦁','🐘','🌳','✨'] },
  'lion-and-mouse':          { gradient: 'from-yellow-600 via-amber-700 to-yellow-900',  emojis: ['🦁','🐭','🌅','🌳','🦅'] },
  // Egypt
  'egyptian-mythology':      { gradient: 'from-yellow-600 via-amber-800 to-orange-900',  emojis: ['🐱','🌊','🌟','🏺','⭐'] },
  'isis-osiris':             { gradient: 'from-amber-700 via-purple-900 to-indigo-900',  emojis: ['👁️','🌿','🌙','🦅','✨'] },
  // USA
  'native-american-legends': { gradient: 'from-orange-700 via-red-800 to-amber-900',    emojis: ['🦅','🌙','🌾','🐺','⭐'] },
  'american-tall-tales':     { gradient: 'from-blue-700 via-red-800 to-blue-900',        emojis: ['🪓','🌊','🌪️','⛰️','🌟'] },
  // Mexico
  'aztec-creation-myths':    { gradient: 'from-red-700 via-orange-800 to-yellow-900',   emojis: ['🌞','🐍','🦅','🌿','🔥'] },
  'la-llorona':              { gradient: 'from-teal-800 via-blue-900 to-indigo-900',     emojis: ['🌊','🌙','👻','🌺','💧'] },
  // Brazil
  'saci-perere':             { gradient: 'from-green-600 via-emerald-700 to-green-900',  emojis: ['🌿','🦜','🔥','🌳','✨'] },
  'legend-of-iara':          { gradient: 'from-cyan-700 via-teal-800 to-blue-900',       emojis: ['🌊','🧜','🌿','🐠','🌙'] },
  // Peru
  'inca-legends':            { gradient: 'from-yellow-600 via-amber-700 to-orange-900',  emojis: ['🌞','🦙','⛰️','🌿','✨'] },
  'andean-folk-tales':       { gradient: 'from-orange-700 via-amber-800 to-red-900',     emojis: ['🌄','🐍','🦅','🌙','🌺'] },
  // Australia
  'dreamtime-stories':       { gradient: 'from-orange-700 via-red-800 to-orange-900',   emojis: ['🦘','🌅','🐊','🦎','⭐'] },
  'bunyip-tales':            { gradient: 'from-blue-700 via-teal-800 to-blue-900',       emojis: ['🌊','👹','🌙','🐊','🌿'] },
  // New Zealand
  'maui-legends':            { gradient: 'from-blue-600 via-teal-700 to-blue-900',       emojis: ['🌊','🎣','☀️','🐋','🌺'] },
  'taniwha-tales':           { gradient: 'from-indigo-700 via-blue-800 to-teal-900',     emojis: ['🐉','🌊','🌙','🌿','⭐'] },
  // Russia
  'baba-yaga':               { gradient: 'from-slate-700 via-gray-800 to-slate-900',    emojis: ['🏚️','🌲','🦆','🌑','✨'] },
  'firebird':                { gradient: 'from-orange-600 via-red-700 to-orange-900',   emojis: ['🔥','🐦','⭐','🌟','✨'] },
  // Norway
  'norse-mythology':         { gradient: 'from-gray-700 via-slate-800 to-blue-900',     emojis: ['⚡','🐺','🌩️','🪓','🌙'] },
  'norway-trolls':           { gradient: 'from-green-700 via-emerald-800 to-green-900', emojis: ['🧌','🌲','🏔️','🐐','🌊'] },
  // Iran
  'shahnameh':               { gradient: 'from-amber-700 via-red-800 to-amber-900',     emojis: ['👑','🦅','🗡️','🏹','🌟'] },
  'thousand-nights':         { gradient: 'from-indigo-700 via-blue-800 to-purple-900',  emojis: ['🌙','⭐','🏮','🧞','🌊'] },
};

const floatPositions = [
  { left: '10%', top: '18%', size: 'text-4xl', duration: 4.2, delay: 0.0, yRange: 14 },
  { left: '70%', top: '10%', size: 'text-5xl', duration: 5.0, delay: 0.7, yRange: 10 },
  { left: '80%', top: '60%', size: 'text-3xl', duration: 3.8, delay: 1.3, yRange: 12 },
  { left: '6%',  top: '65%', size: 'text-4xl', duration: 4.6, delay: 0.4, yRange: 16 },
  { left: '45%', top: '72%', size: 'text-3xl', duration: 4.0, delay: 1.0, yRange: 10 },
];

function StoryHero({ storyId, emoji }: { storyId: string; emoji: string }) {
  const scene = storyScenes[storyId] ?? {
    gradient: 'from-primary/40 via-primary/20 to-background',
    emojis: [emoji, '✨', '📖', '🌟', '🎭'],
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden mb-8 aspect-[16/9] bg-gradient-to-br ${scene.gradient}`}>
      {/* Subtle radial glow in centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />

      {scene.emojis.map((em, i) => (
        <motion.span
          key={i}
          className={`absolute select-none ${floatPositions[i].size} drop-shadow-lg`}
          style={{ left: floatPositions[i].left, top: floatPositions[i].top }}
          animate={{
            y: [0, -floatPositions[i].yRange, floatPositions[i].yRange * 0.5, 0],
            x: [0, 6, -4, 0],
            rotate: [0, 6, -4, 0],
          }}
          transition={{
            duration: floatPositions[i].duration,
            delay: floatPositions[i].delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {em}
        </motion.span>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}

interface StoryDetailProps {
  story: Story;
  onBack: () => void;
  isRead: boolean;
  onMarkRead: () => void;
  countryId?: string;
}

function estimateReadTime(text: string): number {
  return Math.max(2, Math.ceil(text.split(/\s+/).length / 150));
}

export default function StoryDetail({ story, onBack, isRead, onMarkRead, countryId }: StoryDetailProps) {
  const readTime = estimateReadTime(story.summary);
  const navigate = useNavigate();
  const badges = useBadges();
  const [expandedTaleId, setExpandedTaleId] = useState<string | null>(null);

  const storyTales = tales.filter((t) => t.storyId === story.id);

  function handleTaleClick(taleId: string) {
    setExpandedTaleId((prev) => (prev === taleId ? null : taleId));
  }

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

      {/* Animated thematic hero */}
      <StoryHero storyId={story.id} emoji={story.emoji} />

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

      {/* Stories in this Collection */}
      {storyTales.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold text-sm text-primary uppercase tracking-wider">
              Stories in this Collection
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {storyTales.map((tale: Tale) => {
              const hasReadingMode = !!(tale.pages && tale.pages.length > 0 && tale.questions && tale.questions.length > 0);
              const isCompleted = badges.isTaleCompleted(tale.id);
              const isOpen = expandedTaleId === tale.id;

              if (hasReadingMode && countryId) {
                return (
                  <motion.button
                    key={tale.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/country/${countryId}/story/${story.id}/tale/${tale.id}`)}
                    className="w-full flex items-center gap-4 px-5 py-4 bg-primary/5 border border-primary/10 rounded-2xl hover:bg-primary/10 transition-colors text-left"
                  >
                    <span className="text-2xl shrink-0">{tale.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif font-semibold text-foreground text-base leading-snug">{tale.title}</p>
                      {isCompleted && (
                        <p className="text-xs text-green-600 font-display font-semibold mt-0.5 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Completed
                        </p>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                  </motion.button>
                );
              }

              return (
                <div
                  key={tale.id}
                  className="bg-primary/5 border border-primary/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => handleTaleClick(tale.id)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-primary/10 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl shrink-0">{tale.emoji}</span>
                      <span className="font-serif font-semibold text-foreground text-base leading-snug truncate">
                        {tale.title}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-primary"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-primary/10">
                          <p className="font-serif text-foreground/85 leading-[1.8] text-base">
                            {tale.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

    </motion.div>
  );
}
