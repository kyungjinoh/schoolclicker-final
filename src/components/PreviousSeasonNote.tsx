import React from "react";

export const PreviousSeasonNote: React.FC = () => {
  return (
    <aside
      className="absolute bottom-3 left-3 z-20 w-[11.75rem] border border-sunleaf/70 bg-canopy-surface px-3 py-2.5 text-left sm:w-[14.5rem] sm:px-3.5 sm:py-3"
      aria-label="Previous season donation"
    >
      <p className="font-pixelify text-[11px] leading-none text-sunleaf sm:text-xs">Previous season</p>
      <p className="mt-1.5 font-pixelify text-sm font-bold leading-tight text-white text-balance sm:text-base">
        Lane Technical HS
      </p>
      <p className="mt-1 font-pingfang text-[11px] leading-snug text-white sm:text-xs">
        $250 donated in their name to BuildOn, to build a school.
      </p>
    </aside>
  );
};
