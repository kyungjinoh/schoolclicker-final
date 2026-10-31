import React, { useEffect, useRef } from "react";

interface TributeLetterPopupProps {
  onClose: () => void;
}

export const TributeLetterPopup: React.FC<TributeLetterPopupProps> = ({ onClose }) => {
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
      className="fixed inset-0 z-[10002] flex items-center justify-center bg-canopy/85 px-4 py-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Tribute letter for Lane Technical High School"
        className="cause-popup relative max-h-[92dvh] w-full max-w-lg overflow-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close tribute letter"
          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-canopy text-white hover:bg-moss"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          </svg>
        </button>
        <img
          src="/tribute-letter.jpg"
          alt="BuildOn tribute letter: Lane Technical High School made a donation of $250 in honor of winning SchoolClicker Season 1."
          className="block w-full bg-white"
        />
      </div>
    </div>
  );
};
