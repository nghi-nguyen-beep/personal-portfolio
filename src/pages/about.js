import './includes/css/about.css';
import PageAnimate from '../components/PageAnimate';
import resume from '../assets/about/NghiNguyenResume_1:25.pdf';
import profile from '../assets/about/nghi.webp';

function About() {
    return (
      <PageAnimate> 
        <div className = "about-main">
          <div className= "about-header">
            <div className="about-title">
              about me
            </div>
          </div>
          <div className="about-description">
            <div>
              <p>Currently planning...</p>
            </div>
            {/* <div>Download my resume (last updated Jan 25, 2022) <a href={resume} download="NghiNguyenResume">here</a></div> */}
          </div>
        </div>
      </PageAnimate>
    );
};

export default About;