import "../styles/career.css";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import animationData from "../data/38376-astronaut-planet-exploration.json";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function Career() {
  const [showBoard, setShowBoard] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowBoard(true);
    }, 1000);
  }, []);
  return (
    <div className="career-wrapper">
      {showBoard ? (
        <div className="board-wrapper">
          <motion.div
            className="career-board"
            initial={{ left: "-50%", top: "100%" }}
            animate={{
              left: "0%",
              top: "0%",
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <h1>Career</h1>
            <h2>
              Zara 명동 눈스퀘어 Stock 업무 & 매장 응대 업무 2022.06~2022.11
            </h2>
            <h2>스탠다드 모바일 검수 업무 2021.08~2022.02</h2>
            <h2>sy오토캐피탈 사무직 업무 2019.12~2020.12</h2>
            <h2>롯데닷컴 고객센터 업무 2018.12~2019.12</h2>
            <h2>(센터내 top3사원으로 뽑혀 이달의 우수사원 선정)</h2>
            <h2>오늘의집 고객지원팀 업무 2018.03~2018.10</h2>
          </motion.div>
          <motion.div
            className="License-board"
            initial={{ right: "-50%", top: "100%" }}
            animate={{
              right: "0%",
              top: "0%",
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <h1>License</h1>
            <h2>Jlpt 1급 2021.07</h2>
            <h2>sjpt Level. 5 2021.10</h2>
            <h2>Toeic 620점 2021.04</h2>
            <h2>컴퓨터 활용 능력 2급 2021.04</h2>
            <h2>DCS 항공 카운터 자격증 2019.07</h2>
            <h2>아시아나 세이버 예약 발권 자격증 2019.09</h2>
          </motion.div>
        </div>
      ) : (
        <Lottie options={defaultOptions} height={500} width={500} />
      )}
    </div>
  );
}

export default Career;
