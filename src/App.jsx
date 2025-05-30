import React, { useContext, useEffect } from "react";
import Router from "./Router.jsx";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";
import { Type } from "./components/Utility/action.type.jsx";
import { auth } from "./components/Utility/firebase.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
