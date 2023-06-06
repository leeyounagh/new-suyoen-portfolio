import React from "react";
import "../styles/projectdetail.css";
import projectDetailData from "../data/ProjectDetailData";
import { useParams } from "react-router-dom";
import ValueShare from "../assets/valushare.mp4";
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
            <h1 style={{ fontSize: "3.5rem" }}>
              {projectDetailData && projectDetailData[projectId]?.title}
            </h1>

            <div className="trouble-shooting">
              <h2>- 주요기능 -</h2>
              <div className="trouble-shooting-detail">
                {projectDetailData && projectDetailData[projectId]?.function}
              </div>
              <h2>- 개인 성과및 trouble shooting -</h2>
              <div className="trouble-shooting-detail">
                <h1>
                  1.
                  {projectDetailData &&
                    projectDetailData[projectId]?.personalAchievement1Title}
                </h1>
                <h2>문제상황</h2>
                <h3>
                  {projectDetailData &&
                    projectDetailData[projectId]?.personalAchievement1}
                </h3>
                <h2>해결방안</h2>

                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievementDesc1}
              </div>
              <div className="trouble-shooting-detail">
                <h1>
                  2.
                  {projectDetailData &&
                    projectDetailData[projectId]?.personalAchievement2Title}
                </h1>
                <h2>문제상황</h2>
                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievement2}

                <h2>해결방안</h2>
                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievementDesc2}
              </div>
              <div className="trouble-shooting-detail">
                <h1>
                  3.
                  {projectDetailData &&
                    projectDetailData[projectId]?.personalAchievement3Title}
                </h1>
                <h2>문제상황</h2>

                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievement3}
                <h2>해결방안</h2>
                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievementDesc3}
              </div>
              <div className="trouble-shooting-detail">
                <h1>
                  4.
                  {projectDetailData &&
                    projectDetailData[projectId]?.personalAchievement4Title}
                </h1>
                <h2>문제상황</h2>

                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievement4}
                <h2>해결방안</h2>
                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievementDesc4}
              </div>
              <div className="trouble-shooting-detail">
                <h1>
                  5.
                  {projectDetailData &&
                    projectDetailData[projectId]?.personalAchievement5Title}
                </h1>
                <h2>문제상황</h2>

                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievement5}
                <h2>해결방안</h2>
                {projectDetailData &&
                  projectDetailData[projectId]?.personalAchievementDesc5}
              </div>
            </div>
          </article>
        </aside>
      </main>
    </section>
  );
}
