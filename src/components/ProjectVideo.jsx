import React, { useEffect, useRef, useState } from "react";
import "../styles/projectvideo.css";
import ValueShare from "../assets/valushare.mp4";
import SamSamFarm from "../assets/samsamfarm.mp4";
import HelloJeju from "../assets/헬로우제주.mp4";
import animationData from "../data/141572-space-boy-developer.json";
import Lottie from "react-lottie";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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
      </video>
      {isVideoLoaded === false && (
        <Lottie options={defaultOptions} height={500} width={500} />
      )}
    </aside>
  );
}
