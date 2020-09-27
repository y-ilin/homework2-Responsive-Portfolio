import React, { useEffect, useState } from "react";
import "./style.css";
import Project from "../Project";
import whiteboardStickyImg from "../../assets/WhiteboardSticky.png";
import weatherDashboardImg from "../../assets/WeatherDashboard.png";
import pfpImg from "../../assets/PersonalFitnessPlanner.png";
import workDaySchedulerImg from "../../assets/WorkDayScheduler.png";
import codingQuizImg from "../../assets/CodingQuiz.png";
import burgerImg from "../../assets/Burger.png";

const projectArray = [
    {
     deployedLink: "https://be-redy.herokuapp.com/whiteboard",
     img: whiteboardStickyImg,
     imgAlt: "Whiteboard Sticky app screenshot",
     projectTitle: "TEAM WHITEBOARD",
     projectDescription: "Whiteboarding solution for your team's brainstorming sessions.",
     githubLink: "https://github.com/y-ilin/be-redy",
     skills: ["Node.js", "Express.js", "Handlebars", "MySQL", "ORM"],
    },
    {
     deployedLink: "https://y-ilin.github.io/Weather-Dashboard/",
     img: weatherDashboardImg,
     imgAlt: "Weather Dashboard app screenshot",
     projectTitle: "WEATHER DASHBOARD",
     projectDescription: "Search the current and forecasted weather for any city.",
     githubLink: "https://github.com/y-ilin/Weather-Dashboard",
     skills: ["jQuery", "Responsive Layout", "Third Party API", "Local Storage"],
    },
    {
     deployedLink: "https://ben-j-st.github.io/projectOne---bootcamp/index.html",
     img: pfpImg,
     imgAlt: "Personal Fitness Planner app screenshot",
     projectTitle: "PERSONAL FITNESS PLANNER",
     projectDescription: "Receive and track your personalized fitness plan based on your preferences.",
     githubLink: "https://github.com/ben-j-st/projectOne---bootcamp",
     skills: ["jQuery", "Foundation CSS Framework", "API"],
    },
    {
     deployedLink: "https://y-ilin.github.io/Work-Day-Scheduler/",
     img: workDaySchedulerImg,
     imgAlt: "Work Day Scheduler app screenshot",
     projectTitle: "WORK DAY SCHEDULER",
     projectDescription: "Plan out events for each hour of your work day.",
     githubLink: "https://github.com/y-ilin/Work-Day-Scheduler",
     skills: ["Moment.js", "jQuery", "HTML", "CSS"],
    },
    {
     deployedLink: "https://y-ilin.github.io/Code-Quiz/",
     img: codingQuizImg,
     imgAlt: "Coding Quiz app screenshot",
     projectTitle: "CODE QUIZ",
     projectDescription: "Multiple-choice question quiz on JavaScript concepts.",
     githubLink: "https://github.com/y-ilin/Code-Quiz",
     skills: ["jQuery", "Local Storage"],
    },
    {
     deployedLink: "https://damp-lowlands-67480.herokuapp.com/",
     img: burgerImg,
     imgAlt: "Burger Tracker app screenshot",
     projectTitle: "BURGER TRACKER",
     projectDescription: "Track what burgers you've ordered / are ready / you've eaten",
     githubLink: "https://github.com/y-ilin/Node-Express-Handlebars",
     skills: ["Node.js", "Express.js", "Handlebars", "MySQL", "ORM"],
    },
]


function Projects(props) {
    const scrollTop = props.scrollTop;
    const [portfolioTitleStyle, setPortfolioTitleStyle] = useState({});

    // Fading in the "My Work" title when you scroll down
    useEffect(() => {
        console.log(scrollTop)
        if (scrollTop > 500) {
            setPortfolioTitleStyle({opacity: "100%"});
        } else if (scrollTop > 100) {
            setPortfolioTitleStyle({opacity: "0%"});
        } else {
            setPortfolioTitleStyle({opacity: "0%"});
        }  
    }, [scrollTop]);


  return (
    <>
        <div id="portfolioTitleContainer">
            <p id="portfolioTitle" style={portfolioTitleStyle}>My Work</p>
        </div>

        <div id="portfolioContainer">

            {projectArray.map(project => {
                return <Project
                    key={project.projectTitle}
                    deployedLink={project.deployedLink}
                    img={project.img}
                    imgAlt={project.imgAlt}
                    projectTitle={project.projectTitle}
                    projectDescription={project.projectDescription}
                    githubLink={project.githubLink}
                    skills={project.skills}
                />
            })}

        </div>
    </>
  );
}

export default Projects;
