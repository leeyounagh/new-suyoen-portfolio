import React, { useEffect, useRef, useState } from "react";
import "../styles/projectvideo.css";
import ValueShare from "../assets/valushare.mp4";
import SamSamFarm from "../assets/samsamfarm.mp4";
import HelloJeju from "../assets/헬로우제주.mp4";

export default function ProjectVideo({
  currentPage,
  isVideoLoaded,
  setIsVideoLoaded,
}) {
  const videoList = [ValueShare, SamSamFarm, HelloJeju];

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoList[currentPage];
    }
  }, [currentPage]);
  const handleVideoLoad = () => {
    // videoRef.current를 사용하여 비디오 요소에 접근합니다.
    setIsVideoLoaded(true);
  };

  return (
    <aside className="videoWrapper">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        ref={videoRef}
        onLoadedMetadata={handleVideoLoad}
      >
        {isVideoLoaded && (
          <source src={videoList[currentPage]} type="video/mp4" />
        )}
        {isVideoLoaded === false && <h2>로딩중..</h2>}
      </video>
    </aside>
  );
}
