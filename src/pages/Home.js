import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { motion } from "framer-motion"
import Me from "../assets/Me.jpg";
import Slider from "../helpers/Carousel";
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import StorageIcon from '@mui/icons-material/Storage';


import { useInView } from "react-intersection-observer";



function Home() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 0.65, y: 50 }
  };




const openMailToLink = () => {
    window.open('mailto:jdtrabulo@gmail.com');
  };

  const handleSvgClick = (svgId) => {
    switch (svgId) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/joão-david-trabulo');
        break;
      case 'email':
        openMailToLink();
        break;
      case 'github':
        window.open('https://github.com/pcdell');
        break;
      default:
        break;
    }
  };


  return (
    <div className="home">
      <div className="about">
        <motion.div className="grid1"
          initial={{ opacity: 0, x: -50}}
          animate={{ opacity: 1, x: 0}}  
          transition={{ yoyo: Infinity, duration: 1, ease: "easeInOut", }}
          >
          <h4>Hi, my name is</h4>
          <h2>João Trabulo</h2>
            <div className="prompt">
              <p className="p1">
                <h3><span class="underline"></span>A Full stack developer with a passion for learning and creating.</h3>
              </p>
              <LinkedInIcon
              aria-label="Linkedin.com"
              onClick={() => handleSvgClick('linkedin')}
              />
              <EmailIcon
                aria-label="email"
                onClick={() => handleSvgClick('email')}
              />
              <GithubIcon
                aria-label="https://github.com/"
                onClick={() => handleSvgClick('github')}
              />
            </div>
          </motion.div>
        <motion.div className="grid2"
        initial={{ opacity: 0, x: 50}}
        animate={{ opacity: 1, x: 0}}  
        transition={{ yoyo: Infinity, duration: 1, ease: "easeInOut", }}>
          <img src={Me} alt={"Myself"}/>
        </motion.div>
      </div>

      <div className="project-display">
      <h2> Projects</h2>
      <Slider/>
      </div>

      <motion.div className="skills"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          exit="hidden"
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}>
        <h1> Skills</h1>
        <ol className="list">
        
        <li className="item">
            <h2>Programing Languages  <TerminalIcon></TerminalIcon></h2>
            <span>JavaScript, C, Python, PHP</span>
          </li>
          <li className="item">
          
            <h2> Front-End <WebIcon></WebIcon></h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, Django
            </span>
          </li>
          <li className="item">
            <h2>Back-End <SettingsInputComponentIcon></SettingsInputComponentIcon></h2>
            <span>
              Xampp, Apache, Django, NPM
            </span>
          </li>
          <li className="item">
            <h2>CI/CD <GithubIcon></GithubIcon></h2>
            <span>
              GitHub, GitLab, Docker
            </span>
          </li>
          <li className="item">
            <h2>Database Management <StorageIcon></StorageIcon></h2>
            <span>
              MySQL, postgreSQL, SQLite
            </span>
          </li>
        </ol>
      </motion.div>

      
    
    </div>
  );
}

export default Home;
