import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const RootEvent = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default RootEvent;
