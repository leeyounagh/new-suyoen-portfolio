import React from "react";
import "../styles/projectdetail.css";
import projectDetailData from "../data/ProjectDetailData";
import { useParams } from "react-router-dom";
import ValueShare from "../assets/valueshare.mp4";
import SamSamFarm from "../assets/samsamfarm.mp4";
import HelloJeju from "../assets/헬로우제주.mp4";

export default function ProjectDetail() {
  const { projectId } = useParams();

  const videoData = [ValueShare, SamSamFarm, HelloJeju];

  return (
    <section className="projectdetail-wrapper">
      <main className="project-board">
        <aside className="video-wrapper">
          {videoData && projectId ? (
            <video className="background-video" controls muted>
              <source src={videoData[projectId]} type="video/mp4" />
            </video>
          ) : null}
        </aside>
        <aside className="desc-wrapper">
          <article className="desc-board">
            <h1>{projectDetailData && projectDetailData[projectId]?.title}</h1>
            <h2>- 주요기능 -</h2>
            {projectDetailData && projectDetailData[projectId]?.function}
            <h2>- 개인 성과및 trouble shooting -</h2>
            <h3>
              1.
              {projectDetailData &&
                projectDetailData[projectId]?.personalAchievement1Title}
            </h3>

            {projectDetailData &&
              projectDetailData[projectId]?.personalAchievement1}
            <h3>
              2.
              {projectDetailData &&
                projectDetailData[projectId]?.personalAchievement2Title}
            </h3>
            {projectDetailData &&
              projectDetailData[projectId]?.personalAchievement2}
            <h3>
              3.
              {projectDetailData &&
                projectDetailData[projectId]?.personalAchievement3Title}
            </h3>
            {projectDetailData &&
              projectDetailData[projectId]?.personalAchievement3}

            <h3>
              4.
              {projectDetailData &&
                projectDetailData[projectId]?.personalAchievement4Title}
            </h3>
            {projectDetailData &&
              projectDetailData[projectId]?.personalAchievement4}
            <h3>
              5.
              {projectDetailData &&
                projectDetailData[projectId]?.personalAchievement5Title}
            </h3>
            {projectDetailData &&
              projectDetailData[projectId]?.personalAchievement5}
          </article>
        </aside>
      </main>
    </section>
  );
}
