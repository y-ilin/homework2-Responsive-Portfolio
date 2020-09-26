import React from "react";
import "./style.css";
import whiteboardStickyImg from "../../assets/WhiteboardSticky.png";
import weatherDashboardImg from "../../assets/WeatherDashboard.png";
import pfpImg from "../../assets/PersonalFitnessPlanner.png";
import workDaySchedulerImg from "../../assets/WorkDayScheduler.png";
import codingQuizImg from "../../assets/CodingQuiz.png";
import burgerImg from "../../assets/Burger.png";


function Projects() {
  
  return (
    // <!----------- Start of Portfolio Container ---------->
    <>
        <div id="portfolioTitleContainer">
            <p id="portfolioTitle">My Work</p>
        </div>

        <div id="portfolioContainer">
            {/* <!-- Whiteboard Sticky app card --> */}
            <div className="projectCard">
                <a
                href="https://be-redy.herokuapp.com/whiteboard"
                target="blank"
                className="portfolioImgLink"
                >
                <img
                    src={whiteboardStickyImg}
                    alt="Whiteboard Sticky app screenshot"
                    className="portfolioImg"
                />
                <p className="viewApp">Go to app →</p>
                </a>
                <p className="projectTitle">TEAM WHITEBOARD</p>
                <p>Whiteboarding solution for your team's brainstorming sessions.</p>
                <div className="projectLinkBadgeDiv">
                <a
                    href="https://github.com/y-ilin/be-redy"
                    target="blank"
                    className="projectLink"
                    >Link to repo →</a
                >
                </div>
            </div>
            {/* <!-- Weather Dashboard app card --> */}
            <div className="projectCard">
                <a
                href="https://y-ilin.github.io/Weather-Dashboard/"
                target="blank"
                className="portfolioImgLink"
                >
                <img
                    src={weatherDashboardImg}
                    alt="Weather Dashboard app screenshot"
                    className="portfolioImg"
                />
                <p className="viewApp">Go to app →</p>
                </a>
                <p className="projectTitle">WEATHER DASHBOARD</p>
                <p>Search the current and forecasted weather for any city.</p>
                <a
                href="https://github.com/y-ilin/Weather-Dashboard"
                target="blank"
                className="projectLink"
                >Link to repo →</a
                >
            </div>
            {/* <!-- Personal Fitness Planner app card --> */}
            <div className="projectCard">
                <a
                href="https://ben-j-st.github.io/projectOne---bootcamp/index.html"
                target="blank"
                className="portfolioImgLink"
                >
                <img
                    src={pfpImg}
                    alt="Personal Fitness Planner app screenshot"
                    className="portfolioImg"
                />
                <p className="viewApp">Go to app →</p>
                </a>
                <p className="projectTitle">PERSONAL FITNESS PLANNER</p>
                <p>
                Receive and track your personalized fitness plan based on your
                preferences.
                </p>
                <a
                href="https://github.com/ben-j-st/projectOne---bootcamp"
                target="blank"
                className="projectLink"
                >Link to repo →
                </a>
            </div>
            {/* <!-- Work Day Scheduler app card --> */}
            <div className="projectCard">
                <a
                href="https://y-ilin.github.io/Work-Day-Scheduler/"
                target="blank"
                className="portfolioImgLink"
                >
                <img
                    src={workDaySchedulerImg}
                    alt="Work Day Scheduler app screenshot"
                    className="portfolioImg"
                />
                <p className="viewApp">Go to app →</p>
                </a>
                <p className="projectTitle">WORK DAY SCHEDULER</p>
                <p>Plan out events for each hour of your work day.</p>
                <a
                href="https://github.com/y-ilin/Work-Day-Scheduler"
                target="blank"
                className="projectLink"
                >Link to repo →
                </a>
            </div>
            {/* <!-- Code Quiz app card --> */}
            <div className="projectCard">
                <a
                href="https://y-ilin.github.io/Code-Quiz/"
                target="blank"
                className="portfolioImgLink"
                >
                <img
                    src={codingQuizImg}
                    alt="Coding Quiz app screenshot"
                    className="portfolioImg"
                />
                <p className="viewApp">Go to app →</p>
                </a>
                <p className="projectTitle">CODE QUIZ</p>
                <p>Multiple-choice question quiz on JavaScript concepts.</p>
                <a
                href="https://github.com/y-ilin/Code-Quiz"
                target="blank"
                className="projectLink"
                >Link to repo →
                </a>
            </div>
            {/* <!-- Burger app card --> */}
            <div className="projectCard">
                <a
                href="https://damp-lowlands-67480.herokuapp.com/"
                target="blank"
                className="portfolioImgLink"
                >
                <img
                    src={burgerImg}
                    alt="Burger Tracker app screenshot"
                    className="portfolioImg"
                />
                <p className="viewApp">Go to app →</p>
                </a>
                <p className="projectTitle">BURGER TRACKER</p>
                <p>Track what burgers you've ordered / are ready / you've eaten</p>
                <a
                href="https://github.com/y-ilin/Node-Express-Handlebars"
                target="blank"
                className="projectLink"
                >Link to repo →
                </a>
            </div>
        </div>
    </>
  );
    {/* // <!-------------- End Portfolio Container -------------> */}

}


export default Projects;
