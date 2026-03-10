import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, XCircle, Star } from "lucide-react";
import { tales } from "@/data/tales";
import { useCountries } from "@/hooks/useCountries";
import { useBadges } from "@/hooks/useBadges";

// Country colour themes
const colorThemes: Record<string, { bg: string; card: string; accent: string; text: string }> = {
  "story-warm":    { bg: "from-orange-100 to-amber-50",   card: "bg-orange-50  border-orange-200", accent: "bg-orange-500",  text: "text-orange-700" },
  "story-sunset":  { bg: "from-yellow-100 to-orange-50",  card: "bg-yellow-50  border-yellow-200", accent: "bg-yellow-500",  text: "text-yellow-700" },
  "story-forest":  { bg: "from-green-100  to-emerald-50", card: "bg-green-50   border-green-200",  accent: "bg-green-600",   text: "text-green-700"  },
  "story-sky":     { bg: "from-sky-100    to-blue-50",    card: "bg-sky-50     border-sky-200",    accent: "bg-sky-500",     text: "text-sky-700"   },
  "story-lavender":{ bg: "from-purple-100 to-violet-50",  card: "bg-purple-50  border-purple-200", accent: "bg-purple-500",  text: "text-purple-700"},
};

const defaultTheme = colorThemes["story-warm"];

type QuizState = "unanswered" | "correct" | "wrong";

