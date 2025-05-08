import React, { useMemo, useState } from "react";

const Memo = () => {
  const [no, setNo] = useState(10);
  const [toggle, setToggle] = useState(true);

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const primeCheck = useMemo(() => {
    return isPrime(Number(no));
  }, [no]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNo(e.target.value)}
        value={no}
      />
      <h2>{primeCheck ? "Prime Number" : "Not a Prime Number"}</h2>
      <h2>{toggle ? "Show" : "Hide"}</h2>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default Memo;
