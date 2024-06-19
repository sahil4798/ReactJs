import { Suspense } from "react";

import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetail = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Laoding...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
  );
};

export default EventDetail;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event!" },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
}

export const loader = async (request, params) => {
  const id = params.eventId;
  return defer({
    events: loadEvents(),
    event: loadEvent(id),
  });
};

export async function action({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
