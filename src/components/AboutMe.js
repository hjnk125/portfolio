import './AboutMe.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";

import Photo from './A-Photo';
import Skills from './A-Skills';

import getupmate from '../images/getupmate.gif';
import donforget from '../images/donforget.gif';
import doremi from '../images/doremi.gif';
import { useState } from 'react';

function AboutMe() {
  const [mainProjects] = useState([
    {
      title: "getupmate",
      img: getupmate,
      github: "https://github.com/codestates/getupmate-client"
    },
    {
      title: "don-forget",
      img: donforget,
      github: "https://github.com/codestates/don-forget-client"
    },
    {
      title: "doremi",
      img: doremi,
      github: "https://github.com/hjnk125/doremi"
    }
  ])

  return (
    <div className="AboutMe">
      <Photo />

      <h2>HOJUNG KIM</h2>
      <p>항상 새로운 배움에 도전하는 프론트엔드 개발자 김호정입니다.<br />실을 짜서 정교하고 아름다운 작품을 만드는 섬유미술처럼,<br />코드를 짜서 유저가 사용하고 싶은 서비스를 만듭니다.</p>

      <h3>SKILLS & TOOLS</h3>
      <Skills />

      <h3>PROJECTS<Link to="/projects" className="more-btn">more ‣</Link></h3>
      <div className="Main-Projects">
        {mainProjects.map((project) => {
          return (
            <div className="Main-Projects-content">
              <img src={project.img} alt={project.title} />
              <div>{project.title}</div>
              <button onClick={() => window.open(project.github)}>GitHub ‣</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AboutMe;
