import { Outlet } from "react-router-dom";
import ListsHeader from "../components/Header/ListsHeader";

const ListsRoot = () => {
  return (
    <>
      <ListsHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default ListsRoot;
