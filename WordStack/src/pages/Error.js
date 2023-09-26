import { useRouteError } from "react-router-dom";

import Header from "../components/Header/Header";

const Error = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Could not find requested page!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resourse or page!";
  }

  return (
    <>
      <Header></Header>
      <main style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
};

export default Error;
