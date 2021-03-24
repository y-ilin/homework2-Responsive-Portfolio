import React from "react";

import Nav from "../components/Nav/Nav";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import whiteboardStickyImg from "../assets/WhiteboardSticky.png";
import googleBooksSearchImg from "../assets/GoogleBooksSearch.png";
import onlineOfflineBudgetTrackerImg from "../assets/OnlineOfflineBudgetTracker.png";
import weatherDashboardImg from "../assets/WeatherDashboard.png";
import pfpImg from "../assets/PersonalFitnessPlanner.png";
import burgerImg from "../assets/Burger.png";

import "./Work.scss";

function Work() {
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
         deployedLink: "https://infinite-wildwood-82416.herokuapp.com/",
         img: googleBooksSearchImg,
         imgAlt: "Google Books Search app screenshot",
         projectTitle: "GOOGLE BOOKS SEARCH",
         projectDescription: "Search for books and save them for later",
         githubLink: "https://github.com/y-ilin/Google-Books-React-Search",
         skills: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose"],
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
         deployedLink: "https://safe-dusk-75030.herokuapp.com/",
         img: onlineOfflineBudgetTrackerImg,
         imgAlt: "Online-offline Budget Tracker app screenshot",
         projectTitle: "ONLINE-OFFLINE BUDGET TRACKER",
         projectDescription: "Track your budget even when you have no access to the internet",
         githubLink: "https://github.com/y-ilin/Online-Offline-Budget-Tracker",
         skills: ["indexedDB", "ServiceWorker", "Webmanifest", "MongoDB", "Mongoose"],
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
         deployedLink: "https://damp-lowlands-67480.herokuapp.com/",
         img: burgerImg,
         imgAlt: "Burger Tracker app screenshot",
         projectTitle: "BURGER TRACKER",
         projectDescription: "Track what burgers you've ordered / are ready / you've eaten",
         githubLink: "https://github.com/y-ilin/Node-Express-Handlebars",
         skills: ["Node.js", "Express.js", "Handlebars", "MySQL", "ORM"],
        },
    ];

    return (
        <div>
            <Nav />
            <div className="work__main-container">
                {projectArray.map(project => {
                    return <ProjectCard
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
        </div>
    );
  }


export default Work;
