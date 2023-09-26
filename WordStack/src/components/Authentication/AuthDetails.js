import { useState, useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // console.log("Inside useEffect");
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      // console.log("Inside cleanup function");
      listen();
    };
  }, []);

  const signoutListner = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out successfully");
      })
      .catch(() => {
        console.log("signed out failed");
      });
  };

  return (
    <>
      <h1>Auth Details</h1>
      {authUser ? (
        <>
          <p>{`LoggedIn as ${authUser.email}`}</p>{" "}
          <button onClick={signoutListner}>Logout</button>{" "}
        </>
      ) : (
        <p>Signedout</p>
      )}
    </>
  );
};

export default AuthDetails;
