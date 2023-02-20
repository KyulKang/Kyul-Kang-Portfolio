import React, { useState, useRef } from 'react';

const Description = ({ projectName }) => {
  const projectInfo = {
    graceShopper: {
      title: 'Grace Shopper',
      description:
        'An E-commerce web app with fully functional API and client-side interface for transaction. Built as part of the curriculum in Fullstack Academy.',
      link: 'https://grace-shopper-zuwc.onrender.com/',
    },
    fullFreak: {
      title: 'Fullfreak Games',
      description:
        'A collection of Pokemon-themed minigames built in PlayCanvas, each incorporating 3D assets and physics engine. Built as the capstone project for the curriculum in Fullstack Academy.',
      link: 'https://www.fullfreak.games/',
    },
    firefly: {
      title: 'Firefly',
      description:
        'A game that is autonomously played by AI controllers. The user can manually save the neural network for longest surviving player (Space key). When the game is restarted by refreshing the page, it uses the neural network to model the behavior of the next player generation.',
      link: 'https://fireflyml.onrender.com/',
    },
  };

  return (
    <>
      <h2 className="text-center text-[34px] mb-2">
        {projectInfo[projectName].title}
      </h2>
      <p className="text-center text-[24px] my-2">
        {projectInfo[projectName].description}
      </p>

      <div className="text-center">
        <span className="text-center text-[22px] tracking-wider">Link: </span>
        <button
          onClick={() => window.open(projectInfo[projectName].link)}
          className="text-[22px] underline hover:font-bold tracking-wider"
        >
          {projectInfo[projectName].link}
        </button>
      </div>
    </>
  );
};

const Projects = () => {
  const [projectDisplayed, setProject] = useState(null);
  const descriptionBox = useRef(null);

  const handleDisplay = ({ target }) => {
    setProject(target.id);
    descriptionBox.current.scrollTop = 0;
  };

  return (
    <section
      id="projects-page"
      className="flex absolute justify-center items-center  w-full  h-screen z-[30]"
    >
      <h1 className="absolute font-bold translate-x-[-50%] translate-y-[-50%] left-1/2 text-[2.5em]">
        Projects
      </h1>
      <div id="projects-container" className="w-fit h-fit rounded-l-[1em]">
        <div className="relative overflow-box w-[36.5vw] max-w-[1020px] h-[55vh]">
          <img
            id="graceShopper"
            className={
              projectDisplayed === 'graceShopper' ? 'opacity-100' : 'opacity-70'
            }
            onClick={handleDisplay}
            src="./images/grace-shopper.jpg"
          />
          <img
            id="fullFreak"
            className={
              projectDisplayed === 'fullFreak' ? 'opacity-100' : 'opacity-70'
            }
            onClick={handleDisplay}
            src="./images/fullfreak.jpg"
          />
          <img
            id="firefly"
            className={
              projectDisplayed === 'firefly' ? 'opacity-100' : 'opacity-70'
            }
            onClick={handleDisplay}
            src="./images/firefly.jpg"
          />
        </div>
      </div>
      <div id="project-description" className="w-fit h-fit rounded-r-[1em]">
        <div
          className="relative overflow-box w-[30vw] max-w-[900px] h-[55vh]"
          ref={descriptionBox}
        >
          {projectDisplayed ? (
            <Description projectName={projectDisplayed} />
          ) : (
            <p className="relative text-center text-[24px] top-[3vh]">
              Select a project to see its description!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
