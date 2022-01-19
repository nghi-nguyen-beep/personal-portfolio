import './includes/css/home.css';
import CircleButton from '../components/CircleButton';
import PageAnimate from '../components/PageAnimate';

function Home() {
    return (
      <PageAnimate>
        <div className= "home-main">
          <div className='home-row-one'>
            <CircleButton color= "#78A6EB" route="about"></CircleButton>
          </div>
          <div className='home-row-two'>
            <CircleButton color= "#DA7272" route="art"></CircleButton>
            <CircleButton color= "#F0D07D" route="projects"></CircleButton>
          </div>
        </div>
      </PageAnimate>
      );
};

export default Home;