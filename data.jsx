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
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Crafting visually appealing and responsive websites with HTML and CSS.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Building interactive web apps with seamless user interactions using JavaScript.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Developing efficient and interactive front-end apps with React.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    text: 'Enhancing type safety and code maintainability in projects with TypeScript.',
  },
  {
    id: nanoid(),
    title: 'Vue.js',
    icon: <FaVuejs className='h-16 w-16 text-emerald-500' />,
    text: 'Creating dynamic and reactive user interfaces with the Vue.js framework.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <BiLogoNodejs className='h-16 w-16 text-emerald-500' />,
    text: 'Building server-side applications and APIs using the Node.js runtime environment.',
  },
  {
    id: nanoid(),
    title: 'SCSS',
    icon: <BsFiletypeScss className='h-16 w-16 text-emerald-500' />,
    text: 'Leveraging enhanced styling capabilities and maintainable CSS with SCSS.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'Rapidly designing responsive and utility-driven UI components using Tailwind CSS.',
  },
  {
    id: nanoid(),
    title: 'Styled Components',
    icon: <SiStyledcomponents className='h-16 w-16 text-emerald-500' />,
    text: 'Encapsulating styling logic within components for better modularity using Styled Components.',
  },
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