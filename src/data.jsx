import { FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import Portfolio from './assets/project-img/portfolio.png'
import Quizly from './assets/project-img/quizly.png'
import Todo from './assets/project-img/todo-img.png'
// import Ecommerce from './assets/project-img/ecommerce.png'
import Weather from './assets/project-img/weather-sphere.png'

console.log(Portfolio)

export const Data = [
    {
      projectName: 'Personal Portfolio Website',
      projectInfo: 'This is my personal portfolio website, designed to showcase my skills, projects, and experience as a frontend developer. The goal was to create a responsive, visually appealing website that highlights my work in a clean and modern way',
      projectImage: Portfolio,
      githubLink: 'https://github.com/Mubarak-Ade/portfolio-1',
      websiteLink: 'https://mubaraq-ade-portfolio.vercel.app/',
      projectStack: function () {
        return (
          <div className="flex gap-2 p-2 bg-opacity-70">
            <FaReact color='#0284c7 ' size={25} />           
            <RiTailwindCssFill color='#0891b2' size={25}  />
            <FaJs className='text-3xl text-orange-600'/>
        </div>
        )
      },
      features: function () {
        return (
            <ul className='p-2 text-xs list-disc'>
              <li>Fully responsive design that looks great on all devices.</li>
              <li>Smooth animations and transitions for better user experience.</li>
              <li>Clean and accessible UI</li>
            </ul>
        )
      },
      challenges: 'Ensuring the design remained consistent across different devices and screen sizes, while optimizing for performance.'
    },
    {
      projectName: 'Quiz Website',
      projectInfo: 'The Quiz App is an engaging, user-friendly platform designed to test and expand users knowledge through a variety of quizzes. Built with modern web technologies, the app combines functionality with a clean, intuitive design to ensure a seamless user experience',
      projectImage: Quizly,
      githubLink: 'https://github.com/Mubarak-Ade/Quiz_Web',
      websiteLink: 'https://quiz-app-57e83.web.app/',
      projectStack: function () {
        return (
          <div className="flex gap-2 p-2 bg-opacity-70">
            <FaReact color='#0284c7 ' size={25} />           
            <RiTailwindCssFill color='#0891b2' size={25}  />
            <FaJs className='text-3xl text-orange-600'/>
        </div>
        )
      },
      features: function () {
        return (
            <ul className='p-2 text-xs list-disc'>
              <li> Dynamic Quiz Interface</li>
              <li>Variety of Questions</li>
              <li>Score Tracking</li>
              <li>Responsive Design</li>
              <li>Responsive Design</li>
            </ul>
        )
      },
      challenges: 'Ensuring the design remained consistent across different devices and screen sizes, while optimizing for performance.'
    },
    {
      projectName: 'React To-Do List App',
      projectInfo: 'The To-Do List App is a minimalistic yet highly functional productivity tool designed to help users organize their tasks and stay on top of their schedules. Built with a clean and responsive design, the app ensures an effortless user experience.',
      projectImage: Todo,
      githubLink: 'https://github.com/Mubarak-Ade/Todo-List',
      websiteLink: 'https://todo-list-nine-nu-19.vercel.app/',
      projectStack: function () {
        return (
          <div className="flex gap-2 p-2 m-3 bg-opacity-70">
            <FaReact color='#0284c7 ' size={25} />           
            <RiTailwindCssFill color='#0891b2' size={25}  />
            <FaJs className='text-3xl text-orange-600'/>
        </div>
        )
      },
      features: function () {
        return (
            <ul className='p-2 text-xs list-disc'>
              <li>Task Management: Add, edit, and delete tasks dynamically</li>
              <li>User-Friendly Interface: A clean, intuitive layout designed for simplicity and ease of use.</li>
              <li>Responsive Design: Optimized for various devices, including desktops, tablets, and mobile phones.
              </li>
            </ul>
        )
      },
      challenges: 'Managing the application’s state efficiently was one of the key challenges. I utilized React Hooks (useState, useEffect) to keep track of the task list, and local storage for persisting tasks.'
    },
    {
      projectName: 'E-commerce Product Page',
      projectInfo: 'A frontend e-commerce product page designed to display various products with filter and sorting options. The goal was to provide users with a clean and intuitive shopping experience.',
      projectImage: Quizly, // Corrected path for E-commerce Product Page
      githubLink: '',
      websiteLink: '',
      projectStack: function () {
        return (
          <div className="flex gap-2 p-2 m-3 bg-opacity-70">
            <FaReact color='#0284c7 ' size={25} />           
            <RiTailwindCssFill color='#0891b2' size={25}  />
            <FaJs className='text-3xl text-orange-600'/>
  
        </div>
        )
      },
      features: function () {
        return (
            <ul className='p-2 text-xs list-disc'>
              <li>Product grid with responsive design.</li>
              <li>Filtering by product category and sorting by price.</li>
              <li>Product detail page with images, descriptions, and add-to-cart functionality</li>
            </ul>
        )
      },
      challenges: 'One of the main challenges was implementing an intuitive filtering and sorting system while ensuring the design remained responsive and user-friendly across all devices.'
    },
    {
      projectName: 'Weather App',
      projectInfo: 'The Weather Sphere is a sleek and modern weather forecasting website designed to provide accurate and up-to-date weather information. With a focus on simplicity and usability, it offers users an effortless way to check current conditions and plan their day.',
      projectImage: Weather,
      githubLink: 'https://github.com/Mubarak-Ade/Weather-Sphere',
      websiteLink: 'https://weather-sphere-iota.vercel.app/',
      projectStack: function () {
        return (
          <div className="flex gap-2 p-2 m-3 bg-opacity-70">
            <FaReact color='#0284c7 ' size={25} />           
            <RiTailwindCssFill color='#0891b2' size={25}  />
            <FaJs className='text-3xl text-orange-600'/>
  
        </div>
        )
      },
      features: function () {
        return (
            <ul className='p-2 text-xs list-disc'>
              <li>Real-Time Weather Data: Get instant updates on temperature, weather conditions, humidity, and more.</li>
              <li>Clean and Intuitive Design: A visually appealing interface with a straightforward layout for an excellent user experience.</li>
              <li>Responsive Design: Optimized for all screen sizes, ensuring seamless access on desktops, tablets, and smartphones.</li>
              <li>Weatherstack Integration: Powered by the Weatherstack API for reliable and accurate weather data..</li>
            </ul>
        )
      },
      challenges: 'One of the main challenges was implementing an intuitive filtering and sorting system while ensuring the design remained responsive and user-friendly across all devices.'
    },
]
