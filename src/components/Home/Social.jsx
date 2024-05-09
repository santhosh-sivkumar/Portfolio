import React from "react";

const Social = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/santhoshsivkumar/",
      iconClass: "uil uil-instagram",
    },
    {
      href: "https://dribbble.com/santhosh-sivkumar",
      iconClass: "uil uil-dribbble",
    },
    {
      href: "https://github.com/santhosh-sivkumar",
      iconClass: "uil uil-github-alt",
    },
  ];

  return (
    <div className="home__social">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.iconClass}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
