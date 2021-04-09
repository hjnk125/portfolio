import './A-Projects.scss';
import getupmate from '../images/getupmate.gif';
import donforget from '../images/donforget.gif';
import doremi from '../images/doremi.gif';
import { useState } from 'react';

function MainProjects() {
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
  ])

  return (
    <div className="Main-Projects-container">
      <div className="Main-Projects">
        {mainProjects.map((project, i) => {
          return (
            <div className={`Main-Projects-content index${i}`} key={i}>
              <img src={project.img} alt={project.title} />
              <div className="Main-Projects-content-title">{project.title}</div>
              <div className="Main-Projects-content-type">{project.type}</div>
              <div className="Main-Projects-content-btn">
                <button onClick={() => window.open(project.github)}>GitHub ‣</button>
                {project.try ? <button onClick={() => window.open(project.try)}>Try ‣</button> : <></>}
                {project.youtube ? <button onClick={() => window.open(project.youtube)}>Demo ‣</button> : <></>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainProjects;