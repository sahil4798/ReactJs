import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>Edit Event</h1>
      <EventForm event={data.event} method="patch"></EventForm>
    </>
  );
};

export default EditEvent;

// export async function action({ request, params }) {
//   const method = request.method;

//   const data = await request.formData();
//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };
//   let url = "http://localhost:8080/events";
//   console.log(method);

//   if (method === "PATCH") {
//     const eventId = params.eventId;
//     url = "http://localhost:8080/events/" + eventId;
//   }

//   const response = await fetch(url, {
//     method: method,
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     return json({ message: "Counld not edit Event " }, { status: 500 });
//   } else {
//     console.log("Successull");
//     return redirect("/events");
//   }
// }
