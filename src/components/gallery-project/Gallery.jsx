import { use, useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Gallery = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(3);
  const [loader, setLoader] = useState(true);
  const getData = async () => {
    try {
      const response = await axios(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=16`,
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };
  let printData = null;

  if (loader) {
    printData = (
      <img
        className="w-[30px] h-[30px]"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_%28wobbly%29.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
      />
    );
  } else if (data.length > 0) {
    printData = data.map((elem, index) => {
      return <Card elem={elem} />;
    });
  }

  useEffect(
    function () {
      setLoader(true);
      getData();
    },
    [pageNumber],
  );

  return (
    <>
      <div className="gallery-section">
        <h2 className="text-[60px] font-bold text-center mb-2">
          Gallery Section
        </h2>
        <div className="galleryGrid flex flex-wrap gap-[30px] justify-center mb-[30px]">
          {printData}
        </div>
        <div className="pagination-btn flex gap-2 justify-center items-center">
          <span
            style={{ opacity: pageNumber > 1 ? 1 : 0.5 }}
            aria-disabled={pageNumber <= 1}
            className="bg-white !text-black p-2 rounded w-[140px] h-[46px] inline-flex justify-center items-center"
            onClick={() => {
              if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
                console.log("Clicked to Prev");
              } else {
                alert("asdasdasd");
              }
            }}
            role="button"
          >
            Prev
          </span>
          <span className="mx-6">{pageNumber}</span>
          <span
            className="bg-white !text-black p-2 rounded w-[140px] h-[46px] inline-flex justify-center items-center"
            onClick={() => {
              setPageNumber(pageNumber + 1);
              console.log("Clicked to next");
            }}
          >
            Next
          </span>
        </div>
      </div>
    </>
  );
};
export default Gallery;
