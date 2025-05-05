import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );

  //   console.log("videoPlay", videoData);
  return (
    <section className="fixed bg-neutral-700/50 top-0 right-0 bottom-0 left-0 z-40 flex justify-center items-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded overflow-hidden relative">
        <button
          onClick={close}
          className="absolute right-0 top-0 cursor-pointer text-3xl"
        >
          <IoClose />
        </button>

        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoData?.results[0]?.key}`}
          className="w-full h-full"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
