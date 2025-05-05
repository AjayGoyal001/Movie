import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";
import VideoPlay from "../components/VideoPlay";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendedData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  // console.log("data", data);
  // console.log("cast", castData);

  const handlePlayVideo = () => {
    setPlayVideoId(data);
    setPlayVideo(true);
  };

  return (
    <div className="pb-5">
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="h-full w-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto ml-6 px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-3 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-60 object-cover rounded"
          />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg cursor-pointer hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Play Now
          </button>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center gap-3">
            <p>
              <span className="text-white">Rating</span>:{" "}
              {Number(data?.vote_average).toFixed(1)}
            </p>
            <span>|</span>
            <p>
              <span className="text-white">View</span>:{" "}
              {Number(data?.vote_count)}
            </p>
            <span>|</span>
            <p>
              <span className="text-white">Duration</span>: {duration[0]}h{" "}
              {duration[1]}m
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              <span className="underline">Overview</span> :
            </h3>
            <p>{data?.overview}</p>

            <Divider />

            <div className="flex items-center gap-2 mt-3">
              <p>
                <span className="text-white">Status</span>: {data?.status}
              </p>
              <span>|</span>
              <p>
                <span className="text-white">Released Date</span>:{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>
                <span className="text-white">Revenue</span>: {data?.revenue}
              </p>
            </div>

            <Divider />
          </div>

          <div>
            <p>
              <span className="text-white">Director</span>:{" "}
              {castData?.crew[1]?.name}
            </p>
            <p>
              <span className="text-white">Writer</span>:{" "}
              {castData?.crew[0]?.name}
            </p>
          </div>
          <Divider />

          <h2 className="font-bold text-lg lg:text-2xl mb-3 text-white">
            <span className="underline">Cast</span> :
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {castData?.cast
              ?.filter((e) => e?.profile_path)
              ?.map((cast, index) => {
                return (
                  <div key={cast.id + "castData" + index}>
                    <div>
                      <img
                        src={imageURL + cast?.profile_path}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    <p className="font-bold text-center text-sm text-neutral-400">
                      {cast?.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard
          data={similarData}
          heading={"Similar " + params?.explore}
          media_type={params?.explore}
        />

        <HorizontalScrollCard
          data={recommendedData}
          heading={"Recommended " + params?.explore}
          media_type={params?.explore}
        />
      </div>

      {playVideo && (
        <VideoPlay
          data={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={params?.explore}
        />
      )}
    </div>
  );
};

export default DetailsPage;
