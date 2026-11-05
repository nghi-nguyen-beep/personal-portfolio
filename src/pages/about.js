import './includes/css/about.css';
import PageAnimate from '../components/PageAnimate';
import resume from '../assets/about/Nghi_Nguyen_Resume.pdf';

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
              <h3>Currently thinking about AI Safety + HCI, in particular gradual disempowerment in the age of AI</h3>
              <p>Some resources I've been reading:</p>
              <ul>
                <li><a href="https://arxiv.org/pdf/2608.23642" target="_blank" rel="noopener noreferrer">[Paper] AI Agents Push Humans Out of the Loop</a></li>
                <li><a href="https://www.amazon.com/gp/product/B08R2KL3VY" target="_blank" rel="noopener noreferrer">[Book] The Dawn of Everything: A New History of Humanity by David Graeber and David Wengrow</a></li>
                <li><a href="https://www.amazon.com/Alignment-Problem-Machine-Learning-Values-ebook/dp/B085T55LGK" target="_blank" rel="noopener noreferrer">[Book] The Alignment Problem: Machine Learning and Human Values by Brian Christian</a></li>
              </ul>
            </div>
            <br></br>
            <div><p>Download my resume <b><a href={resume} download="Nghi_Nguyen_Resume">here</a></b> (last updated Nov 5, 2026)</p> </div>
          </div>
        </div>
      </PageAnimate>
    );
};

export default About;