export default function TalePage() {
  const { countryId, storyId, taleId } = useParams();
  const navigate = useNavigate();
  const { data: countries = [] } = useCountries();
  const badges = useBadges();

  const tale = tales.find((t) => t.id === taleId);
  const country = countries.find((c) => c.id === countryId);
  const pages = tale?.pages ?? (tale ? [tale.content] : []);
  const questions = tale?.questions ?? [];

  const [pageIndex, setPageIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [quizStates, setQuizStates] = useState<QuizState[]>(questions.map(() => "unanswered"));
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(badges.isTaleCompleted(taleId ?? ""));

  const theme = colorThemes[country?.color ?? ""] ?? defaultTheme;
  const isLastPage = pageIndex === pages.length - 1;
  const allAnswered = answers.every((a) => a !== null);
  const allCorrect = questions.every((q, i) => answers[i] === q.correctIndex);

  if (!tale) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <span className="text-6xl block mb-4">📖</span>
          <p className="font-display text-xl text-foreground">Story not found</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-primary font-semibold hover:underline">Go back</button>
        </div>
      </div>
    );
  }

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => { const next = [...prev]; next[questionIndex] = optionIndex; return next; });
  };

  const handleSubmit = () => {
    const states: QuizState[] = questions.map((q, i) =>
      answers[i] === q.correctIndex ? "correct" : "wrong"
    );
    setQuizStates(states);
    setSubmitted(true);
    if (states.every((s) => s === "correct")) {
      badges.completeTale(taleId!);
      setCompleted(true);
    }
  };

  const handleRetry = () => {
    setAnswers(questions.map(() => null));
    setQuizStates(questions.map(() => "unanswered"));
    setSubmitted(false);
  };

  const backPath = `/country/${countryId}?story=${storyId}`;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.bg} flex flex-col`}>

      {/* Header */}
      <div className="px-4 pt-5 pb-3 flex items-center gap-3">
        <button
          onClick={() => navigate(backPath)}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 font-body font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        {completed && (
          <span className="ml-auto flex items-center gap-1 text-xs font-display font-bold text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5" /> Completed!
          </span>
        )}
      </div>

      {/* Story reading area */}
      {!showQuiz && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 max-w-lg mx-auto w-full">

          {/* Emoji illustration */}
          <motion.div
            key={pageIndex}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="text-8xl md:text-9xl mb-8 select-none"
          >
            {tale.emoji}
          </motion.div>

          {/* Title on first page */}
          {pageIndex === 0 && (
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-2xl md:text-3xl font-bold text-slate-800 text-center mb-5"
            >
              {tale.title}
            </motion.h1>
          )}

          {/* Page text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className={`${theme.card} border rounded-3xl px-7 py-6 shadow-sm w-full`}
            >
              <p className="font-body text-slate-800 text-lg md:text-xl leading-[1.75] text-center">
                {pages[pageIndex]}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Page dots */}
          <div className="flex gap-2 mt-6">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === pageIndex ? `w-6 h-3 ${theme.accent}` : "w-3 h-3 bg-slate-300"
                }`}
              />
            ))}
            {questions.length > 0 && (
              <div className={`rounded-full w-3 h-3 transition-all ${showQuiz ? theme.accent : "bg-slate-300"}`} />
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4 mt-6 w-full justify-between">
            <button
              onClick={() => setPageIndex((p) => p - 1)}
              disabled={pageIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-display font-semibold text-sm bg-white/70 border border-slate-200 text-slate-600 disabled:opacity-30 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {isLastPage && questions.length > 0 ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQuiz(true)}
                className={`flex-1 ml-4 py-3 rounded-xl font-display font-bold text-white text-sm ${theme.accent} shadow-md hover:opacity-90 transition-opacity`}
              >
                Take the Quiz! 🎯
              </motion.button>
            ) : (
              <button
                onClick={() => setPageIndex((p) => p + 1)}
                disabled={isLastPage}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-display font-semibold text-sm bg-white/70 border border-slate-200 text-slate-600 disabled:opacity-30 hover:bg-white transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Quiz area */}
      {showQuiz && !completed && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex flex-col px-5 py-4 max-w-lg mx-auto w-full"
        >
          <h2 className="font-display text-2xl font-bold text-slate-800 text-center mb-1">Quiz Time! 🎯</h2>
          <p className="text-center text-slate-500 font-body text-sm mb-6">Answer all 3 questions correctly to complete this story.</p>

          <div className="flex flex-col gap-6">
            {questions.map((q, qi) => (
              <div key={qi} className={`${theme.card} border rounded-2xl p-5`}>
                <p className="font-display font-bold text-slate-800 text-base mb-3">
                  {qi + 1}. {q.question}
                </p>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, oi) => {
                    const selected = answers[qi] === oi;
                    const isCorrect = oi === q.correctIndex;
                    let style = "bg-white border-slate-200 text-slate-700";
                    if (submitted) {
                      if (isCorrect) style = "bg-green-100 border-green-400 text-green-800";
                      else if (selected) style = "bg-red-100 border-red-400 text-red-800";
                    } else if (selected) {
                      style = `${theme.card} border-2 ${theme.text} font-semibold`;
                    }
                    return (
                      <button
                        key={oi}
                        onClick={() => handleAnswer(qi, oi)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-sm font-body transition-all ${style}`}
                      >
                        <span className="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 border-current">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        {opt}
                        {submitted && isCorrect && <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />}
                        {submitted && selected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
                {submitted && quizStates[qi] === "correct" && (
                  <p className="text-green-600 font-display font-semibold text-xs mt-2">✓ Correct!</p>
                )}
                {submitted && quizStates[qi] === "wrong" && (
                  <p className="text-red-500 font-display font-semibold text-xs mt-2">Not quite — the correct answer is highlighted in green.</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 mb-8">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`w-full py-3.5 rounded-xl font-display font-bold text-white text-base ${theme.accent} disabled:opacity-40 shadow-md hover:opacity-90 transition-opacity`}
              >
                Submit Answers
              </button>
            ) : !allCorrect ? (
              <div className="text-center">
                <p className="text-slate-600 font-body mb-3">Some answers were wrong. Try again!</p>
                <button
                  onClick={handleRetry}
                  className={`px-8 py-3 rounded-xl font-display font-bold text-white text-base ${theme.accent} shadow-md hover:opacity-90 transition-opacity`}
                >
                  Try Again 🔄
                </button>
              </div>
            ) : null}
          </div>
        </motion.div>
      )}

      {/* Completion celebration */}
      {completed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-8xl mb-6"
          >
            🌟
          </motion.div>
          <h2 className="font-display text-3xl font-bold text-slate-800 mb-2">Amazing!</h2>
          <p className="font-body text-slate-600 text-lg mb-1">You completed</p>
          <p className="font-display text-xl font-bold text-slate-800 mb-8">"{tale.title}"</p>

          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => navigate(backPath)}
              className="px-6 py-3 rounded-xl font-display font-bold text-white text-sm bg-slate-700 hover:bg-slate-800 transition-colors shadow"
            >
              Read More Stories
            </button>
            <button
              onClick={() => navigate("/")}
              className={`px-6 py-3 rounded-xl font-display font-bold text-white text-sm ${theme.accent} hover:opacity-90 transition-opacity shadow`}
            >
              Back to Globe 🌍
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
