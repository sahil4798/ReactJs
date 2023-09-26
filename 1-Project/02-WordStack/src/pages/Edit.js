import { useRouteLoaderData } from "react-router-dom";

import ListForm from "../components/List/ListForm";

const Edit = () => {
  const data = useRouteLoaderData("list-detail");
  return <ListForm listData={data} method="patch" />;
};

export default Edit;
