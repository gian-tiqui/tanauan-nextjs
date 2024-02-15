import axios from "axios";
import React from "react";

const Home = () => {
  const test = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      if (res.status === 200) {
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  test();

  return <div>hi</div>;
};

export default Home;
