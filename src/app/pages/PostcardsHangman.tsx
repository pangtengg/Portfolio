import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const SECRET_KEY = "IMPTYEAHH";
const MAX_WRONG = 7;

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// Hand-drawn style gallows SVG paths for each wrong guess stage (0-7)
// Using slightly wobbly paths to simulate hand-drawn look
const GALLOWS_PARTS = [
  // 0 — empty
  null,
  // 1 — head (hand-drawn circle)
  <path key="head" d="M106 42 Q106 28 120 28 Q134 28 134 42 Q134 56 120 56 Q106 56 106 42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  // 2 — body (slightly wobbly line)
  <path key="body" d="M120 56 L118 83 L120 110" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  // 3 — left arm (wobbly)
  <path key="larm" d="M118 70 L107 81 L95 92" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  // 4 — right arm (wobbly)
  <path key="rarm" d="M122 70 L133 81 L145 92" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  // 5 — left leg (wobbly)
  <path key="lleg" d="M120 110 L108 124 L95 138" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  // 6 — right leg (wobbly)
  <path key="rleg" d="M120 110 L132 124 L145 138" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  // 7 — face (x eyes + frown)
  <>
    <path key="eye1" d="M113 36 L117 40 M117 36 L113 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path key="eye2" d="M123 36 L127 40 M127 36 L123 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path key="frown" d="M113 48 Q120 44 127 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </>,
];

