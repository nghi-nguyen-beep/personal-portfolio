import Bear from '../assets/projects/Bear.png';
import acc from '../assets/projects/acc.png';
import pandji from '../assets/projects/pandji.png';
import portfolio from '../assets/projects/portfolio.png';

const ProjectsList = [
    {
        title: "portfolio",
        id: "portfolio",
        src: portfolio,
        link: "https://nghi-nguyen.netlify.app/",
        repo: "https://github.com/nghi-nguyen-beep/personal-portfolio",
        tech: "React.js, framer-motion",
        description: "This is a personal project I worked on this winter break to get familiar with React and its syntax again. I used Figma to prototype the designs and used framer-motion to assist with the page transitions.",
    },
    {
        title: "weatherly",
        id: "weatherly",
        src: Bear,
        link: "https://weatherly-2021.herokuapp.com/",
        repo: "https://github.com/weblab-class/nghi-nguyen-beep",
        tech: "React.js, MongoDB, node.js, Heroku",
        description: "This was a project for my intro to web dev class winter break last year. It takes into account your geographic location, and gives you suggestions on what to wear depending on what articles of clothing you have in your closet. It was my first experience with web development.",
    },

    {
        title: "ITEC",
        id: "itec",
        src: acc,
        link: 'https://web.mit.edu/acc/www/',
        repo: 'https://github.com/nghi-nguyen-beep/acc-website',
        tech: "HTML, CSS, JS, Bootstrap",
        description: "I created this website for my citizenship organization at school using the basic elements of web development. I used Figma to sketch out the design and then made the static website for quick production.",
        
    },

    {
        title: "pandji",
        id: "pandji",
        src: pandji,
        link: 'Coming Soon!',
        repo: 'Coming Soon!',
        tech: 'python, HTML, CSS, Arduino, POSTAPI',
        description: "This was a final group project for my embedded projects class in Spring 2020. Similar to Jackbox, it is a compilation of games that users can play using POST and GET requests from personal devices. The source code will be uploaded soon after it can be located.",

    },


];

export default ProjectsList;