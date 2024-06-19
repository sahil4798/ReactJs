"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const notify = () => {
    console.log("Clicked");

    toast.success("🦄 Clicked!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };

  return (
    <div>
      <button className="bg-black text-white p-5 rounded m-10" onClick={notify}>
        click me
      </button>
      <ToastContainer />
    </div>
  );
};

export default page;
