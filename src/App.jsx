import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./redux/slices/movieSlice";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/day");
      dispatch(setBannerData(response.data.results));

      // console.log("response", response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));

      // console.log("Configuration data", response.data.images.secure_base_url+"original");
    } catch (error) {}
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <div className="pb-14 lg:pb-0">
      <Header />

      <div className="min-h-[55vh]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:explore" element={<ExplorePage />}></Route>
          <Route path="/:explore/:id" element={<DetailsPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </div>

      <Footer />
      <MobileNavigation />
    </div>
  );
}

export default App;