export default function PostcardsHangman({ onUnlocked }: { onUnlocked?: () => void }) {
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [phase, setPhase] = useState<"play" | "won" | "lost" | "access">("play");
  const [shake, setShake] = useState(false);

  const uniqueLetters = Array.from(new Set(SECRET_KEY.split("")));
  const wrongGuesses = [...guessed].filter((l) => !uniqueLetters.includes(l));
  const wrongCount = wrongGuesses.length;
  const revealed = uniqueLetters.every((l) => guessed.has(l));

  useEffect(() => {
    if (revealed && phase === "play") {
      setPhase("won");
    } else if (wrongCount >= MAX_WRONG && phase === "play") {
      setPhase("lost");
    }
  }, [guessed, revealed, wrongCount, phase]);

  const guess = useCallback(
    (letter: string) => {
      if (phase !== "play" || guessed.has(letter)) return;
      setGuessed((prev) => new Set([...prev, letter]));
      if (!uniqueLetters.includes(letter)) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    },
    [phase, guessed, uniqueLetters]
  );

  // Keyboard listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const letter = e.key.toUpperCase();
      if (/^[A-Z]$/.test(letter)) guess(letter);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [guess]);

  const reset = () => {
    setGuessed(new Set());
    setPhase("play");
  };

  const handleAccessPostcards = () => {
    setPhase("access");
    onUnlocked?.();
  };

  // Word display — unique letters in order of appearance
  const wordDisplay = SECRET_KEY.split("").map((char, i) => {
    const isRevealed = guessed.has(char) || phase !== "play";
    return (
      <motion.span
        key={i}
        initial={false}
        animate={{ opacity: isRevealed ? 1 : 0.25, y: isRevealed ? 0 : 4 }}
        transition={{ duration: 0.25, delay: isRevealed ? i * 0.05 : 0 }}
        className="inline-flex items-end justify-center"
        style={{ width: "1.8ch", borderBottom: "1.5px solid currentColor", minHeight: "1.6em" }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "1.2rem",
            letterSpacing: "-0.02em",
            color: phase === "lost" && !guessed.has(char) ? "#ef4444" : "inherit",
          }}
        >
          {isRevealed ? char : ""}
        </span>
      </motion.span>
    );
  });

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        padding: "2rem 1.5rem 1.5rem",
        backdropFilter: "blur(8px)",
        color: "#c8c5ba",
        fontFamily: "monospace",
        position: "relative",
        overflow: "hidden",
        maxWidth: "640px",
        margin: "0 auto",
      }}
    >
      {/* Starfield micro-texture */}
      <svg
        style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.35 }}
        width="100%"
        height="100%"
      >
        {[...Array(24)].map((_, i) => (
          <circle
            key={i}
            cx={`${(i * 37 + 11) % 100}%`}
            cy={`${(i * 53 + 7) % 100}%`}
            r={i % 5 === 0 ? 1.2 : 0.7}
            fill="#fff"
          />
        ))}
      </svg>

      {/* Header */}
      <p
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(200,197,186,0.45)",
          margin: "0 0 1.25rem",
        }}
      >
        ✦ unlock postcards
      </p>

      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Gallows + figure */}
        <motion.div animate={shake ? { x: [-6, 6, -4, 4, 0] } : { x: 0 }} transition={{ duration: 0.4 }}>
          <svg
            width="160"
            height="165"
            viewBox="0 0 160 165"
            style={{ color: "#c8c5ba", flexShrink: 0 }}
          >
            {/* Gallows structure - hand-drawn style */}
            <path d="M22 158 Q90 162 158 158" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M62 158 L60 84 L58 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M60 10 Q90 12 120 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M120 10 L119 19 L120 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Brace */}
            <path d="M60 30 L70 20 L80 10" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

            {/* Stickman parts revealed one by one */}
            <AnimatePresence>
              {GALLOWS_PARTS.slice(1, wrongCount + 1).map((part, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {part}
                </motion.g>
              ))}
            </AnimatePresence>
          </svg>

          {/* Wrong count indicator */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              justifyContent: "center",
              marginTop: "4px",
            }}
          >
            {[...Array(MAX_WRONG)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: i < wrongCount ? "#ef4444" : "rgba(200,197,186,0.2)",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Word + keyboard */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          {/* Word tiles */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
              minHeight: "2.2rem",
            }}
          >
            {wordDisplay}
          </div>

          {/* Keyboard */}
          {phase === "play" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {KEYBOARD_ROWS.map((row, ri) => (
                <div key={ri} style={{ display: "flex", gap: "5px", justifyContent: "flex-start" }}>
                  {row.map((letter) => {
                    const isGuessed = guessed.has(letter);
                    const isCorrect = isGuessed && uniqueLetters.includes(letter);
                    const isWrong = isGuessed && !uniqueLetters.includes(letter);
                    return (
                      <motion.button
                        key={letter}
                        onClick={() => guess(letter)}
                        disabled={isGuessed}
                        whileHover={!isGuessed ? { y: -2, scale: 1.08 } : {}}
                        whileTap={!isGuessed ? { scale: 0.92 } : {}}
                        style={{
                          width: "30px",
                          height: "30px",
                          border: isWrong
                            ? "1px solid rgba(239,68,68,0.25)"
                            : isCorrect
                            ? "1px solid rgba(110,231,183,0.4)"
                            : "1px solid rgba(200,197,186,0.2)",
                          borderRadius: "5px",
                          background: isWrong
                            ? "rgba(239,68,68,0.08)"
                            : isCorrect
                            ? "rgba(110,231,183,0.1)"
                            : "rgba(255,255,255,0.04)",
                          color: isWrong
                            ? "rgba(239,68,68,0.4)"
                            : isCorrect
                            ? "#6ee7b7"
                            : "#c8c5ba",
                          fontSize: "0.7rem",
                          fontFamily: "monospace",
                          letterSpacing: "0.05em",
                          cursor: isGuessed ? "default" : "pointer",
                          opacity: isWrong ? 0.45 : 1,
                          transition: "background 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s",
                        }}
                      >
                        {letter}
                      </motion.button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* Wrong letters log */}
          {wrongGuesses.length > 0 && phase === "play" && (
            <p
              style={{
                fontSize: "0.65rem",
                color: "rgba(239,68,68,0.55)",
                letterSpacing: "0.12em",
                marginTop: "0.75rem",
              }}
            >
              ✗ {wrongGuesses.join("  ")}
            </p>
          )}
        </div>
      </div>

      {/* End states */}
      <AnimatePresence>
        {phase === "won" && (
          <motion.div
            key="won"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,10,14,0.88)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              gap: "2rem",
              padding: "1.5rem",
            }}
          >
            {/* Dancing Hangman - Left Side (aligned with game gallows position) */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="160" height="165" viewBox="0 0 160 165" style={{ color: "#6ee7b7" }}>
                {/* Dancing Figure - positioned at left where gallows pole is */}
                <motion.g
                  animate={{
                    rotate: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ originX: "20px", originY: "40px" }}
                >
                  {/* Head */}
                  <circle cx="25" cy="55" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Happy eyes */}
                  <path d="M19 51 L22 54 M22 51 L19 54" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M28 51 L31 54 M31 51 L28 54" stroke="currentColor" strokeWidth="1.5" />
                  {/* Smile */}
                  <path d="M18 61 Q25 67 32 61" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  {/* Body */}
                  <path d="M25 69 L25 96 L25 123" stroke="currentColor" strokeWidth="2" />
                  {/* Arms up cheering */}
                  <motion.path
                    d="M25 83 L10 68 M25 83 L40 68"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ duration: 0.35, repeat: Infinity }}
                    style={{ originX: "25px", originY: "83px" }}
                  />
                  {/* Legs dancing */}
                  <motion.path
                    d="M25 123 L10 143 M25 123 L40 143"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                    style={{ originX: "25px", originY: "123px" }}
                  />
                </motion.g>
              </svg>
            </motion.div>

            {/* Confetti stars */}
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -50 - Math.random() * 40],
                  x: [(Math.random() - 0.5) * 120],
                  scale: [0, 1, 0.5],
                }}
                transition={{ duration: 1.2, delay: i * 0.07, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  fontSize: "0.9rem",
                  pointerEvents: "none",
                }}
              >
                {["✦", "✧", "★", "·"][i % 4]}
              </motion.span>
            ))}

            {/* Text & Button - Right Side */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(110,231,183,0.6)",
                  margin: 0,
                }}
              >
                ✦ well done
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(200,197,186,0.5)",
                  letterSpacing: "0.08em",
                  margin: 0,
                }}
              >
                the key is revealed.
              </p>
              {/* Arrow button to access postcards */}
              <motion.button
                onClick={handleAccessPostcards}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginTop: "0.5rem",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "2px solid rgba(110,231,183,0.4)",
                  background: "rgba(110,231,183,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6ee7b7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
              <p
                style={{
                  fontSize: "0.6rem",
                  color: "rgba(110,231,183,0.4)",
                  letterSpacing: "0.1em",
                  margin: 0,
                }}
              >
                access postcards
              </p>
            </div>
          </motion.div>
        )}

        {phase === "lost" && (
          <motion.div
            key="lost"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,10,14,0.88)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              gap: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(239,68,68,0.6)",
              }}
            >
              ✗ access denied
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "rgba(200,197,186,0.4)",
                letterSpacing: "0.08em",
                margin: 0,
              }}
            >
              the key remains hidden.
            </p>
            <motion.button
              onClick={reset}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: "0.5rem",
                padding: "0.45rem 1.25rem",
                border: "1px solid rgba(239,68,68,0.25)",
                borderRadius: "6px",
                background: "rgba(239,68,68,0.06)",
                color: "#ef4444",
                fontFamily: "monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              try again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
