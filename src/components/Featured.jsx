import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { genres } from "../assets/assets";

const Featured = ({ type }) => {
  return (
    <div className="h-[90vh] relative ">
      {type && (
        <div className="absolute top-28 left-16 flex items-center gap-x-2">
          <span className="text-3xl ml-2 text-white font-semibold">{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" className="cursor-pointer bg-main border border-white text-xl p-2 capitalize rounded-sm text-white">
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      )}

      <img
        src="https://images.pexels.com/photos/9143840/pexels-photo-9143840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="sm:w-[35%] absolute sm:left-14 left-10 w-[85%] bottom-28 flex flex-col text-white gap-y-6">
        <h1 className="text-8xl font-bold text-red-700 italic">Netflix</h1>
        <span className="mt-1 text-2xl font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius minus mollitia nesciunt provident fugiat itaque dolores? Autem aut
          nesciunt ipsum accusamus, aliquam nemo alias accusantium cupiditate, reiciendis, iusto totam.
        </span>
        <div className="flex gap-x-3">
          <button className="py-3 px-6 rounded-sm gap-x-2 cursor-pointer bg-white text-main flex items-center justify-center">
            <PlayArrow />
            <span className="text-xl font-semibold">Play</span>
          </button>
          <button className="py-3 px-6 rounded-sm text-xl gap-x-2 cursor-pointer bg-gray-600 text-white flex items-center justify-center">
            <InfoOutlined sx={{ fontSize: "1.7rem" }} />
            <span className="text-xl font-semibold">Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
