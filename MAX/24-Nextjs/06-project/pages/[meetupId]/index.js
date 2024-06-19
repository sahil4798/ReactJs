// ourDomain.com/:id

import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupInfo(props) {
  console.log(props);

  const meetup = {
    title: "Meetup title",
    address: "Meetup Adress",
    description: "Description of meetup place",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
  };
  const router = useRouter();
  const id = router.query.meetupId;

  return <MeetupDetail meetup={props.meetup} />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(content) {
  //fetch meetup place from server
  const meetupId = content.params.meetupId;

  return {
    props: {
      meetup: {
        id: meetupId,
        title: "Meetup title",
        address: "Meetup Adress",
        description: "Description of meetup place",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      },
    },
  };
}

export default MeetupInfo;
