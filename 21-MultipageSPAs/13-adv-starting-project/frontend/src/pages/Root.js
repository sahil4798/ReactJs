import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const Pages = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Pages;
