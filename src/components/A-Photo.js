import './A-Photo.scss';
import Me from '../images/me.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import sass from '../images/sass.png';
import ps from '../images/ps.png';
import ai from '../images/ai.png';

function Photo() {

  return (
    <div className="Photo">
      <div className="Stacks loop1">
        <div className="Stacks-label">
          <img src={html} alt="html" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={css} alt="css" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={js} alt="js" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={react} alt="react" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={sass} alt="sass" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={ps} alt="ps" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={ai} alt="ai" className="Stacks-image" />
        </div>
      </div>
      <div className="Stacks loop2">
        <div className="Stacks-label">
          <img src={html} alt="html" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={css} alt="css" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={js} alt="js" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={react} alt="react" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={sass} alt="sass" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={ps} alt="ps" className="Stacks-image" />
        </div>
        <div className="Stacks-label">
          <img src={ai} alt="ai" className="Stacks-image" />
        </div>
      </div>

      <img src={Me} alt="Me" className="Photo-me" />
    </div>
  )
}

export default Photo;