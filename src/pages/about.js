import './includes/css/about.css';
import PageAnimate from '../components/PageAnimate';
import resume from '../assets/about/NghiNguyenResume_1:25.pdf';

function About() {
    return (
      <PageAnimate>
        <div className = "about-main">
          <div className= "about-header">
            <div className="about-title">
              about me
            </div>
            <div className="about-description">
              <div>hulo, here are some facts about me below.</div>
              <div>Download my resume <a href={resume} download="NghiNguyenResume">here</a></div>

            </div>
          </div>
        </div>
      </PageAnimate>
    );
};

export default About;