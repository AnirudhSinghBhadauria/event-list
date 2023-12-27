import { Event } from "@/utils/interfaces";

export const getEventData = async () => {
  const res = await fetch(`${process.env.NEXT_EVENT_DATA}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result: Event[] = await res.json();

  // filter this result array for today's events,
  // this week's events and upcoming events!

  // today;
  const todaysEvents = result.filter(
    ({ date }) => new Date(date).getDate() === new Date().getDate()
  );

  //upcoming;
  const lastDayOfWeek = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDay() + 6)
  );

  const upcomingEvents = result.filter(
    ({ date }) => new Date(date) > new Date(lastDayOfWeek)
  );

  // This week's events;
  const firstDayOfWeek = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDay())
  );

  const weeksEvents = result.filter(
    ({ date }) =>
      new Date(date) >= firstDayOfWeek &&
      new Date(date) <= lastDayOfWeek &&
      new Date().getDate() <= new Date(date).getDate() &&
      new Date().getDate() !== new Date(date).getDate()
  );

  return { todaysEvents, upcomingEvents, weeksEvents };
};
