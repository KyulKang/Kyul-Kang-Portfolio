import React, { useRef } from 'react';

const About = () => {
  const aboutMe = useRef(null);
  const aboutSite = useRef(null);
  const contactMe = useRef(null);

  const handleOpen = (tab) => {
    switch (tab) {
      case 'about-me':
        aboutMe.current.classList.toggle('open');
        break;
      case 'about-site':
        aboutSite.current.classList.toggle('open');
        break;
      case 'contact-me':
        contactMe.current.classList.toggle('open');
        break;
    }
  };

  const handleClick = (e) => {
    let link = e.target.innerText;

    if (link) {
      link = link.includes('@') ? `mailto:${link}` : `https://www.${link}`;
      window.open(link);
    }
  };

  return (
    <section className="fixed flex justify-center items-center  w-full  h-screen z-[30]">
      <div id="about-container" className="w-fit h-fit">
        <div className="relative w-[75vw] max-w-[1000px] h-fit max-h-[70vh] text-[24px] overflow-box">
          <h1 className="text-center text-[40px]">About</h1>
          <p id="name" className="text-[24px]">
            Hi, I'm Kyul.
          </p>

          <button
            onClick={() => handleOpen('about-me')}
            className="text-[28px] font-medium hover:font-bold text-left"
          >
            ▸ Who am I?
          </button>

          <div className="desc" ref={aboutMe}>
            <p>
              I'm a software developer in New Jersey, living a stone's throw
              away from the Big Apple.
            </p>
            <p>
              I knew from a long time ago that I wanted to be a programmer. So,
              when my time in the Army was drawing to a close in 2022, I knew I
              had to take the plunge.
            </p>
            <p>
              I'm constantly educating myself on an array of new programming
              concepts and technologies to hone my capabilities. Developing web
              applications with sleek, interactive UI and robust functionalities
              is one such skill I'm practicing in.
            </p>
            <p>
              I'm always looking for ways to incorporate newfound knowledge into
              my growing list of projects.
            </p>
          </div>

          <button
            onClick={() => handleOpen('about-site')}
            className="text-[28px] font-medium hover:font-bold text-left"
          >
            ▸ Stack used for this web app
          </button>

          <div className="desc" ref={aboutSite}>
            <p>
              React - My bread and butter. React's modular nature makes it
              highly scalable for bigger projects, while letting it remain
              flexible to minute changes.
            </p>
            <p>
              tailwindcss - Introduces convenient shorthands for often used CSS
              styling. As with all inline coding, excessively using tailwind can
              lead to clutter, so using it in moderation is paramount in my
              opinion.
            </p>
          </div>

          <button
            onClick={() => handleOpen('contact-me')}
            className="text-[28px] font-medium hover:font-bold text-left"
          >
            ▸ Contact me
          </button>

          <div className="desc info" ref={contactMe}>
            <span>LinkedIn: </span>
            <button onClick={handleClick}>linkedin.com/in/kyul-kang</button>
            <br />
            <span>GitHub: </span>
            <button onClick={handleClick}>github.com/kyulkang</button>
            <br />
            <span>Email: </span>
            <button onClick={handleClick}>kyul.kang@protonmail.com</button>
            <br />
            <p className="text-[18px]">
              *Resume downloadable through the menu ↗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
