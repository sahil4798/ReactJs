import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event}></EventItem>
    </>
  );
};

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.eventId;
  // console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event!" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

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
