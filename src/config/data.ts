export const skills = {
    css: {
        label: 'CSS',
        color: '#264de4',
        textColor: '#fff',
    },
    html: {
        label: 'HTML',
        color: '#e34c26',
        textColor: '#fff',
    },
    javascript: {
        label: 'JavaScript',
        color: '#f0db4f',
        textColor: '#000',
    },
    typescript: {
        label: 'TypeScript',
        color: '#007acc',
        textColor: '#fff',
    },
    react: {
        label: 'React',
        color: '#61dafb',
        textColor: '#000',
    },
    redux: {
        label: 'Redux',
        color: '#764abc',
        textColor: '#fff',
    },
    nodejs: {
        label: 'Node.js',
        color: '#68a063',
        textColor: '#fff',
    },
    express: {
        label: 'Express',
        color: '#000000',
        textColor: '#fff',
    },
    mongodb: {
        label: 'MongoDB',
        color: '#13aa52',
        textColor: '#fff',
    },
    postgresql: {
        label: 'PostgreSQL',
        color: '#336791',
        textColor: '#fff',
    },
    sass: {
        label: 'Sass',
        color: '#c69',
        textColor: '#fff',
    },
    figma: {
        label: 'Figma',
        color: '#ff7262',
        textColor: '#fff',
    },
    node: {
        label: 'Node.js',
        color: '#68a063',
        textColor: '#fff',
    },
    i18next: {
        label: 'i18next',
        color: '#178d80',
        textColor: '#fff',
    },
};

export const data = {
    fullName: 'Willy Emanuel Antunez Gonzales',
    shortName: 'Willy Antunez',
    email: 'willyantunezg@gmail.com',
    phone: '+504 88908796',
    whatsapp: '50488908796',
    linkedin: 'https://www.linkedin.com/in/willy-antunez/',
    github: 'https://github.com/WillyAntunez/',
    workExperience: [
        {
            company: 'Smart Insight Solutions',
            startDate: '2023',
            endDate: '2024',
            jobTitle: {
                en: 'Frontend Developer',
                es: 'Desarrollador Frontend',
            },
            jobDescription: {
                es: 'En este trabajo yo participaba de forma colaborativa con otros miembros del equipo de desarrollo para diseñar y programar interfaces de aplicaciones web a medida para varios proyectos de la empresa y sus clientes.',
                en: 'In this job I participated collaboratively with other members of the development team to design and program custom web application interfaces for various projects of the company and its clients.',
            },
            logo: '/assets/images/logos/smart-insight-solutions.png',
        },
    ],
    projects: [
        {
            image: '/assets/images/projects/this-portfolio.png',
            title: {
                en: 'This Portfolio',
                es: 'Este Portfolio',
            },
            description: {
                en: 'This portfolio is a personal project made with React, Typescript and SCSS, responsive and multi-language.',
                es: 'Este portfolio es un proyecto personal hecho con React, Typescript y SCSS, responsive y multi-idioma.',
            },
            url: 'https://github.com/WillyAntunez/w-portfolio',
            tags: [
                skills.javascript,
                skills.typescript,
                skills.react,
                skills.css,
                skills.html,
                skills.sass,
                skills.i18next,
            ],
        },
        {
            image: '/assets/images/projects/spotify-remake.png',
            title: {
                en: 'Spotify clone',
                es: 'Spotify clon',
            },
            description: {
                en: 'An exact clone of the spotify web player made in React, Typescript and SCSS',
                es: 'Un clon exacto del reproductor web de spotify hecho en React, Typescript y SCSS',
            },
            url: 'https://willyantunez.github.io/spotify-remake/#/search',
            tags: [
                skills.javascript,
                skills.typescript,
                skills.react,
                skills.css,
                skills.html,
                skills.sass,
            ],
        },
        {
            image: '/assets/images/projects/my-first-portfolio.png',
            title: {
                en: 'My first Portfolio',
                es: 'Mi primer Portafolio',
            },
            description: {
                en: 'My first portfolio made with HTML, CSS, SASS and React.js',
                es: 'Mi primer portafolio hecho con HTML, CSS, SASS y React.js',
            },
            url: 'https://willyantunez.github.io/willy-antunez-portfolio/',
            tags: [
                skills.javascript,
                skills.react,
                skills.css,
                skills.html,
                skills.sass,
            ],
        },
        {
            image: '/assets/images/projects/pokedex.png',
            title: {
                en: 'Pokedex',
                es: 'Pokedex',
            },
            description: {
                en: 'A simple Pokedex made with Vanilla Javascript based on a Figma design.',
                es: 'Una simple Pokedex hecha con Javascript puro basado en un diseño en Figma.',
            },
            tags: [skills.javascript, skills.css, skills.html, skills.figma],
            url: 'https://willyantunez.github.io/pokedex/',
        },
    ],
    technicalSkills: {
        frontend: [
            {
                label: 'HTML',
                percentage: 90,
            },
            {
                label: 'CSS',
                percentage: 90,
            },
            {
                label: 'Sass',
                percentage: 90,
            },
            {
                label: 'JavaScript',
                percentage: 90,
            },
            {
                label: 'TypeScript',
                percentage: 90,
            },
            {
                label: 'React',
                percentage: 90,
            },
            {
                label: 'Redux',
                percentage: 80,
            },
            {
                label: 'Material Ui',
                percentage: 90,
            },
        ],

        backend: [
            {
                label: 'Node.js',
                percentage: 80,
            },
            {
                label: 'TypeScript',
                percentage: 90,
            },
            {
                label: 'Express',
                percentage: 80,
            },

            {
                label: 'Sequelize',
                percentage: 80,
            },
            {
                label: 'Mongoose',
                percentage: 80,
            },
            {
                label: 'MongoDB',
                percentage: 80,
            },
            {
                label: 'PostgreSQL',
                percentage: 70,
            },
        ],

        design: [
            {
                label: 'Figma',
                percentage: 70,
            },
            {
                label: 'Photoshop',
                percentage: 60,
            },
            {
                label: 'Illustrator',
                percentage: 60,
            },
        ],

        other: [
            {
                label: 'Microsoft Office',
                percentage: 70,
            },
            {
                label: 'Git',
                percentage: 90,
            },
            {
                label: 'Scrum',
                percentage: 50,
            },
            {
                label: 'GitHub',
                percentage: 90,
            },
            {
                label: 'Bitbucket',
                percentage: 80,
            },
            {
                label: 'Jira',
                percentage: 70,
            },
        ],
    },
};
