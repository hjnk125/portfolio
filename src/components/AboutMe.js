import './AboutMe.scss';
import { Link } from "react-router-dom";

import Photo from './A-Photo';
import Skills from './A-Skills';
import MainProjects from './A-Projects';

function AboutMe() {

  return (
    <div className="AboutMe">

      <Photo />

      <h2>HOJUNG KIM</h2>
      <p>항상 새로운 배움에 도전하는 프론트엔드 개발자 김호정입니다.<br />실을 짜서 정교하고 아름다운 작품을 만드는 섬유미술처럼,<br />코드를 짜서 유저가 사용하고 싶은 서비스를 만듭니다.</p>

      <h3>SKILLS & TOOLS</h3>
      <Skills />

      <h3>PROJECTS<Link to="/projects" className="more-btn">more ‣</Link></h3>
      <MainProjects />

    </div>
  );
}

export default AboutMe;
