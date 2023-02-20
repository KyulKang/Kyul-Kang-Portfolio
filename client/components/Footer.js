import React from 'react';

function Footer() {
  const links = [
    ['./images/linkedin.png', 'linkedin.com/in/kyul-kang'],
    ['./images/github.png', 'github.com/kyulkang'],
    ['./images/email.png', 'kyul.kang@protonmail.com'],
  ];

  const handleClick = (e) => {
    let link = e.target.innerText;

    if (link) {
      link = link.includes('@') ? `mailto:${link}` : `https://www.${link}`;
      window.open(link);
    }
  };

  return (
    <div
      id="footer-container"
      className="fixed bottom-0  w-full max-w-[730px] z-[35] overflow-hidden left-1/2 translate-x-[-50%]"
    >
      <div id="footer" className="w-fit justify-center items-center">
        {[...Array(6)].map((elem, i) => (
          <span key={i} onClick={handleClick}>
            <img src={links[i % 3][0]} />
            {links[i % 3][1]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Footer;
