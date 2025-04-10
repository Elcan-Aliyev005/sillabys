let lessons = [
    {
        id: "html",
        name: "HTML",
        codeName: "html"
    },
    {
        id: "css",
        name: "CSS",
        codeName: "css",
        additionals: ["Tailwind CSS", "Bootstrap CSS", "AOS", "Animate.css"]
    },
    {
        id: "git",
        name: "Git/Github",
        codeName: "git/github",
        additionals: ["Github Pages", "Vercel", "Netlify"]
    },

    {
        id: "js",
        name: "JavaScript",
        codeName: "javascript",
        additionals: ["Chart JS", 'Axios', "GSAP/ScrollTrigger", 'Swiper js']
    },
    {
        id: "react",
        name: "React Js",
        codeName: "react",
        additionals: ["React Router", "Redux Toolkit/ RTK/Query", "React İntl", "MUI / Ant Design", "Stripe Js"]
    }
]

let data = [
    {
        id: 1,
        name: "HTML",
        title: "#Lesson 1",
        desc: [
            "Introduction to HTML",
        ]
    },
    {
        id: 2,
        name: "HTML",
        title: "#Lesson 2",
        desc: [
            "HTML Lists ",
        ]
    },
    {
        id: 3,
        name: "HTML",
        title: "#Lesson 3",
        desc: [
            "HTML Tables"
        ]
    },
    {
        id: 4,
        name: "HTML",
        title: "#Lesson 4",
        desc: [
            "HTML Links",
        ]
    },
    {
        id: 5,
        name: "HTML",
        title: "#Lesson 5",
        desc: [
            "HTML Forms (part 1)",
        ]
    },
    {
        id: 6,
        name: "HTML",
        title: "#Lesson 6",
        desc: [
            "HTML Forms (part 2)",
        ]
    },
    {
        id: 7,
        name: "HTML",
        title: "#Lesson 7",
        desc: [
            "Semantic HTML tags",
            "Layout"
        ]
    },
    {
        id: 8,
        name: "HTML",
        title: "#Lesson 8",
        desc: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects."
        ]
    },
    {
        id: 9,
        name: "CSS",
        title: "#Lesson 9",
        desc: [
            "Introduction to CSS",
            "Selectors and Box model"
        ]
    },
    {
        id: 10,
        name: "CSS",
        title: "#Lesson 10",
        desc: [
            "Basic CSS properties (Shadows, Font, Background, Display etc)",
        ]
    },
    {
        id: 11,
        name: "CSS",
        title: "#Lesson 11",
        desc: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects."
        ]
    },
    {
        id: 12,
        name: "CSS",
        title: "#Lesson 12",
        desc: [
            "Introduction to CSS Positioning",
        ]
    },
    {
        id: 13,
        name: "CSS",
        title: "#Lesson 13",
        desc: [
            "CSS Flexbox",
            "What is Flexbox and why use it?"
        ]
    },
    {
        id: 14,
        name: "CSS",
        title: "#Lesson 14",
        desc: [
            "Introduction to Media Queries"
        ]
    },
    {
        id: 15,
        name: "CSS",
        title: "#Lesson 15",
        desc: [
            "Working with Figma",
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects."
        ]
    },
    {
        id: 16,
        name: "CSS",
        title: "#Lesson 16",
        desc: [
            "CSS Grid"
        ]
    },
    {
        id: 17,
        name: "CSS",
        title: "#Lesson 17",
        desc: [
            "CSS Transition / Animation / Transform",
            "Animate.css /AOS"
        ]
    },
    {
        id: 18,
        name: "CSS",
        title: "#Lesson 18",
        desc: [
            "Build a fully responsive website using HTML, CSS, and Media Queries. (Figma)",
        ]
    },
    {
        id: 19,
        name: "CSS",
        title: "#Lesson 19",
        desc: [
            "Bootstrap"
        ]
    },
    {
        id: 20,
        name: "CSS",
        title: "#Lesson 20",
        desc: [
            "Tailwind CSS"
        ]
    },
    {
        id: 21,
        name: "CSS",
        title: "#Lesson 21",
        desc: [
            "Build a fully responsive website using Tailwind CSS, AOS, Animate.css. (Figma)",
        ]
    },
    {
        id: 22,
        name: "Git/Github",
        title: "#Lesson 22",
        desc: [
            "Introduction to Git/Github",
            "Github Pages / Netlify / Vercel"
        ]
    },
    {
        id: 23,
        name: "JavaScript",
        title: "#Lesson 23",
        desc: [
            "Introduction to JavaScript",
            "Variables and Data Types – Declaring variables with var, let, const, and basic data types (String, Number, Boolean, etc.)"
        ]
    },
    {
        id: 24,
        name: "JavaScript",
        title: "#Lesson 24",
        desc: [
            "Operators – Arithmetic, comparison, and logical operators",
            "Control Structures – if, else, switch, and other conditional statements"
        ]
    },
    {
        id: 25,
        name: "JavaScript",
        title: "#Lesson 25",
        desc: [
            "Using for, while, and do-while loops for iteration.",
        ]
    },
    {
        id: 26,
        name: "JavaScript",
        title: "#Lesson 26",
        desc: [
            "String and Number methods",
            "Voca Js, Math js"
        ]
    },
    {
        id: 27,
        name: "JavaScript",
        title: "#Lesson 27",
        desc: [
            "Introduction to Array",
            "Array methods"
        ]
    },
    {
        id: 28,
        name: "JavaScript",
        title: "#Lesson 28",
        desc: [
            "Array methods (part 2)",
            "Practicing using array methods and Lodash js",
            "Swiper js"
        ]
    },
    {
        id: 29,
        name: "JavaScript",
        title: "#Lesson 29",
        desc: [
            "Working with objects, properties, and methods.",
        ]
    },
    {
        id: 30,
        name: "JavaScript",
        title: "#Lesson 30",
        desc: [
            "DOM - document object model",
            "Interacting with HTML using JavaScript, capturing and handling events.",
            "Changing HTML elements dynamically and handling user events."
        ]
    },
    {
        id: 31,
        name: "JavaScript",
        title: "#Lesson 31",
        desc: [
            "Defining functions, function types, passing parameters, and returning values.",
        ]
    },
    {
        id: 32,
        name: "JavaScript",
        title: "#Lesson 32",
        desc: [
            "Using map(), filter(), reduce(), and other array methods.",
        ]
    },
    {
        id: 33,
        name: "JavaScript",
        title: "#Lesson 33",
        desc: [
            "Interacting with HTML forms, collecting data, and working with arrays using map(), filter(), reduce() and other array methods.",
        ]
    },
    {
        id: 34,
        name: "JavaScript",
        title: "#Lesson 34",
        desc: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects."
        ]
    },
    {
        id: 35,
        name: "JavaScript",
        title: "#Lesson 35",
        desc: [
            "Prototypes, inheritance",
            "Function constructor"
        ]
    },
    {
        id: 36,
        name: "JavaScript",
        title: "#Lesson 36",
        desc: [
            "Introduction to Class",
        ]
    },
    {
        id: 37,
        name: "JavaScript",
        title: "#Lesson 37",
        desc: [
            "JSON and Web Storage",
            "Using browser storage for data persistence.",
        ]
    },
    {
        id: 38,
        name: "JavaScript",
        title: "#Lesson 38",
        desc: [
            "Asynchronous operations in JavaScript.",
            "Callback, Promise, Async/Await",
            "Introduction to Fetch API"
        ]
    },
    {
        id: 39,
        name: "JavaScript",
        title: "#Lesson 39",
        desc: [
            "XMLHttpRequest, Fetch API, Axios",
            "Making HTTP requests using Axios and Fetch, and interacting with APIs.",
            "Integrating third-party APIs (e.g., JSONPlaceholder, OpenWeather API, etc.) in real-world projects.",
        ]
    },
    {
        id: 40,
        name: "JavaScript",
        title: "#Lesson 40",
        desc: [
            "Error Handling try/catch",
            "Understanding Closure and Event Loop"
        ]
    },
    {
        id: 41,
        name: "JavaScript",
        title: "#Lesson 41",
        desc: [
            "Regular Expression"
        ]
    },
    {
        id: 42,
        name: "JavaScript",
        title: "#Lesson 42",
        desc: [
            "Chart Js",
            "GSAP animation library and ScrollTrigger usage"
        ]
    },
    {
        id: 43,
        name: "JavaScript",
        title: "#Lesson 43",
        desc: [
            "Using ES6 modules with import/export",
            "Introduction NodeJS",
            "NPM / NPX, Webpack, babel"
        ]
    },
    {
        id: 44,
        name: "React",
        title: "#Lesson 44",
        desc: [
            "Introduction to React? Why use it?",
            "Setting up a React development environment (Node.js, npm, Create React App / Vite)",
            "React components, JSX, and rendering to the DOM",
            "Basic file structure in a React project"
        ]
    },
    {
        id: 45,
        name: "React",
        title: "#Lesson 45",
        desc: [
            "Introduction to Components (Functional vs. Class Components)",
            "Props: Passing data between components",
            "Rendering Dynamic Data in JSX",
            "Understanding state in React",
            "Handling user input with 'useState'"
        ]
    },
    {
        id: 46,
        name: "React",
        title: "#Lesson 46",
        desc: [
            "Introduction to 'useState' Hook (Functional Components)",
            "Updating State and Re-rendering Components",
            "State Lifting: Passing State Between Parent and Child Components",
            "Form Handling with 'useState'",
        ]
    },
    {
        id: 47,
        name: "React",
        title: "#Lesson 47",
        desc: [
            "Lifecycle Methods in Class Components",
            "'componentDidMount', 'componentDidUpdate', 'componentWillUnmount'",
            "'useEffect' Hook in Functional Components",
            "Fetching Data with useEffect hook",
        ]
    },
    {
        id: 48,
        name: "React",
        title: "#Lesson 48",
        desc: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and projects."
        ]
    },
    {
        id: 49,
        name: "React",
        title: "#Lesson 49",
        desc: [
            "Introduction to React Context API",
            "Prop Drilling and how Context API helps"
        ]
    },
    {
        id: 50,
        name: "React",
        title: "#Lesson 50",
        desc: [
            "useRef and useReducer hooks",
            "Form Handling with `useReducer` and `useRef`",
            "Formik/Yup"
        ]
    },
    {
        id: 51,
        name: "React",
        title: "#Lesson 51",
        desc: [
            "Introduction to React Router"
        ]
    },
    {
        id: 52,
        name: "React",
        title: "#Lesson 52 (Part 2)",
        desc: [
            "React Router (part 2)"
        ]
    },
    {
        id: 53,
        name: "React",
        title: "#Lesson 53",
        desc: [
            "React.memo, PureComponent, and useMemo",
            "Code Splitting with React.lazy and Suspense",
            "Lazy Loading Components"
        ]
    },
    {
        id: 54,
        name: "React",
        title: "#Lesson 54",
        desc: [
            "Introduction to Redux and Redux Toolkit",
            "Practical Example: Building a todo list with Redux Toolkit"
        ]
    },
    {
        id: 55,
        name: "React",
        title: "#Lesson 55",
        desc: [
            "Redux Toolkit (part 2)"
        ]
    },
    {
        id: 56,
        name: "React",
        title: "#Lesson 56 (Part 3)",
        desc: [
            "Introduction to RTK Query",
            "Managing complex API interactions with RTK Query"
        ]
    },
    {
        id: 57,
        name: "React",
        title: "#Lesson 57",
        desc: [
            "Custom Hooks",
        ]
    },
    {
        id: 58,
        name: "React",
        title: "#Lesson 58",
        desc: [
            "Introduction to React I18next",
            "Setting up React I18next in a React application",
            "Practical Example: Building a multilingual application with React I18next"
        ]
    },
    {
        id: 59,
        name: "React",
        title: "#Lesson 59",
        desc: [
            "Material UI / Ant Design",
            "Setting up React I18next in a React application",
            "Practical Example: Building a multilingual application with React I18next"
        ]
    },
    {
        id: 60,
        name: "React",
        title: "#Lesson 60",
        desc: [
            "Understanding the build process in React",
            "Building React apps for production",
            "Deploying React apps to platforms like Netlify, Vercel, or GitHub Pages",
        ]
    },
    {
        id: 61,
        name: "React",
        title: "#Lesson 61 (Optional)",
        desc: [
            "Stripe.js"
        ]
    },
    {
        id: 62,
        name: "React",
        title: "#Lesson 62 (Optional)",
        desc: [
            "Stripe.js (part 2)"
        ]
    }
    
]







