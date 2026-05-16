const Card = (props) => {
  return (
    <a
      href={props.elem.url}
      className="image-box flex items-center gap-2 flex-col w-[calc(25%-30px)]"
      key={props.index}
      target="_blank"
    >
      <img
        src={props.elem.download_url}
        alt=""
        className="h-[300px] object-cover w-[100%]"
      />
      <h3 className="text-bold text-[24px]">{props.elem.author}</h3>
    </a>
  );
};
export default Card;
