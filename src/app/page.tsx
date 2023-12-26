import EventCard from "@/components/event-card";
import SectionHeading from "@/components/section-heading";
import { getEventData } from "@/lib/home/get-event-data";
import { Event } from "@/utils/interfaces";
import { Fragment } from "react";

const Home = async () => {
  const { todaysEvents, upcomingEvents, weeksEvents } = await getEventData();

  return (
    <div className="w-full flex flex-row justify-center">
      <section className="wrapper w-full lg:max-w-[1100px] px-8 py-16 border-[0px] border-black">
        <SectionHeading
          headline="Today's Events"
          description="Join us for an exhilarating day filled with creativity!"
          type="today"
        />
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-7 overflow-x-scroll space-x-3">
          {todaysEvents.map(({ id, name, date, description, location }) => (
            <EventCard
              key={id}
              name={name}
              date={date}
              description={description}
              location={location}
            />
          ))}
        </div>
        <br />
        <br />
        <SectionHeading
          headline="This Week's Events"
          description="This week promises an exciting array of experiences!"
          type="week"
        />
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-7 overflow-x-scroll space-x-3">
          {weeksEvents.map(({ id, name, date, description, location }) => (
            <EventCard
              key={id}
              name={name}
              date={date}
              description={description}
              location={location}
            />
          ))}
        </div>
        <br />
        <br />
        <SectionHeading
          headline="Upcoming Events"
          description="Get ready for a lineup of captivating events on the horizon!"
          type="upcoming"
        />
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-7 overflow-x-scroll space-x-3">
          {upcomingEvents.map(({ id, name, date, description, location }) => (
            <EventCard
              key={id}
              name={name}
              date={date}
              description={description}
              location={location}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
