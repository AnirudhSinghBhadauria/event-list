import BlueBaton from "@/lib/icons/blue-baton";
import GreenBaton from "@/lib/icons/green-baton";
import RedBaton from "@/lib/icons/red-baton";
import React from "react";

const SectionHeading = ({
  headline,
  description,
  type,
}: {
  headline: string;
  description: string;
  type: string;
}) => {
  let config;

  if (type === "today") {
    config = { element: <RedBaton />, color: "#FDE7E7" };
  } else if (type === "week") {
    config = { element: <BlueBaton />, color: "#E1E7F9" };
  } else {
    config = { element: <GreenBaton />, color: "#E3F8E7" };
  }

  return (
    <div className="flex flex-row space-x-4 items-center">
      <div
        style={{ backgroundColor: config.color }}
        className="h-12 w-12 rounded-full flex flex-row justify-center items-center"
      >
        {config.element}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-base leading-8 font-medium text-[#030711]">
          {headline}
        </p>
        <p className="text-base leading-8 font-medium text-[#4b5563]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
