import { Event } from "@/utils/interfaces";

export const getEventData = async () => {
  const res = await fetch(`${process.env.NEXT_EVENT_DATA}`, {
    cache: "force-cache",
  });
  const result: Event[] = await res.json();

  // filter this result array for today's events, this weeks events and upcoming events!

  // today;
  let todaysEvents = result.filter(
    ({ date }) => new Date(date).getDate() === new Date().getDate()
  );

  //upcoming;
  const lastDayOfWeek = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDay() + 6)
  );

  let upcomingEvents = result.filter(
    ({ date }) => new Date(date) > new Date(lastDayOfWeek)
  );

  // This week's events;
  const firstDayOfWeek = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDay())
  );

  let weeksEvents = result.filter(
    ({ date }) =>
      new Date(date) >= firstDayOfWeek &&
      new Date(date) <= lastDayOfWeek &&
      new Date().getDate() !== new Date(date).getDate()
  );

  return { todaysEvents, upcomingEvents, weeksEvents };
};
