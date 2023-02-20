import React from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from 'typewriter-effect';

const MainPage = () => {
  return (
    <section className="fixed flex flex-col items-center h-screen w-full translate-y-[40vh] z-[30]">
      <ul id="main-content" className="flex flex-col  w-full text-[26px]">
        <li className="text-[30px]">Kyul Kang</li>
        <li>Software Engineer</li>
        <li>Web Developer</li>
        <li>
          <TypeWriter
            options={{
              strings: [
                'Self-directed Learner',
                'Innovator',
                'Learning Machine Learning',
                'Energy Drink Inhaler',
                'Roguelite Enthusiast',
              ],
              changeDelay: 2,
              changeDeleteSpeed: 3,
              pausefor: 10000,
              autoStart: true,
              loop: true,
            }}
          />
        </li>
      </ul>

      <button className="flex items-center justify-center w-fit h-fit mb-2 portfolio-link">
        <Link to="/projects" className="text-[28px] hover:font-bold">
          My Portfolio
        </Link>
      </button>
      <button className="flex items-center justify-center w-fit h-fit portfolio-link">
        <Link to="/about" className="text-[28px] hover:font-bold">
          About
        </Link>
      </button>
    </section>
  );
};

export default MainPage;
