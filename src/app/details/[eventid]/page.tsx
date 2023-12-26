import Link from "next/link";
import React from "react";

const EventDetails = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-base mb-8">
          This is the placeholder page for event details!
        </p>
        <Link
          href="/"
          aria-label="go-to-home"
          className="flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-[#18181B] hover:bg-[#18181B]/90 text-white h-10 px-4 py-2"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
