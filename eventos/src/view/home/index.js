import { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import EventCard from "../components/eventCard";

function Home() {
  return (
    <>
      <Navbar />

      <div className="row">
        <EventCard />
      </div>
    </>
  );
}

export default Home;
