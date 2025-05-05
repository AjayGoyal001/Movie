import React, { useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingMovie = useSelector((state) => state.movieData.bannerData);
  const { data: nowPlaying } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popularTvShow } = useFetch("/tv/popular");
  const { data: onAirShow } = useFetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingMovie}
        heading={"Trending Show"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlaying}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={topRated}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={popularTvShow}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={onAirShow}
        heading={"On Air TV Show"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
