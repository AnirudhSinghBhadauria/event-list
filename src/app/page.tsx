import EventCard from "@/components/event-card";
import SectionHeading from "@/components/section-heading";
import { getEventData } from "@/lib/home/get-event-data";

const Home = async () => {
  const { todaysEvents, upcomingEvents, weeksEvents } = await getEventData();

  return (
    <div className="w-full flex flex-row justify-center">
      <section className="wrapper w-full lg:max-w-[1100px] px-8 py-16">
        <div className="w-full max-w-[860px] flex m-auto flex-col items-center justify-center mb-16 mt-14">
          <p className="text-sm font-medium uppercase text-[#030711] mb-3 tracking-widest">
            Mark Your Calendars
          </p>
          <h1 className="text-4xl md:text-6xl leading-[1.275] text-center font-medium tracking-tighter mb-6">
            Keep up with must-attend tech events and the timeline
          </h1>
          <p className="text-[#4b5563] text-xl text-center">
            Today's events, this week's, and those upcoming!
          </p>
        </div>

        <SectionHeading
          headline="Today's Events"
          description="Join us for an exhilarating day filled with creativity!"
          type="today"
        />
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-5 mb-14 py-3 overflow-x-scroll space-x-3  scrollbar-track-transparent scrollbar-thumb-[#e5e7eb] scrollbar-thin event-scrollbar">
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
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-5 mb-14 py-3 overflow-x-scroll space-x-3 scrollbar-track-transparent scrollbar-thumb-[#e5e7eb] scrollbar-thin event-scrollbar">
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
        <div className="w-full flex flex-row items-center border-[0px] border-black mt-5 mb-14 py-3 overflow-x-scroll space-x-3 scrollbar-track-transparent scrollbar-thumb-[#e5e7eb] scrollbar-thin event-scrollbar">
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
