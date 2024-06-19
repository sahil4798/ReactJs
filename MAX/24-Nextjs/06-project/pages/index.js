// // ourDomain.com/

import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "First Meetup",
    Adress: "Adress of First Meetup",
    description: "There are various Meetup Location there.",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Second Meetup",
    Adress: "Adress of Second Meetup",
    description: "There are various Meetup Location there.",
  },
  {
    id: "m3",
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Third Meetup",
    Adress: "Adress of Third Meetup",
    description: "There are various Meetup Location there.",
  },
];

function HomePage(props) {
  // const [loadedMeetup, setLoadedMeetup] = useState([]);
  // useEffect(() => {
  //   //request for array of meetup from server
  //   setLoadedMeetup(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //request for array of meetup from server
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //request for array of meetup from server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
