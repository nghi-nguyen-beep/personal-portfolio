import './includes/css/about.css';
import PageAnimate from '../components/PageAnimate';

function About() {
    return (
      <PageAnimate>
        <div className = "about-main">
          <div className= "about-header">
            <div className="about-title">
              about me
            </div>
            <div className="about-description">
              hulo, here are some facts about me below.
            </div>
          </div>
        </div>
      </PageAnimate>
    );
};

export default About;