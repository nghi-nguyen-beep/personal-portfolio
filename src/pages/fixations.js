import './includes/css/fixations.css';
import PageAnimate from '../components/PageAnimate';

function Fixations() {
  return (
    <PageAnimate>
      <div className="fixations-main">
        <div className="fixations-header">
          <div className="fixations-title">fixations</div>
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
            <p>Places:</p>
              <ul>
                <li>NYPL Bryant Park</li>
                <li>Grand Central Terminal</li>
                <li>Morgan Library and Museum</li>
                <li>Hunter's Point Park</li>
                <li>WNYC Transmitter Park</li>
                <li>Astoria Park</li>
                <li>Jane's Carousel / Brooklyn Bridge Park Area</li>
                <li>myplasticheart</li>
              </ul>
            <p>Meals:</p>
              <ul>
                <li>Yemenat -- Lamb Haneeth and Rashoosh</li>
                <li>Olle -- Byeong-uh Jorim</li>
                <li>Izakaya Seasun -- Matcha Makgeolli</li>
                <li>Masa Madre -- Weekend Tamales</li>
                <li>Omusubi Gonbei -- Any onigiri</li>
              </ul>

            <p>Sweets:</p>
              <ul>
                <li>Hana's Gelateria -- Jasmine Gelato</li>
                <li>Mixue -- $1.39 Ice Cream</li>
                <li>Auntea Jenny -- Egg Tarts</li>
                <li>Mimi's Frozen Yogurt -- Anything with the pistachio drizzle</li>
                <li>Uzuki -- Kakegori Ice Cream</li>
              </ul>
        </div>
      </div>
    </div>
    </PageAnimate>
  );
}

export default Fixations;
