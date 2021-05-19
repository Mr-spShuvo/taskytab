import React, { useContext, useState } from 'react';

import githubIcon from '../assets/img/github-dark.png';
import googleIcon from '../assets/img/google.svg';
import logo from '../assets/img/taskytab-colorlogo.svg';
import heroLeft from '../assets/img/hero-left.png';
import heroRight from '../assets/img/hero-right.png';
import { AuthForm } from '../components';
import { AuthContext } from '../contexts';

const LandingPage = () => {
  const [formType, setFormType] = useState('login');
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

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
              <button
                className={`btn btn--lg ${formType === 'login' ? 'active' : ''}`}
                onClick={() => setFormType('login')}
              >
                Login
              </button>
              <button
                className={`btn btn--lg ${formType === 'signup' ? 'active' : ''}`}
                onClick={() => setFormType('signup')}
              >
                Signup
              </button>
              <AuthForm formType={formType} />
              <div className="landingPage__social">
                <span className="landingPage__socialTitle">Or Continue Using </span>
                <button
                  className="btn btn--lg btn--neutral"
                  onClick={signInWithGoogle}
                >
                  <img src={googleIcon} alt="google" />
                  Google
                </button>
                <button
                  className="btn btn--lg btn--neutral"
                  onClick={signInWithGithub}
                >
                  <img src={githubIcon} alt="github" />
                  Github
                </button>
              </div>
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
              . Available on &nbsp;
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

export default LandingPage;
