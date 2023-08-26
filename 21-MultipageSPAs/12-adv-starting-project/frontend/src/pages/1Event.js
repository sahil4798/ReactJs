import { Link } from "react-router-dom";

const Dummy_Event = [
  { id: "e1", name: "Event-1" },
  { id: "e2", name: "Event-2" },
  { id: "e3", name: "Event-3" },
  { id: "e4", name: "Event-4" },
];

const Event = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {Dummy_Event.map((event) => (
          <li>
            {/* <Link to={`/events/${event.id}`}>{event.name}</Link> */}
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Event;
