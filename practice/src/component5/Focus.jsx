import React, { useEffect, useRef } from "react";

const Focus = () => {
  let focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={focusRef} />
    </div>
  );
};

export default Focus;


