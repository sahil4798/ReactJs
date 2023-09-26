import { json, useLoaderData } from "react-router-dom";

import ListsList from "../components/List/ListsList";

// const DUMMY_LIST = [
//   { words: ["a", "b"], id: "l1", title: "A", date: "01-9-2023" },
//   { words: ["c", "d"], id: "l2", title: "B", date: "02-9-2023" },
//   { words: ["e", "f"], id: "l3", title: "C", date: "03-9-2023" },
//   { words: ["g", "h"], id: "l4", title: "D", date: "04-9-2023" },
// ];

const Lists = () => {
  const lists = useLoaderData();
  return (
    <>
      <ListsList lists={lists}></ListsList>
    </>
  );
};

export const loader = async () => {
  const res = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists.json"
  );
  if (!res.ok) {
    // throw new Error("Can't fetch lists");
    throw json({ message: "Could not fetch lists!" }, { status: 500 });
  }

  const data = await res.json();
  const lists = [];

  for (const key in data) {
    lists.push({
      id: key,
      title: data[key].title,
      words: data[key].words,
      date: data[key].date,
    });
  }

  return lists;
};

export default Lists;
