"use client";

import { useEffect, useState } from "react";

const Test = () => {
  const [test, setTest] = useState({ name: "huy" });

  const data = async () => {
    try {
      const res = await fetch("http://113.160.226.174:50003/api/auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ username: "huy", password: "huy20052001" }),
      });

      const data = await res.json();

      setTest(data);
    } catch (error) {
        alert(error)
    }
  };

  return (
    <div>
      test
      <p>
        <button onClick={data}>lick heaerre</button>
        {JSON.stringify(test)}
      </p>
    </div>
  );
};

export default Test;
