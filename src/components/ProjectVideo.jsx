import React, { useEffect, useRef, useState } from "react";
import "../styles/projectvideo.css";
import ValueShare from "../assets/valueshare.mp4";
import SamSamFarm from "../assets/samsamfarm.mp4";
import HelloJeju from "../assets/헬로우제주.mp4";

export default function ProjectVideo({ currentPage }) {
  const videoList = [ValueShare, SamSamFarm, HelloJeju];

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = videoList[currentPage];
  }, [currentPage]);

  return (
    <aside className="videoWrapper">
      <video className="background-video" autoPlay loop muted ref={videoRef}>
        <source src={videoList[currentPage]} type="video/mp4" />
      </video>
    </aside>
  );
}
