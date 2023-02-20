import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ handleThemeChange }) {
  const [hidden, setHidden] = useState(true);
  const menu = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    document.addEventListener('click', closeMenu);
  }, []);

  const handleMenu = () => {
    setHidden(!hidden);
  };

  const closeMenu = (e) => {
    if (
      menu.current &&
      !menu.current.contains(e.target) &&
      !button.current.contains(e.target)
    ) {
      setHidden(true);
    }
  };

  const handleDownload = () => {
    fetch('./Kyul Kang Resume - Web.docx').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let dlLink = document.createElement('a');
        dlLink.href = fileURL;
        dlLink.download = './Kyul Kang Resume - Web.docx';
        dlLink.click();
      });
    });
  };

  return (
    <React.Fragment>
      <button
        onClick={handleMenu}
        id="menu-button"
        className="fixed right-5 top-5 z-[46]"
        ref={button}
      >
        <img src="./images/menu.png" className="w-[30px] h-[30px]" />
      </button>
      <div
        id="sidebar"
        className={`flex justify-center items-center fixed top-0 h-screen z-[45] ${
          hidden ? '' : 'unhidden'
        }`}
        ref={menu}
      >
        <div className="relative flex flex-col items-center w-[100%] text-[2.5em]">
          <Link to="/projects" onClick={handleMenu}>
            Projects
          </Link>
          <Link to="/about" onClick={handleMenu}>
            About
          </Link>
          <div className="flex flex-col items-center justify-items-center w-[160px]">
            <button onClick={handleDownload}>Resume</button>
            <span className="text-[16px] leading-[0]">(Download .docx)</span>
          </div>
          <div className="fixed flex items-center text-[0.6em] bottom-[3em]">
            <p className="opacity-75 relative mr-2">Change Themes: </p>
            <div className="flex flex-row items-center leading-[0.5em]">
              <button
                className="theme-button w-[3em] h-[1.5em] rounded-lg"
                onClick={() => {
                  handleThemeChange('water');
                }}
              >
                Dawn
              </button>
              <button
                className="theme-button w-[3em] h-[1.5em] rounded-lg"
                onClick={() => {
                  handleThemeChange('default');
                }}
              >
                Dusk
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
