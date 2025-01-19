import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

const ListItem = () => {
  return (
    <div className=" w-[290px] h-full bg-main text-black overflow-hidden cursor-pointer group">
      <img
        src="https://resizing.flixster.com/7pW-Wl_tjIUnlcPkLYudVsZS-00=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkYTQyZjkxLWZjYzItNGM5Yy1hN2FiLTA0YWQwMTAzNjVmZC5qcGc="
        alt=""
        className="w-full h-56 object-cover"
      />

      <div className="text-white px-2 py-2 flex flex-col gap-y-3 group-hover:-translate-x-[100%]">
        <div className=" flex gap-x-3 items-center">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className=" flex items-center gap-x-5">
          <span className="">1 hour 12 mins</span>
          <span className="">+16</span>
          <span className="">2025</span>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus sapiente quas pariatur dolores rerum, autem repellendus
        </div>
        <div className="">action</div>
      </div>
    </div>
  );
};

export default ListItem;
