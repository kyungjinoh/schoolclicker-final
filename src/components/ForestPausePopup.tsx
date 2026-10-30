import React, { useEffect, useRef } from "react";
import { GREENPEACE_DONATE_URL } from "../season";

interface ForestPausePopupProps {
  clicks: number;
  onClose: () => void;
}

export const ForestPausePopup: React.FC<ForestPausePopupProps> = ({ clicks, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // Mount-only: onClose is read through a ref so parent rerenders don't steal focus.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-canopy/85 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="forest-pause-title"
        aria-describedby="forest-pause-body"
        className="cause-popup relative w-full max-w-sm border-2 border-sunleaf bg-canopy-surface px-6 pb-6 pt-8 text-center shadow-[0_24px_40px_oklch(0.08_0.02_145/0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white hover:bg-white/10"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          </svg>
        </button>

        <svg className="mx-auto mb-3 h-10 w-10 text-sunleaf" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <path d="M24 6c8 6 16 10 16 20 0 8-6 14-14 16-2-6-2-10-6-14-4 4-4 8-6 14C8 40 4 34 4 26 4 16 14 12 24 6z" />
          <path d="M24 18c0 8 0 14 2 22" fill="none" stroke="#0a1a12" strokeWidth="2" />
        </svg>

        <p className="font-pixelify text-sm text-sunleaf">{clicks.toLocaleString()} clicks</p>
        <h2 id="forest-pause-title" className="mt-1 font-pixelify text-3xl font-bold leading-tight text-white text-balance">
          The trees get a turn.
        </h2>
        <p id="forest-pause-body" className="mx-auto mt-3 max-w-[34ch] font-pingfang text-sm leading-relaxed text-white">
          Your school is still racing for the $250. This pause is for forests. Greenpeace protects them — give if you can, then come back and keep clicking.
        </p>

        <a
          href={GREENPEACE_DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-sunleaf font-pixelify text-lg text-canopy hover:bg-white"
        >
          Donate to protect forests
        </a>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 font-pixelify text-sm text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          Keep clicking
        </button>
      </div>
    </div>
  );
};
