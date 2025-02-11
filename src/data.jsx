import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.jpg';
import Work9 from './assets/project-9.jpg';
import Work10 from './assets/project-10.png';
import Work11 from './assets/project-11.png';
import Work12 from './assets/project-13.png';
import Work13 from './assets/project-14.png';
import Work14 from './assets/project-15.png';



import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
  
  {
    id: 5,
    name: 'Github',
    icon: <FaGithub className='nav__icon' />,
    path: 'https://github.com/targetlakshya',
    target: '_blank',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Lakshya',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Borasi',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Bhopal, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9589362921',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'thetarget018@gmail.com',
  },

  {
    id: 9,
    title: 'Linkedin : ',
    description: 'Lakshya Borasi',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: 'Fresher',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '4+',
    title: 'Website <br/> Design',
  },

  {
    id: 4,
    no: '3+',
    title: ' Hackathons <br /> Participation',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'JUL 2024 - JUL 2024',
    title: 'Research Intern (Coursework Internship) <span> <br> Indian Institute of Technology, Mandi  </span>',
    desc: `Developed a Vision-Language Model to assess image-text relevance.
         Fine-tuned the CLIP model for domain-specific tasks.
         Evaluated model performance using similarity metrics and real-world dataset validation.`,
  },



  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-Present',
    title: 'Bachelor of Technology Degree <span> <br> Technocrats Institute of Technology </span>',
    desc: 'I am a Bachelor of Technology student in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning from Technocrats Institute of Technology ',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2021',
    title: 'Senior Secondary Examination <span> <br>Gyan Sagar Public School </span>',
    desc: 'I completed my Senior Secondary Examination with a specialization in Maths & Science from Gyan Sagar Public School, Indore with a percentage of 87.6%.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2019',
    title: 'High School Examination <span> <br> V.S. Public School </span>',
    desc: 'I completed my High School Examination from V.S. Public School, Bhopal with a percentage of 88.2%.',
  },
  {
    id: 7,
    category: 'position',
    icon: <FaGraduationCap />,
    year: 'Jan 2025 - Present',
    title: 'Member <span> <br> Bhopal DAO </span>',
    desc: `As a Core team Member, I am responsible for progress to building communities, onboarding web3 enthusiasts, and spread Web3 knowledge.`,
  },
  {
    id: 8,
    category: 'position',
    icon: <FaGraduationCap />,
    year: 'Apr 2024-Present',
    title: 'Regional Lead <span> <br> Qoneqt </span>',
    desc:   `As a Regional Lead, I am responsible for managing the team of Qoneqt in the region. I am responsible for the growth of the team and the company in the Central region.`,
  },
  {
    id: 9,
    category: 'position',
    icon: <FaGraduationCap />,
    year: 'Jan 2024-Present',
    title: 'Campus Advocate <span> <br> Central DAO </span>',
    desc:  `Promote Central DAO in the campus and help students to understand the concept of DAO and blockchain technology.`,
  },
  {
    id: 10,
    category: 'position',
    icon: <FaGraduationCap />,
    year: 'Apr 2024-Aug 2024',
    title: 'Developer Advocate <span> <br> Oraichain Labs </span>',
    desc: `As a Developer Advocate we are responsible for progress to building projects, onboarding evangelists, and representing the
    community in events and workshops.`,
  },
  {
    id: 11,
    category: 'position',
    icon: <FaGraduationCap />,
    year: 'Aug 2023-Sept 2023',
    title: 'Campus Ambassador <span> <br> Hackverse Hackathon </span>',
    desc: `Promote Hackverse Hackathon in the campus and help students to understand the concept of hackathons and how they can participate in it.`,
  },
];

