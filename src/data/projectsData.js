// import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'
import crowdfunding from '../assets/png/crowdfunding.png'
import prettylittlearts from '../assets/png/prettylittlearts.png'
import loaneval from '../assets/png/loaneval.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Crowdfunding',
        projectDesc: 'Developed a platform to facilitate fundraising for various causes and initiatives, providing seamless features for campaign creation, contribution tracking, and secure payment integration. The project highlighted skills in user-centric design and efficient backend functionality.',
        tags: ['WEB3', 'HTML' ,'CSS', 'Javascript','Solidity'],
        code: 'https://github.com/navinhasrajani/Crowdfunding',
        demo: '',
        image: crowdfunding,
    },
    {
        id: 2,
        projectName: 'Gamestore',
        projectDesc: '"Game Store" is a cutting-edge online gaming platform hosting a variety of classic retro games. With advanced features like email- based authentication and secure data storage, it offers enriched user experiences. This project blends nostalgic gaming with modern tech, serving an audience seeking entertainment and data privacy.',
        tags: ['HTML', 'CSS','Javascript', 'PHP'],
        code: 'https://github.com/navinhasrajani/GameStore',
        demo: '',
        image: ""
    },
    {
        id: 3,
        projectName: 'Pretty Little Arts',
        projectDesc: 'Designed and developed a robust e-commerce web application using Django for backend development. The application features user authentication (including OTP-based login via Firebase), wishlist, cart management, live database integration, email notifications for order updates, and invoice downloads, providing a seamless shopping experience.',
        tags: ['Python', 'Django', 'Firebase', "MongoDB"],
        code: '',
        demo: 'https://prettylittlearts.com/',
        image: prettylittlearts
    },
    {
        id: 4,
        projectName: 'Loan Eval',
        projectDesc: 'Developed a web application to evaluate loan eligibility using predictive analytics. Built with a focus on efficiency, it integrates machine learning models to assess borrower profiles, calculate risk scores, and provide recommendations, ensuring a streamlined and data-driven loan approval process.',
        tags: ['Python', 'HTML', 'CSS', 'ML'],
        code: 'https://github.com/navinhasrajani/Loan-Approval',
        demo: '',
        image: loaneval
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/