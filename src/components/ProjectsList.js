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
    },
    {
        title: "weatherly",
        id: "weatherly",
        src: Bear,
        link: "https://weatherly-2021.herokuapp.com/",
        repo: "https://github.com/weblab-class/nghi-nguyen-beep",
        tech: "React.js, MongoDB, node.js, Heroku",
    },

    {
        title: "ITEC",
        id: "itec",
        src: acc,
        link: 'https://web.mit.edu/acc/www/',
        repo: 'https://github.com/nghi-nguyen-beep/acc-website',
        tech: "HTML, CSS, JS, Bootstrap",
        
    },

    {
        title: "pandji",
        id: "pandji",
        src: pandji,
        link: 'Coming Soon!',
        repo: 'Coming Soon!',
        tech: 'python, HTML, CSS, Arduino, POSTAPI',
    },


];

export default ProjectsList;