import React from 'react';

import githubIcon from '../assets/img/github-dark.png';
import logo from '../assets/img/taskytab-colorlogo.svg';
import heroLeft from '../assets/img/hero-left.png';
import heroRight from '../assets/img/hero-right.png';

const Login = () => {
  return (
    <div className="landingPage">
      <div className="landingPage__overlay">
        <div className="landingPage__content">
          <div className="landingPage__logo">
            <img src={logo} alt="Taskytab Logo" />
            <h1>TASKYTAB</h1>
            <h3>Do More, Do Better</h3>
          </div>
          <div className="landingPage__form">
            <div className="landingPage__tabs">
              <button className="btn btn--lg active">Login</button>
              <button className="btn btn--lg">Signup</button>
            </div>
          </div>
          <div className="landingPage__footer">
            <a
              href="https://github.com/Mr-spShuvo/taskytab"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="github" title="Taskytab Github" />
            </a>
            <p>
              Made with React + Firebase
              <br />
              &copy;&nbsp;
              <a href="https://spshuvo.com" target="_blank" rel="noreferrer">
                Mr.spShuvo
              </a>
              . Available on{' '}
              <a
                href="https://github.com/Mr-spShuvo/taskytab"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              .
            </p>
          </div>
          <img
            src={heroLeft}
            alt="Landing Page Hero"
            className="landingPage__hero landingPage__hero--left"
          />
          <img
            src={heroRight}
            alt="Landing Page Hero"
            className="landingPage__hero landingPage__hero--right"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
