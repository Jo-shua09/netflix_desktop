import { ArrowBackOutlined } from "@mui/icons-material";

const Watch = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex z-30 text-2xl items-center absolute top-3 left-3 text-white cursor-pointer ">
        <ArrowBackOutlined sx={{ fontSize: "1.5rem" }} /> home
      </div>
      <video src="" autoPlay progress controls className="w-full h-full object-cover"></video>
    </div>
  );
};

export default Watch;
