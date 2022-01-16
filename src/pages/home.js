import './includes/css/home.css';
import CircleButton from '../components/CircleButton';

function Home() {
    return (
        <div className= "home-main">
          <CircleButton color= "#DA7272" route="art"></CircleButton>
          <CircleButton color= "#A9C3EB" route="about"></CircleButton>
          <CircleButton color= "#F0D07D" route="projects"></CircleButton>
        </div>
      );
};

export default Home;