import "../styles/project.css";
import { useEffect, useState } from "react";
import ProjectVideo from "../components/ProjectVideo";
import Lottie from "react-lottie";
import animationData from "../data/62102-space-soldier-on-rocket.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowImg from "../assets/arrow.svg";
import projectData from "../data/projectData";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function Project() {
  const [showBoard, setShowBoard] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // 페이징 처리
  useEffect(() => {
    setTimeout(() => {
      setShowBoard(true);
    }, 2000);
  }, []);
  console.log("테스트", isVideoLoaded);
  const pageController = (e) => {
    const { name } = e.target.dataset;
    setIsVideoLoaded(false);
    if (name === "next") {
      setCurrentPage((prev) => prev + 1);
    }
    if (name === "prev") {
      setCurrentPage((prev) => prev - 1);
    }
    if (name === "prev" && currentPage === 0) setCurrentPage(2);
    if (name === "next" && currentPage === 2) setCurrentPage(0);
  };
  return (
    <section className="project-wrapper">
      {showBoard ? (
        <motion.div
          className="board"
          initial={{ left: "-18%", top: "100%" }}
          animate={{
            left: "0%",
            top: "0%",
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <ProjectVideo
            currentPage={currentPage}
            isVideoLoaded={isVideoLoaded}
            setIsVideoLoaded={setIsVideoLoaded}
          />
          <aside className="project">
            {projectData && (
              <>
                <h1>{projectData[currentPage]?.title}</h1>
                <main className="project-desc">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    to={projectData[currentPage]?.link}
                  >
                    {projectData[currentPage]?.title} 바로가기..
                  </Link>
                  <h2>Position: {projectData[currentPage]?.position}</h2>
                  <h2>팀원구성: {projectData[currentPage]?.set}</h2>
                  <h2>사용언어: {projectData[currentPage]?.language}</h2>
                  <h2>제작기간: {projectData[currentPage]?.date}</h2>
                  <h3>서비스 소개:</h3>
                  <div>{projectData[currentPage]?.description}</div>
                  <div>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      to={projectData[currentPage]?.github}
                    >
                      {projectData[currentPage]?.title} 깃허브로 가기..
                    </Link>
                  </div>
                  <Link to={`/project/${projectData[currentPage]?.id}`}>
                    go to the Detail...
                  </Link>
                </main>
              </>
            )}

            <div className="page-icon">
              <img
                onClick={pageController}
                data-name="prev"
                src={ArrowImg}
              ></img>
              <img
                onClick={pageController}
                data-name="next"
                src={ArrowImg}
              ></img>
            </div>
          </aside>
        </motion.div>
      ) : (
        <Lottie options={defaultOptions} height={500} width={500} />
      )}
    </section>
  );
}

export default Project;
