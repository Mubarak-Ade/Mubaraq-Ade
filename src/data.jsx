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
      projectInfo: 'This is my personal portfolio website, designed to showcase my skills, projects, and experience as a frontend developer. The goal was to create a responsive, visually appealing website that highlights my work in a clean and modern way',
      projectImage: Quizly,
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
      projectName: 'React To-Do List App',
      projectInfo: 'This is a simple yet powerful task management application built using React. The app allows users to add, edit, and delete tasks, providing an easy way to keep track of daily tasks and goals.',
      projectImage: Todo,
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
              <li>Add, edit, and delete tasks dynamically</li>
            </ul>
        )
      },
      challenges: 'Managing the application’s state efficiently was one of the key challenges. I utilized React Hooks (useState, useEffect) to keep track of the task list, and local storage for persisting tasks.'
    },
    {
      projectName: 'E-commerce Product Page',
      projectInfo: 'A frontend e-commerce product page designed to display various products with filter and sorting options. The goal was to provide users with a clean and intuitive shopping experience.',
      projectImage: Quizly, // Corrected path for E-commerce Product Page
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
      projectInfo: 'A frontend e-commerce product page designed to display various products with filter and sorting options. The goal was to provide users with a clean and intuitive shopping experience.',
      projectImage: Weather,
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
]
