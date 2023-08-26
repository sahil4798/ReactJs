import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import UseHtpp from "../../hooks/use-http";

const NewTask = (props) => {
  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };
  const { isLoading, error, sendRequest: sendTaskRequest } = UseHtpp();

  const enterTaskHandler = (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-5f152-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: props.taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
