import React, { useState } from "react";
import Dashboard from "./Dashboard";

const LoginMessage = () => {
  const [isLogedin, setIslogedin] = useState(false);
  return (
    <div>
      <Dashboard isLogedin={isLogedin} setIslogedin={setIslogedin} />
    </div>
  );
};

export default LoginMessage;
