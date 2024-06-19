"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [maintasks, setMaintasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    // setMaintasks([...maintasks, { title, disc }]);
    setMaintasks((prevState) => {
      // console.log(prevState);
      return [...prevState, { title, disc }];
    });
    setTitle("");
    setDisc("");
    // console.log(maintasks);
  };

  const deleteHandler = (i) => {
    const temp = [...maintasks];
    temp.splice(i, 1);
    setMaintasks(temp);
  };

  let list = <h2>No tasks available</h2>;

  if (maintasks.length > 0) {
    list = maintasks.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-8">
          <div className="flex justify-between items-center w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medim">{t.disc}</h6>
          </div>
          <button
            className="bg-red-400 text-white rounded bolded px-4 py-2"
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-center font-bold text-5xl p-5">
        Sahil TODO List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800  border-4 m-8 px-4 py-2"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800  border-4 m-8 px-4 py-2"
          placeholder="Add description"
          value={disc}
          onChange={(e) => {
            setDisc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 rounded text-2xl font-bold m-5">
          add task
        </button>
      </form>

      <hr />

      <div className="bg-slate-200 p-8">
        <ul className="style-none">{list}</ul>
      </div>
    </>
  );
};

export default page;
