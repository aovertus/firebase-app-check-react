import { useState, useEffect } from "react";
import firebase from "./firebaseConfig";

function HelloWorld() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const appCheckToken = await firebase.appCheck().getToken();
        console.log("appCheckToken", appCheckToken)
        setMessage(`Token: ${appCheckToken.token}`);
      } catch (error) {
        setMessage("An error occurred while fetching data.");
      }
    }

    fetchData();
  }, []);

  return <div>{message}</div>;
}

export default HelloWorld;

// https://console.firebase.google.com/u/0/project/kith-1835d/appcheck/products
// under alexandre.overtus@gmail.com
// KITH app
