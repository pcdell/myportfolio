import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { motion } from "framer-motion"
import Me from "../assets/Me.jpg";

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
          <h2>João Tabulo</h2>
            <div className="prompt">
              <p>
                <h3><span class="underline"></span>A Frontend developer with a passion for learning and creating.</h3>
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
      <motion.div className="skills"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          exit="hidden"
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}>
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, NPM, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Xampp, phpMyAdmin, .NET, MySQL, MS SQL, Apache
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C#, C</span>
          </li>
        </ol>
      </motion.div>
    </div>
  );
}

export default Home;
