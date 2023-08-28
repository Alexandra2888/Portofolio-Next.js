import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaVuejs } from 'react-icons/fa';
import {SiTypescript, SiTailwindcss, SiStyledcomponents} from "react-icons/si";
import {BsFiletypeScss} from "react-icons/bs";
import {BiLogoNodejs} from "react-icons/bi";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id:nanoid(),
    title:'Typescript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500'/>,
    text: 'Proficient in TypeScript'
  }, 
  {
    id: nanoid(),
    title: 'Vue',
    icon: <FaVuejs className='h-16 w-16 text-emerald-500'/>,
    text: 'Proficient in Vue'
  }, 
  {
    id: nanoid(),
    title: 'Node',
    icon: <BiLogoNodejs className='h-16 w-16 text-emerald-500'/>,
    text: 'Proficient in Node'
  },
  {
    id: nanoid(),
    title: 'SCSS',
    icon: <BsFiletypeScss className='h-16 w-16 text-emerald-500'/>,
    text: 'Proficient in SCSS'
  }, 
  {
    id:nanoid(),
    title: 'Tailwind',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500'/>,
    text: 'Proficient in Tailwind'
  },
  {
    id: nanoid(),
    title: 'Styled components',
    icon: <SiStyledcomponents className='h-16 w-16 text-emerald-500'/>,
    text: 'Proficient in Styled Components'
  }
];

export const projects = [
  {
    id: nanoid(),
    img: '/smart.png',
    url: '',
    github: 'https://github.com/Alexandra2888/Smart-Brain/tree/main',
    title: 'Smart Brain',
    text: 'A react project built with HTML5, CSS3, React.js, Clarifai API'
  },
  {
    id: nanoid(),
    img: '/smart.png',
    url: '',
    github: 'https://github.com/Alexandra2888/Smart-Brain-API',
    title: 'Smart Brain API',
    text: 'A project built with Node, Express, PostgreSql.',
  },
  {
    id: nanoid(),
    img: '/movie.png',
    url: '',
    github: 'https://github.com/Alexandra2888/film-app',
    title: 'Movie App',
    text: 'A project built with Angular, TypeScript.',
  },
  {
    id: nanoid(),
    img: '/pawsitive.jpeg',
    url: 'https://pawsitive-care-vet.netlify.app/',
    github: 'https://github.com/Alexandra2888/PawSitive-Care-Vet',
    title: 'Pawsitive Vet Care',
    text: 'A project built with React, React Router, React Toastify, React Leaflet, Swiper,React Icons.',
  },
];