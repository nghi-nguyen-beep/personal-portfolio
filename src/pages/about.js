import './includes/css/about.css';
import PageAnimate from '../components/PageAnimate';
import resume from '../assets/about/NghiNguyenResume_1:25.pdf';
import profile from '../assets/about/profile-picture.webp';

function About() {
    return (
      <PageAnimate>
        <div className = "about-main">
          <div className= "about-header">
            <div className="about-title">
              about me
            </div>
          </div>
          <div className="about-profile-picture">
            <img className= "about-image" src= {profile} alt= "profile" style={{width: "18vw", height: "18vw", borderRadius: "50%", transform: "rotate(41deg)"}}/>
          </div>
          <div className="about-description">
            <div>
              <p>Welcome to my portfolio! My name is Nghi (pronounced "ne:ə") and I'm a current senior studying CS at MIT with interests in design, HCI, AI, and languages.<br></br> 
             In my free time, I love to doodle, play tennis, tutor, and explore bakeries / Vietnamese restaurants whereever I am. <br></br>
              I created this website for the intent of relearning React and also using it as a journal to keep myself accountable for staying on track with drawing. Feel free to look around!</p> <br></br>
            </div>
            <div>Download my resume (last updated Jan 25, 2022) <a href={resume} download="NghiNguyenResume">here</a></div>
          </div>
        </div>
      </PageAnimate>
    );
};

export default About;