import EventCard from "@/components/event-card";
import SectionHeading from "@/components/section-heading";
import { getEventData } from "@/lib/home/get-event-data";

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
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-7 mb-12 overflow-x-scroll space-x-3  scrollbar-track-transparent scrollbar-thumb-[#e5e7eb] scrollbar-thin event-scrollbar">
          {todaysEvents.map(({ id, name, date, description, location }) => (
            <EventCard
              key={id}
              id={id}
              name={name}
              date={date}
              description={description}
              location={location}
            />
          ))}
        </div>

        <SectionHeading
          headline="This Week's Events"
          description="This week promises an exciting array of experiences!"
          type="week"
        />
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-7 mb-12 overflow-x-scroll space-x-3 scrollbar-track-transparent scrollbar-thumb-[#e5e7eb] scrollbar-thin event-scrollbar">
          {weeksEvents.map(({ id, name, date, description, location }) => (
            <EventCard
              key={id}
              id={id}
              name={name}
              date={date}
              description={description}
              location={location}
            />
          ))}
        </div>
        <SectionHeading
          headline="Upcoming Events"
          description="Get ready for a lineup of captivating events on the horizon!"
          type="upcoming"
        />
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-7 overflow-x-scroll space-x-3 scrollbar-track-transparent scrollbar-thumb-[#e5e7eb] scrollbar-thin event-scrollbar">
          {upcomingEvents.map(({ id, name, date, description, location }) => (
            <EventCard
              key={id}
              id={id}
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
