import './Projects.scss';

import donforgetLogo from '../images/donforgetLogo.png';
import donforget from '../images/donforget.gif';
import App_Schedule from '../images/App_Schedule.gif';
import getupmate from '../images/getupmate.gif';
import doremiLogo from '../images/doremiLogo.png';
import doremi from '../images/doremi.gif';
import repoissues from '../images/repoissues.gif';
import jsonlike from '../images/jsonlike.gif';

function Projects() {
  return (
    <div className="Projects">

      <div className="Project">
        <div className="Project-title">
          <img src={donforgetLogo} style={{ height: "1.8rem", margin: "5px 10px -5px 0" }} alt="donforgetLogo" />
          <strong>돈't forget</strong>
          <i className="Project-desc">경조사를 기록하여 쉽고 간편하게 관리할 수 있도록 도와주는 서비스</i>
        </div>
        <div className="Project-link">
          <span className="Project-link-label">GitHub</span> 👉 <a href="https://github.com/codestates/don-forget-client">https://github.com/codestates/don-forget-client</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="Project-link-label">YouTube</span> 👉 <a href="https://youtu.be/hFJh9bEbUsE">https://youtu.be/hFJh9bEbUsE</a>
        </div>
        <br />
        <div className="Project-img">
          <img src={donforget} alt="donforget" style={{ height: "20rem" }} />
          <img src={App_Schedule} alt="App_Schedule" style={{ height: "20rem" }} />
        </div>
      </div>

      <div className="Project">
        <div className="Project-title">
          <span style={{ height: "1.8rem", margin: "5px 10px -5px 0" }}>⏰</span>
          <strong>Get-Up-Mate</strong>
          <i className="Project-desc">기상시간을 공유하는 sns 서비스</i>
        </div>
        <div className="Project-link">
          <span className="Project-link-label">GitHub</span> 👉 <a href="https://github.com/codestates/getupmate-client">https://github.com/codestates/getupmate-client</a>
        </div>
        <br />
        <div className="Project-img">
          <img src={getupmate} alt="getupmate" style={{ height: "20rem" }} />
        </div>
      </div>

      <div className="Project">
        <div className="Project-title">
          <img src={doremiLogo} style={{ height: "1.8rem", margin: "5px 10px -5px 0" }} alt="donforgetLogo" />
          <strong>놀라운토요일 - 5분의 1초</strong>
          <i className="Project-desc">tvN 놀라운토요일 프로그램의 가사맞추기 게임 힌트판</i>
        </div>
        <div className="Project-link">
          <span className="Project-link-label">GitHub</span> 👉 <a href="https://github.com/hjnk125/doremi">https://github.com/hjnk125/doremi</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="Project-link-label">Try</span> 👉 <a href="http://doremi.s3-website.ap-northeast-2.amazonaws.com/">http://doremi.s3-website.ap-northeast-2.amazonaws.com/</a>
        </div>
        <br />
        <div className="Project-img">
          <img src={doremi} alt="doremi" style={{ height: "20rem" }} />
        </div>
      </div>

      <div className="Project">
        <div className="Project-title">
          <span style={{ height: "1.8rem", margin: "5px 10px -5px 0" }}>📰</span>
          <strong>Repo-Issues</strong>
          <i className="Project-desc">GitHub의 Public Repository의 Issue들을 모아 한눈에 볼 수 있는 어플리케이션</i>
        </div>
        <div className="Project-link">
          <span className="Project-link-label">GitHub</span> 👉 <a href="https://github.com/hjnk125/repo-issues">https://github.com/hjnk125/repo-issues</a>
        </div>
        <br />
        <div className="Project-img">
          <img src={repoissues} alt="repoissues" style={{ height: "20rem" }} />
        </div>
      </div>

      <div className="Project">
        <div className="Project-title">
          <span style={{ height: "1.8rem", margin: "5px 10px -5px 0" }}>📂</span>
          <strong>JSON-like</strong>
          <i className="Project-desc">JSON 객체를 편집할 수 있는 editor</i>
        </div>
        <div className="Project-link">
          <span className="Project-link-label">GitHub</span> 👉 <a href="https://github.com/hjnk125/json-like">https://github.com/hjnk125/json-like</a>
        </div>
        <br />
        <div className="Project-img">
          <img src={jsonlike} alt="jsonlike" style={{ height: "20rem" }} />
        </div>
      </div>


      <strong style={{ borderTop: "1px #ccc solid", marginTop: "1rem", paddingTop: "1rem", fontSize: "1.2rem" }}>⚒ 업데이트예정... ⚒</strong>

    </div>
  )
}

export default Projects;