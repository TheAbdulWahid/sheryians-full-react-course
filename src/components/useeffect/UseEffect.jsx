import { useState } from "react";
import { useEffect } from "react";

const myUseEffect = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const aChanging = () => {
    console.log("A is changing");
  };
  const bChanging = () => {
    console.log("B is changing");
  };

  useEffect(()=>{
    aChanging()
  },[a])

  useEffect(
    function () {
      bChanging();
    },
    [b],
  );
  return (
    <div className="flex flex-col items-start gap-3">
      <h1>Value of A is {a}</h1>
      <h1>Value of B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
        className="bg-white !text-black text-[20px] p-[20px]"
      >
        Click to Change A
      </button>
      <button
        onClick={() => {
          setB(b + 1);
        }}
        className="bg-white !text-black text-[20px] p-[20px]"
      >
        Click to Change B
      </button>
    </div>
  );
};
export default myUseEffect;
