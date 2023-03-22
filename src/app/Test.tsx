"use client";

import { useEffect, useState } from "react";

const Test = () => {
  const [test, setTest] = useState({ name: "huy" });


  return (
    <div>
      test
      <p>
        {JSON.stringify(test)}
      </p>
    </div>
  );
};

export default Test;