export const skills = [

  {
    id: 1,
    title: 'Python',
    percentage: '90',
  },
  
  {
    id: 2,
    title: 'Tensorflow',
    percentage: '75',
  },
  
  {
    id: 3,
    title: 'Scikit-learn',
    percentage: '80',
  },
  
  {
    id: 4,
    title: 'Numpy',
    percentage: '85',
  },
  
  {
    id: 5,
    title: 'Pandas',
    percentage: '85',
  },
  
  {
    id: 6,
    title: 'Matplotlib',
    percentage: '75',
  },
  
  {
    id: 7,
    title: 'DSA',
    percentage: '20',
  },
  
  {
    id: 8,
    title: 'OOPS',
    percentage: '55',
  },
  
  {
    id: 9,
    title: 'Machine Learning',
    percentage: '85',
  },
  
  {
    id: 10,
    title: 'MySQL',
    percentage: '65',
  },
  
  {
    id: 11,
    title: 'Firebase',
    percentage: '40',
  },
  
  {
    id: 12,
    title: 'React JS',
    percentage: '45',
  },
  
  {
    id: 13,
    title: 'Javascript',
    percentage: '64',
  },
  
  {
    id: 14,
    title: 'Html',
    percentage: '85',
  },
  
  {
    id: 15,
    title: 'CSS',
    percentage: '80',
  },
  
];

export const portfolio = [
  {
    id: 1,
    img: Work10,
    title: 'AI Stock Advisor with Llama 3.2',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Stock trend analysis and insights',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/targetlakshya/AI-Stock-Advisor-with-Llama-3.2',
      },
    ],
  },
  {
    id: 2,
    img: Work11,
    title: 'Vision Language Model',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Fine-tuned CLIP model for image-text retrieval',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Research Project at IIT Mandi',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://www.kaggle.com/code/lakshyaborasi/vision-language-model',
      },
    ],
  },
  {
    id: 3,
    img: Work12,
    title: 'Customer Segmentation Model for Bank Credit Card Analysis',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clustering model for segmenting credit card users',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Research',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://colab.research.google.com/drive/1tRVjuFHZbr4awt9SPEnNMLPkvkuJ-eHE',
      },
    ],
  },
  {
    id: 4,
    img: Work13,
    title: 'MERN School Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Full-stack school management system',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/targetlakshya/Mern-School-Management',
      },
    ],
  },
  {
    id: 5,
    img: Work14,
    title: 'Convert Audio into Spectrogram',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Converts audio files into spectrogram images',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/targetlakshya/Convert-Audio-into-Spectrogram',
      },
    ],
  },
  {
    id: 6,
    img: Work8,
    title: 'Phishing Detection System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Console-based phishing detection system',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/targetlakshya/Phishing-Detection-System',
      },
    ],
  },
  {
    id: 7,
    img: Work1,
    title: 'Headphone Page Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Testing Skills',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://beatsheadphonedesign.netlify.app/',
      },
    ],
  },

  {
    id: 8,
    img: Work2,
    title: 'Travel Plan Page Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Testing Skills',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
      desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://tourismplanpage.netlify.app/',
      },
    ],
  },

  {
    id: 9,
    img: Work3,
    title: 'Real-Esate Page Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Testing Skills',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://targetlakshya.github.io/Real-State-Web-Design/',
      },
    ],
  },

  {
    id: 10,
    img: Work4,
    title: 'Github Dev Detector',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Testing Skills',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://githubdevdetective.netlify.app/',
      },
    ],
  },
  {
    id: 11,
    img: Work6,
    title: 'Password Genrator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://passwordgeneratorlakshya.netlify.app/',
      },
    ],
  },

  {
    id: 12,
    img: Work5,
    title: 'Ecomzy Shop App',
    details: [
      {
        title: 'Project : ',
        desc: 'Website Design',
      },
      {
        title: 'Client : ',
        desc: 'Testing Skills',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://ecomzy-shop-app-one.vercel.app/',
      },
    ],
  },

  {
    id: 13,
    img: Work9,
    title: 'Devnode Blog App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Full Stack Blog App',
      },
      {
        icon: <FiUser />,
        title: 'Major Project',
        desc: 'Project',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Next JS and Firebase',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://devnodelakshya.vercel.app/',
      },
    ],
  },

  {
    id: 14,
    img: Work7,
    title: 'Youtube Video Downloader',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Console Media Downloader',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Testing skills',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/targetlakshya/Youtube-Downloader',
      },
    ],
  },
  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
