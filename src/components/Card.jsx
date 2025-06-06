import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-110 transition-all"
    >
      {data?.poster_path ? (
        <img src={imageURL + data?.poster_path} alt="" />
      ) : (
        <div className="bg-neutral-800 h-full w-full flex justify-center items-center">
          No Image Found
        </div>
      )}

      <div className="absolute top-2">
        {trending && (
          <div className="py-1 px-3 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>

      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>{moment(data.release_data).format("MMMM Do YYYY")}</p>
          <p className="bg-black p-1 pl-1.5 rounded-full text-xs text-white">
            Rating: {Number(data.vote_average).toFixed(1)}+
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
