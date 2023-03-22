"use client";

import { useEffect, useState } from "react";

const Test = () => {
    const [test, setTest ] = useState("123");
  useEffect(() => {
    const data = async () => {
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

      setTest(data)

    };

    data();
  }, []);
  return <div>test
    <p>
        {
            JSON.parse(test)
        }
    </p>
  </div>;
};

export default Test;
