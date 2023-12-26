import Location from "@/lib/icons/location";
import Link from "next/link";
import React from "react";

const EventCard = ({
  name,
  description,
  date,
  location,
}: {
  name: string;
  description: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="flex flex-col justify-between min-w-fit rounded-xl border-[1px] event-card-global h-48">
      <div className="flex flex-row space-x-4 gap-4 items-start p-6">
        <div className="space-y-1 max-w-[232px]">
          <h3 className="text-base font-semibold leading-none tracking-tight text-[#09090B]">
            {name}
          </h3>
          <p className="text-sm text-[#71717a]">{description}</p>
        </div>
        <Link
          href="/"
          className="font-medium text-sm px-4 py-2 bg-[#F4f4f5] text-[#09090B] rounded-md flex flex-row hover:opacity-90 transition-all duration-300 ease-in-out"
          aria-label="placeholder-details-page"
        >
          More details
        </Link>
      </div>

      <div className="pt-0 p-6 space-x-4 flex flex-row items-center">
          {/* <Location /> */}
        <span className="flex flex-row items-center">
          <p className="text-sm ml-2">{location}</p>
        </span>
        <span className="flex flex-row items-center">
          <p className="text-sm ml-1">
            {new Date(date).toDateString().toString()}
          </p>
        </span>
      </div>
    </div>
  );
};

export default EventCard;
