import './AboutMe.css';
import Me from './images/me.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import sass from './images/sass.png';
import ps from './images/ps.png';
import ai from './images/ai.png';

function AboutMe() {
  return (
    <div className="AboutMe">

      <div className="Photo">
        <div className="Stacks loop1">
          <div className="Stacks-label">
            <img src={html} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={css} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={js} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={react} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={sass} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={ps} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={ai} className="Stacks-image" />
          </div>
        </div>
        <div className="Stacks loop2">
          <div className="Stacks-label">
            <img src={html} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={css} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={js} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={react} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={sass} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={ps} className="Stacks-image" />
          </div>
          <div className="Stacks-label">
            <img src={ai} className="Stacks-image" />
          </div>
        </div>

        <img src={Me} className="Photo-me" />
      </div>

      <h2>HOJUNG KIM</h2>
      <p>항상 새로운 배움에 도전하는 프론트엔드 개발자 김호정입니다.<br />실을 짜서 정교하고 아름다운 작품을 만드는 섬유미술처럼,<br />코드를 짜서 유저가 사용하고 싶은 서비스를 만듭니다.</p>

    </div>
  );
}

export default AboutMe;
