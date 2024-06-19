import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetup() {
  const onAddMeetupHandler = (newMeetup) => {
    console.log(newMeetup);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetup;
