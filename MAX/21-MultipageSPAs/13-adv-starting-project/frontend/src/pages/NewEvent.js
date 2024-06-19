import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

const NewEvent = () => {
  return (
    <>
      <h1>New Event</h1>
      <EventForm method="post" />
    </>
  );
};

export default NewEvent;

// export async function action({ request, params }) {
//   const data = await request.formData();
//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: request.method,
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });
//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: "Could not save event." }, { status: 500 });
//   } else {
//     return redirect("/events");
//   }
// }
