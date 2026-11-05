import Bear from '../assets/projects/Bear.png';
import acc from '../assets/projects/acc.png';
import migrantExperiencePreview from '../assets/projects/migrant-experience-preview.jpg';
import migrantExperiencePreviewVideo from '../assets/projects/migrant-experience-preview.mp4';
import sakuraTreePreview from '../assets/projects/sakura-tree-preview.jpg';
import sakuraTreePreviewVideo from '../assets/projects/sakura-tree-preview.mp4';

const ProjectsList = [
    {
        title: "Visualizing the Guatemalan Migrant Experience",
        id: "migrant-experience",
        src: migrantExperiencePreview,
        previewImage: migrantExperiencePreview,
        previewVideo: migrantExperiencePreviewVideo,
        previewTitle: "Visualizing the Migrant Experience",
        previewDescription: "Follow the migration journey from Guatemala to the U.S.",
        previewByline: "Created by Suwan Kim, Nghi Nguyen, Erick Oduniyi",
        link: 'https://sen-migration-journey.netlify.app/',
        repo: 'https://github.com/nghi-nguyen-beep/6c35-final-project',
        tech: 'JavaScript, mapbox, React.js, D3.js',
        description: "This was a final group project for my Data Visualization and Society class. We used mapbox to interact with the journey of a migrant in Guatemala to the United States.",
    },
    {
        title: "Sakura Tree Simulation",
        id: "sakura-tree",
        src: sakuraTreePreview,
        previewImage: sakuraTreePreview,
        previewVideo: sakuraTreePreviewVideo,
        link: 'https://youtu.be/OtrLfBWicD0?si=dP_EuMj9at5j3Bg1',
        repo: 'https://github.com/nghi-nguyen-beep/6.4400-final-project',
        tech: 'C++, OpenGL, GLSL',
        description: "This was a final group project for my Computer Graphics class. We used C++ and OpenGL to create a 3D scene of a tree with falling sakura petals. The tree was generated using L-systems and the petals were generated using particle systems.",
    },
    {
        title: "weatherly",
        id: "weatherly",
        src: Bear,
        link: "https://weatherly-2021.herokuapp.com/",
        repo: "https://github.com/weblab-class/nghi-nguyen-beep",
        tech: "React.js, MongoDB, node.js, Heroku",
        description: "This was a project for my intro to web dev class. It takes into account your geographic location, and gives you suggestions on what to wear depending on what articles of clothing you have in your closet. It was my first experience with web development.",
    },

    {
        title: "ITEC",
        id: "itec",
        src: acc,
        link: 'https://web.mit.edu/acc/www/',
        repo: 'https://github.com/nghi-nguyen-beep/acc-website',
        tech: "HTML, CSS, JS, Bootstrap",
        description: "I created this website for my citizenship organization at school using the basic elements of web development. I used Figma to sketch out the design and then made the static website for quick production.",
        
    }
];

export default ProjectsList;