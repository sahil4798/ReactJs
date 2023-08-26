import { Suspense } from "react";

import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Laoding...</p>}>
      {" "}
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // const data = useLoaderData();
  // const events = data.events;
  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const data = await response.json();
    // console.log(data);
    return data.events;
  }
}

export const loader = async () => {
  return defer({
    events: loadEvents(),
  });
};
