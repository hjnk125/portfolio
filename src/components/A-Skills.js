import './A-Skills.scss';

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills-row">
        <label>
          HTML/CSS
        <div className="Skills-graph">
            <span className="per-70"></span>
          </div>
        </label>
        <label>
          JavaScript ES6
        <div className="Skills-graph">
            <span className="per-80"></span>
          </div>
        </label>
        <label>
          React
        <div className="Skills-graph">
            <span className="per-80"></span>
          </div>
        </label>
        <label>
          TypeScript
        <div className="Skills-graph">
            <span className="per-50"></span>
          </div>
        </label>
      </div>
      <div className="Skills-row">
        <label>
          React-Native
        <div className="Skills-graph">
            <span className="per-50"></span>
          </div>
        </label>
        <label>
          Git
        <div className="Skills-graph">
            <span className="per-60"></span>
          </div>
        </label>
        <label>
          PhotoShop
        <div className="Skills-graph">
            <span className="per-90"></span>
          </div>
        </label>
        <label>
          Illustrator
        <div className="Skills-graph">
            <span className="per-70"></span>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Skills;