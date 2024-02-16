"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  name: string;
  username: string;
  email: string;
}

const USER_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

const Fetcher = () => {
  const [data, setData] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(USER_ENDPOINT);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Fetcher;
