import { motion, AnimatePresence } from "framer-motion";
import badgeImg from "@/assets/badge-unlocked.png";

interface BadgeUnlockModalProps {
  countryName: string;
  countryEmoji: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function BadgeUnlockModal({ countryName, countryEmoji, isOpen, onClose }: BadgeUnlockModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="bg-card rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <img src={badgeImg} alt="Badge" className="w-24 h-24 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mt-4">
                🏅 Country Unlocked!
              </h2>
              <p className="text-4xl mt-3">{countryEmoji}</p>
              <p className="font-display text-xl font-semibold text-primary mt-2">
                {countryName}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                You've explored {countryName}! Keep discovering stories from around the world!
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={onClose}
              className="mt-6 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
            >
              Keep Exploring! 🌍
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
