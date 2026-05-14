import axios from "axios";
import { useState } from "react";
const Api = () => {
  const [mydata, setMyData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setMyData(response.data);
  };
  return (
    <>
      {mydata.map((elem, index) => {
        return <h3 key={index}>{elem.author}, {index+1}</h3>;
      })}
      <button onClick={getData} className="bg-white p-2 rounded !text-black">
        Click Me
      </button>
    </>
  );
};
export default Api;
