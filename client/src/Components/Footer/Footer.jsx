import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white mt-10">
      <div className="flex justify-around">
        <a
          href="#"
          className="text-gray-300 hover:text-white"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <span className="ml-2">Twitter</span>
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white"
          aria-label="Contact Me"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <span className="ml-2">Contact Me</span>
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span className="ml-2">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
