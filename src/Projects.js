import React, { useState } from "react";
import "./projects.css";
import coding from "./assets/coding.png";
import Tilt from "react-parallax-tilt";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Ecommerce Bitcoin Website",
      description: "Welcome to our cutting-edge e-commerce platform powered by React, JavaScript, and AJAX. With a focus on Bitcoin transactions, we offer a seamless and secure online shopping experience for cryptocurrency enthusiasts. Leveraging popular libraries like Ant Design (antd), we create visually stunning interfaces that are intuitive and user-friendly.",
      view: "https://prepaidfriends.netlify.app/",
    },
    {
      name: "To-do List Dashboard",
      description: "Introducing our state-of-the-art Todo List Dashboard, crafted using React, JavaScript, and Css. Seamlessly integrating a secure login gateway, our platform provides a personalized and efficient task management experience. With a user-friendly interface and intuitive design, our Todo List app enables you to organize and prioritize your tasks effortlessly. ",
      view: "https://dashboardtodo.netlify.app/",
    },
    {
      name: "Gallery App",
      description: "Built with React, Redux, JavaScript, and API integration, it offers a seamless experience to search for any item. Simply enter your query in the search box and watch as a stunning collection of relevant images unfolds before your eyes. Immerse yourself in a visual journey like never before with our powerful and user-friendly Gallery App.",
      view: "https://galleryapp-web.netlify.app/",
    },
    {
      name: "Whatapp Clone",
      description: "Experience seamless communication with our WhatsApp Clone App built using ReactJS, Redux, JavaScript, Firebase, and CSS. This powerful app replicates the features of WhatsApp, enabling you to chat, share media, and connect with friends and family in real-time.",
      view: "https://whatsapp-clone-b608b.web.app/",
    },
    {
      name: "Covid-19 tracker",
      description: "Developed using ReactJS, Redux, JavaScript, Firebase, and CSS, this powerful app provides real-time data on cases, recoveries, and fatalities. With an intuitive interface and secure Firebase integration, stay on top of the latest statistics and trends.",
      view: "https://covid-19-tracker-59515.web.app/",
    },
  ]);

  return (
    <div className="projects" id="projectss">
      <div className="projects-header">
        <img src={coding}></img>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Personal <span style={{ color: "orange" }}>Projects</span>
        </h1>
      </div>
      <div className="projects-content">
        {projects.map((data) => {
          return (
            <Tilt className="tiles">
              <h2 style={{}}>{data.name}</h2>
              <div style={{ width: "90%", margin: "auto" }}>
                {" "}
                <p
                  style={{
                    fontSize: "14px",
                    color: "white",
                    fontFamily:"inherit",
                    width: "100%",
                    textAlign: "justify",
                    wordSpacing: "4px"
                  }}
                >
                   {data.description}
                </p>
              </div>
              <a href={data.view} target="_blank">
                <button>View</button>
              </a>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
