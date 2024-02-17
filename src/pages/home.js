import './includes/css/home.css';
import './includes/css/about.css';
import CircleButton from '../components/CircleButton';
import PageAnimate from '../components/PageAnimate';
import profile from '../assets/about/nghi.webp';


function Home() {
  return (
    <PageAnimate> 
      <div className = "about-main">
        <div className= "about-header">
          <div className="about-title">
            nghi's portfolio
          </div>
        </div>
        <div className="about-profile-picture">
          <img className= "about-image" src= {profile} alt= "profile" style={{width: "17vw", height: "17vw", borderRadius: "50%"}}/>
        </div>
        <div className="about-description">
          <div>
            <p>You're currently at Nghi's Personal Portfolio. 
            <br/><br/>SALUTATIONS AND WELCOME!<br/><br/>
            I created this website for the intent of relearning React and also using it as a journal to keep myself accountable for staying on track with drawing!<br/><br/>
            pfp is Chibi Maruko-chan</p>
          </div>
          {/* <div>Download my resume (last updated Jan 25, 2022) <a href={resume} download="NghiNguyenResume">here</a></div> */}
        </div>
      </div>
    </PageAnimate>
  );
};

export default Home;