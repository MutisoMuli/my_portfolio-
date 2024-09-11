import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "JavaScript Developer",
      icon: web,
    },
    {
      title: "NodeJs Developer",
      icon: mobile,
    },
    {
      title: "REST API's Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Vacant.com",
      company_name: "TWO INTERFACE WEBSITE TO HELP HOUSE SEEKERS FIND VACANT HOUSES IN THEIR AREA USING GOOGLE MAP API",
      icon: tesla,
      iconBg: "#383E56",
      date: "AUGUST 2024",
      points: [
        "Designed and implemented a dual-interface website for Vacant.com, leveraging the Google Maps API to enable house seekers to efficiently locate vacant properties in their desired areas. Developed a robust backend system using Node.js and express.js to handle real-time data processing and API integration, ensuring seamless user experience across both mobile and desktop platforms.",
        "Spearheaded the development of an innovative geolocation-based search algorithm, significantly enhancing the accuracy and speed of property matching for users. Collaborated with a cross-functional team of designers and data scientists to create an intuitive user interface that simplifies complex property data into easily digestible visual formats, dramatically improving user engagement and satisfaction rates.",
      ],
    },
    {
      title: "Royal gems",
      company_name: "ROYAL GEMS IS A E-COMMERCE FOR A JEWEL SELLING SHOP LOCATED IN NAIROBI",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "MAY 2024",
      points: [
        "Engineered and deployed a cutting-edge e-commerce platform for Royal Gems, a premier jewel retailer in Nairobi, utilizing React and Tailwind CSS to craft a visually stunning and highly responsive front-end interface. Leveraged Node.js and Express.js to develop a robust back-end architecture, ensuring seamless handling of user transactions, inventory management, and secure payment processing. Implemented PostgreSQL as the primary database solution, optimizing data storage and retrieval for enhanced performance and scalability.",
        "Orchestrated the containerization of the entire application stack using Docker, significantly improving deployment efficiency and consistency across different environments. Designed and implemented a comprehensive RESTful API, facilitating smooth communication between the front-end and back-end systems, and enabling easy integration with third-party services for features such as shipping logistics and customer relationship management. This modern tech stack resulted in a 40% increase in website loading speed and a 25% boost in conversion rates within the first month of launch.",
      ],
    },
    {
      title: "AirBnB Platform clone",
      company_name: "WEB-BASED PLATFORM THAT ALLOWS USERS TO SEARCH, BOOK, AND MANAGE HOME RENTALS FROM VARIOUS PROVIDERS",
      icon: tesla,
      iconBg: "#383E56",
      date: "APRIL 2024",
      points: [
        "Spearheaded the development of a comprehensive AirBnB platform clone, a sophisticated web-based application that empowers users to effortlessly search, book, and manage home rentals from diverse providers. Leveraged Python to build a robust and scalable backend infrastructure, implementing advanced algorithms for efficient property matching and availability management. Designed and developed a RESTful API using Python frameworks, facilitating seamless communication between the frontend and backend systems and enabling easy integration with third-party services for features such as payment processing and geolocation.",
        "Utilized JavaScript to create a dynamic and responsive frontend, ensuring an intuitive and engaging user experience across various devices and screen sizes. Implemented real-time search functionality, interactive booking calendars, and user authentication systems, significantly enhancing the platform's usability and security. The combination of Python backend and JavaScript frontend resulted in a high-performance application capable of handling thousands of concurrent users and processing bookings in real-time. This project showcased proficiency in full-stack development, API design, and the ability to clone and improve upon complex, industry-standard platforms.",
      ],
    },
    {
      title: "Unix shell",
      company_name: "A SIMPLE UNIX COMMAND INTERPRETER",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "OCTOBER 2023",
      points: [
        "Engineered a robust and efficient Unix command interpreter from the ground up, leveraging the power and low-level control of the C programming language. This project demonstrated a deep understanding of operating system principles, process management, and system calls. Implemented core shell functionalities including command parsing, execution of both built-in commands and external programs, and management of environment variables, showcasing proficiency in string manipulation, memory management, and file I/O operations in C.",
        "Developed advanced features such as input/output redirection, piping between processes, and handling of background processes, illustrating a comprehensive grasp of inter-process communication and Unix system programming. Implemented signal handling to manage user interrupts and child processes effectively, ensuring a stable and responsive shell environment. This project not only reinforced fundamental C programming concepts but also provided invaluable insights into the inner workings of operating systems and command-line interfaces, culminating in a fully functional Unix shell capable of running complex command sequences and scripts.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mutiso Muli proved me wrong.",
      name: "Charity Mutua",
      designation: "CEO",
      company: "ROYAL GEMS",
      image: "https://res.cloudinary.com/dhbztjzkr/image/upload/v1726058279/319857475_676047390677441_640413757352591758_n_cnexhc.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mutiso Muli does.",
      name: "Sylvester Mbithi",
      designation: "Partner",
      company: "JSL Advocates",
      image: "https://res.cloudinary.com/dhbztjzkr/image/upload/v1726058552/422319879_10160121676973526_286625482949004160_n_pxen64.jpg",
    },
    {
      testimonial:
        "Working with Mutiso Muli made me fall in love with Software Engineering.I was impressed with his communication skills and how he manages his repositories",
      name: "Anthony Muli",
      designation: "Student",
      company: "ALX Software Engineering Program",
      image: "https://res.cloudinary.com/dhbztjzkr/image/upload/v1726058932/454002555_10228804886641734_6663245254098525186_n_f2qa2b.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mini Facebook clone",
      description:
        "Web-based platform that allows users to sign-up, login, and chat with other users as well as Make post, Like post and comment.",
      tags: [
        {
          name: "SpringBoot",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Thymeleaf",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Innocentsax/Spring_Boot3_Hibernate-JPA/tree/main/simple-form",
    },
    {
      name: "AirBnB Platform clone",
      description:
        "Web-based platform that allows users to search, book, and manage Home rentals from various providers, providing a convenient and efficient solution for Hospitality needs.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RestApi",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Innocentsax/AirBnB_clone_v2",
    },
    {
      name: "Movie Review web Platform",
      description:
        "A web aplication that allow users to review trending movies base on genre.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Innocentsax/FULL_STACK_PROJECTS/tree/main/Movie_Review_Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };