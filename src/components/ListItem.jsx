import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { images } from "../assets/assets";

const ListItem = () => {
  return (
    <div className=" w-[290px] sm:h-60 h-80 bg-main text-black relative border cursor-pointer group">
      <img src={images} alt="" className="w-full border sm:h-60 h-80 object-cover " />;
      <div className="text-white flex-col absolute sm:-top-[100%] -top-[68%] translate-y-96 group-hover:translate-y-0 group-hover:flex hidden   bg-main/90 backdrop-blur-sm transition-all gap-y-3 ">
        <img src={images} alt="" className="w-full sm:h-60 h-80 object-cover" />;
        <div className="px-2 flex flex-col gap-y-3 py-3">
          <div className="flex gap-x-3 items-center -mt-10 mb-2 ">
            <PlayArrow className="p-2 rounded-full hover:bg-white hover:text-main" sx={{ fontSize: "3.5rem", border: "2px solid white" }} />
            <Add className="p-2 rounded-full hover:bg-white hover:text-main" sx={{ fontSize: "3.5rem", border: "2px solid white" }} />
            <ThumbUpAltOutlined className="p-2 rounded-full hover:bg-white hover:text-main" sx={{ fontSize: "3.5rem", border: "2px solid white" }} />
            <ThumbDownAltOutlined
              className="p-2 rounded-full hover:bg-white hover:text-main"
              sx={{ fontSize: "3.5rem", border: "2px solid white" }}
            />
          </div>
          <div className=" flex items-center gap-x-3  text-lg font-semibold text-gray-400">
            <span className="">1 hour 12 mins</span>
            <span className="border p-1 py-0 " style={{ border: "1px solid gray" }}>
              +16
            </span>
            <span className="">2025</span>
          </div>
          <div className="text-xl ">Lorem ipsum dolor si Dolor necessitatibus sapiente quas pariatur dolores rerum, autem repellendus</div>
          <div className="text-xl text-gray-400 font-bold">action</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
