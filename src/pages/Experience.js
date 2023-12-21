import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SportsMartialArtsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            KarateMaia Karate Club
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maia Karate Club
          </h4>
          <p> Black belt at Karate</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SportsSoccerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Football
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ermesinde Sport Clube
          </h4>
          <p>Played as a attacking midfielder and a winger</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Instituto Superior de Engenharia do Porto (ISEP)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Eletrical and Computer Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan2022 - July2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Speed of Ligth
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Porto
          </h4>
          <p>Developed a website for the company</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April2023 - Oct2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kempinski Hotel San Lawrenz Malta
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gozo, Malta
          </h4>
          <p>
            Bartender and Waiter
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
