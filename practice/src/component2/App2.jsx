import React, { useState } from "react";
import Greeting from "./Greeting";

const App2 = () => {
  return (
    <div>
      <Greeting name="John" timeOfDay="Morning" />
      <Greeting name="Sarah" timeOfDay="Afternoon" />
      <Greeting name="Alex" timeOfDay="Evening" />
    </div>
  );
};

export default App2;
