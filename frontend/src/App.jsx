import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fatchData = async () => {
      try {
        await axios.get(`${url}/me`).then((res) => {
          setData(res.data.message);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fatchData();
  }, []);
  return (
    <div>
      <h1>Welcome {`${data}`}</h1>
    </div>
  );
}

export default App;
