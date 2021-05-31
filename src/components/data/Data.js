//Home page
export const recentData = [
  {
    id: 'job',
    desc: 'Currently I am working as an after school program leader for children in Los Angeles, California. I assist with learning and providing after school enrichment activities to  contribute to their future success and potential.',
    img: 'images/drawing.jpeg',
  },
  {
    id: 'volunteer',
    desc: 'I am also volunteering my time to help develop a health directory for the LGBTQ community in Boulder, Colorado. In conjunction with volunteering, I am learning Node.js, Express.js, and how to collaborate with others.',
    img: 'images/directory.jpeg',
  } 
];

//About page
export const aboutData = [
  {
    id: 'interest',
    desc: "These were some reminders that helped my journey as a developer. It helps me to stay humble and it reminds me that if I am unable to complete a task I can improve and be able to complete to solve it in the future.",
    img: 'images/self.jpeg',
  },   
  {
    id: 'hobby',
    desc: 'On my spare time I like to watch documentary series and stand up comedy on Netflix. I also like to spend time with friends and play video games on the Nintendo Switch.',
    img: 'images/vg.jpeg'
  }
];

//Project page
export const portfolioData = [
  {
    name: 'Health-Directory',
    id: 'Directory',
    desc: "The health directory is a project built on React and React Router. This is a volunteer group I had joined to better and expand my skills as a developer, while giving back to the community. However the source code is not available to the public and is targeted to be hosted during the summer.",
    img: 'images/directory.jpeg',
    link: '#',
    site: '#'
  }, 
  {
    name: 'Image-gallery',
    id: 'Gallery',
    desc: 'The image gallery website that displays images with a modal window. Its also a re-write of the original project which utilized J-query plugins, while this new site uses HTML, CSS, and Javascript.',
    img: 'images/gallery.jpeg',
    link: 'https://github.com/DanielekPark/Img_gallery',
    site: 'https://danielekpark.github.io/Img_gallery/'    
  },
  {
    name: 'React Rsvp',
    id:'rsvp',
    desc: `Built with React, it keeps track of confirmed guests and unconfirmed guests. The original project was built by Team Treehouse which utilized class components.`,
    img: 'images/rsvp.jpeg',
    link: 'https://github.com/DanielekPark/rsvpreact/tree/master',
    site: 'https://danielekpark.github.io/rsvpreact/'
  }
];

//Resume page
export const volunteerData = [
  {
    id: 'health-directory',
    title: 'Out Boulder LGBTQ Health Directory / Boulder County, Co (Remote)',
    date: 'Front end junior developer/volunteer Feb 2021–Present',
    li1: 'Volunteered as a part of a 4-member team to improve and add features for a health directory.',
    li2: 'Identified and implemented solutions for multiple CSS bugs for improved layout.',
    li3: 'Managed CSS maintenance by converting older files to CSS modules for improved site performance.',
    li4: 'Implemented new navigation features with React.js for easier user experience.'
  }
];

export const workData = [
  {
    id: 'after-school',
    title: 'Think Together/ Los Angeles, Ca (Remote)',
    date: 'Program Leader Oct 2020–Present', 
    li1: 'Provided academic assistance for elementary students to improve reading and comprehension.',
    li2: 'Collaborated with co-workers to promote clubs, implement and create new activities to improve low attendance.'
  }
];

export const projectsData = [
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    link: 'https://danielekpark.github.io/Img_gallery/',
    desc: 'Utilized HTML, CSS, and Javascript to construct a mobile first responsive photo displaying website which allows users to view small and big images.',
    li1: 'Improved site performance of an older project by replacing J-query plugins with a new script. ',
    li2: 'Reduced server calls, by using fewer site images.'
  },
  {
    id: 'rsvp-app',
    title: 'React Rsvp',
    link: 'https://danielekpark.github.io/rsvpreact/',
    desc: 'An application built with React, which keeps track of invited guests and provides visual feedback of unconfirmed guests.',
    li1: 'Improved site performance of an original project by refactoring class based components with React hooks.',
    li2: 'Provided a new feature with alerts when users edited their names and also prevented users from adding empty entries.'
  }
]