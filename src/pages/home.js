import './includes/css/home.css';
import CircleButton from '../components/CircleButton';
import PageAnimate from '../components/PageAnimate';

function Home() {
    return (
      <PageAnimate>
        <div className= "home-main">
          <div className='home-row-one'>
            <CircleButton color= "#0A2463" route="about"></CircleButton>
            <CircleButton color= "#AD2E24" route="art"></CircleButton>
            <CircleButton color= "#F0A926" route="projects"></CircleButton>
          </div>
        </div>
      </PageAnimate>
      );
};

export default Home;