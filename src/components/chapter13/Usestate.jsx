import { useState } from "react";
const MyUseState = () => {
  const [inputVal, setInputVal] = useState('');
  const formSubmitted = (e) => {
    return setInputVal(e.target.value);
  };
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        setInputVal('')
      }}>
        <input
          type="text"
          placeholder="Type your Name"
          className="border-black border-2 p-2 m-2"
          value={inputVal}
          onChange={(e)=>{
            setInputVal(e.target.value)
          }}
        />
        <button className="bg-amber-200 p-2">Submit</button>
      </form>
    </div>
  );
};
export default MyUseState;
