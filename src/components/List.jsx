import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import ListItem from "./LIstItem";
import { useRef, useState } from "react";

const List = () => {
  const listRef = useRef();
  const [translateX, setTranslateX] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (listRef.current) {
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        setTranslateX(translateX + 230);
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        setTranslateX(translateX - 230);
      }
    } else {
      console.log("listRef.current is undefined");
    }
  };

  return (
    <div className="w-full mt-3">
      <span className="text-white text-2xl px-14  font-semibold">continue to watch</span>
      <div className="relative px-14 mt-5">
        <ArrowBackIosOutlined
          sx={{ width: "50px", height: "100%" }}
          className="bg-black/50 absolute cursor-pointer left-0 top-0 bottom-0 m-auto z-10"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="flex w-max gap-x-4" ref={listRef} style={{ transform: `translateX(${translateX}px)` }}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>

        <ArrowForwardIosOutlined
          sx={{ width: "50px", height: "100%" }}
          className="bg-black/50 absolute cursor-pointer right-0 top-0 bottom-0 m-auto z-10"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
