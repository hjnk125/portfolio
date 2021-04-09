import './Projects.scss';

import donforgetLogo from '../images/logo.png';
import donforget from '../images/donforget.gif';
import App_Schedule from '../images/App_Schedule.gif';
import getupmate from '../images/getupmate.gif';
import doremi from '../images/doremi.gif';
import { useState } from 'react';

function Projects() {
  const [mainProjects] = useState([
    {
      title: "Get-Up-Mate",
      type: "(team project)",
      img: getupmate,
      github: "https://github.com/codestates/getupmate-client"
    },
    {
      title: "don-forget",
      type: "(team project)",
      img: donforget,
      github: "https://github.com/codestates/don-forget-client",
      youtube: "https://youtu.be/hFJh9bEbUsE"
    },
    {
      title: "DOREMI",
      type: "(solo project)",
      img: doremi,
      github: "https://github.com/hjnk125/doremi",
      try: "http://doremi.s3-website.ap-northeast-2.amazonaws.com/"
    }
  ]);

  return (
    <div className="Projects">

      <div className="Project">
        <div className="Project-title">
          <img src={donforgetLogo} style={{ height: "1.8rem", margin: "5px 10px -5px 0" }} alt="donforgetLogo" />
          <strong>돈't forget</strong>
        </div>
        <i className="Project-desc">경조사를 기록하여 쉽고 간편하게 관리할 수 있도록 도와주는 서비스</i>
        <br /><br />
        <div className="Project-link">
          GitHub ☞ <a href="https://github.com/codestates/don-forget-client">https://github.com/codestates/don-forget-client</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          YouTube ☞ <a href="https://youtu.be/hFJh9bEbUsE">https://youtu.be/hFJh9bEbUsE</a>
        </div>
        <br />
        <div className="Project-img">
          <img src={donforget} alt="donforget" style={{ height: "20rem" }} />
          <img src={App_Schedule} alt="App_Schedule" style={{ height: "20rem" }} />
        </div>
      </div>


      <h3>⚒ 업데이트 중... ⚒</h3>
    </div>
  )
}

export default Projects;