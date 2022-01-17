import './includes/css/home.css';
import CircleButton from '../components/CircleButton';

function Home() {
    return (
        <div className= "home-main">
          <div className='home-row-one'>
            <CircleButton color= "#A9C3EB" route="about"></CircleButton>
          </div>
          <div className='home-row-two'>
            <CircleButton color= "#DA7272" route="art"></CircleButton>
            <CircleButton color= "#F0D07D" route="projects"></CircleButton>
          </div>
        </div>
      );
};

export default Home;