import './includes/css/fixations.css';
import PageAnimate from '../components/PageAnimate';

function Fixations() {
  return (
    <PageAnimate>
      <div className="fixations-main">
        <div className="fixations-header">
          <div className="fixations-title"><b>fixations</b></div>
          <div className="fixations-description">
            Conglomerate of things that I find interesting, and things that I want to remember.
          </div>
        </div>
      <div className="fixations-content">
          <div className="fixations-literature">
            <h3>Intriguing pieces of literature</h3>
              <ul>
                <li>"Security takes many forms. There is the security of knowing one has a statistically smaller chance of getting shot with an arrow. And then there’s the security of knowing that there are people in the world who will care deeply if one is."- <a href="https://www.goodreads.com/en/book/show/56269264-the-dawn-of-everything" target="_blank" rel="noopener noreferrer">David Graeber and David Wengrow, The Dawn of Everything: A New History of Humanity</a> </li>
                <br></br>
                <li>"Empathy and compassion are evolved states of being. They require the mental capacity to step past our most primal urges of being fearful of the unknown." - <a href="https://straffordcountydemocraticcommittee.org/how-to-spot-an-idiot-jb-pritzkers-commencement-speech/" target="_blank" rel="noopener noreferrer">How to Spot an Idiot: JB Pritzker's Commencement Speech</a></li>
              </ul>
          </div>
          <div className="fixations-new-york">
            <h3>Notable entities in NYC</h3>
            <h4>Places:</h4>
              <ul>
                <li><b>NYPL Bryant Park</b></li>
                <li><b>Grand Central Terminal</b></li>
                <li><b>Morgan Library and Museum</b></li>
                <li><b>Hunter's Point Park</b></li>
                <li><b>WNYC Transmitter Park</b></li>
                <li><b>Astoria Park</b></li>
                <li><b>Jane's Carousel / Brooklyn Bridge Park Area</b></li>
                <li><b>myplasticheart</b></li>
              </ul>
            <h4>Meals:</h4>
              <ul>
                <li><b>Yemenat</b> ☆ Lamb Haneeth and Rashoosh</li>
                <li><b>Olle</b> ☆ Byeong-uh Jorim</li>
                <li><b>Izakaya Seasun</b> ☆ Matcha Makgeolli</li>
                <li><b>Masa Madre</b> ☆ Weekend tamales</li>
                <li><b>Omusubi Gonbei</b> ☆ Any onigiri</li>
              </ul>

            <h4>Sweets:</h4>
              <ul>
                <li><b>Hana's Gelateria</b> ☆ Jasmine Gelato</li>
                <li><b>Mixue</b> ☆ $1.39 Ice Cream</li>
                <li><b>Auntea Jenny</b> ☆ Egg Tarts</li>
                <li><b>Mimi's Frozen Yogurt</b> ☆ Anything with the pistachio drizzle</li>
                <li><b>Uzuki</b> ☆ Kakegori Ice Cream</li>
              </ul>
        </div>
      </div>
    </div>
    </PageAnimate>
  );
}

export default Fixations;
