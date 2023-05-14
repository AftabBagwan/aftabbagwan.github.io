// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Aftab",
  logo_name: "aftab.b()",
  nickname: "aftab / codex",
  full_name: "Aftab Bagwan",
  subTitle:
    "Full Stack Flutter Developer, Problem Solving Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1lHWqvAwqwnu-RndhlE6sGbXQ8WFMrqb7/view?usp=sharing",
  mail: "mailto:aftabbagwan9886@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/AftabBagwan",
  linkedin: "https://www.linkedin.com/in/aftab-bagwan-04142518b/",
  gmail: "aftabbagwan9886@gmail.com",
  leetcode: "https://leetcode.com/aftabbagwan/",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/aftabbagwan9886",
  hackerrank: "https://www.hackerrank.com/aftabbagwan9886",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications.",
        "⚡ Developing mobile applications using Flutter and Android.",
        "⚡ Creating application with backend in Firebase.",
        "⚡ Integration of third party services such as Firebase/ Digital Ocean.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ramrao Adik Institute Of Technology",
      subtitle: "Bachelor in Electronics and Telecommunications",
      logo_path: "rait.svg",
      alt_name: "SSEC",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my ET Engineering course. ",
        "⚡ Lead team of 5 members for smart india hackathon.",
      ],
      website_link: "http://www.rait.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Red Hat System Administration",
      subtitle: "Red Hat Academy",
      logo_path: "red_hat.png",
      certificate_link:
        "https://drive.google.com/file/d/1T7FyZnMW85ddEQdBy9EJgQQd_D31cojL/view?usp=sharing",
      alt_name: "Red Hat Academy",
      color_code: "#47A048",
    },
    {
      title: "30 Days Of Google Cloud Program",
      subtitle: "Google Cloud Platform",
      logo_path: "google_cloud.png",
      certificate_link:
        "https://drive.google.com/file/d/14DQUcuN09GOWI7sUUgRQ0Cw0TAl3gyqX/view?usp=sharing",
      alt_name: "Google Cloud Platform",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed an internship. I've mostly done projects on my own only.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Mobile Application Developer (Intern)",
          company: "Sublime Technologies",
          company_url: "https://sublimetechnologies.in",
          logo_path: "sublime.png",
          duration: "Feb 2022 - July 2022",
          location: "Remote",
          description: `Designed, implemented, and tested Flutter and Dart code foriOS, Android and Web.
          Designed and created customs e-form features including scrolling selectors and data entries.
          Utilized custom APIs in applications.
          Utilized Firebase for user authentication, storage, and real-time database.
          Supported other team members initiative by developing solutions to common problems and sharing those solutions.`,
          color: "#0071C5",
        },
        {
          title: "Software Developer (Intern)",
          company: "Nelumbus Technologies",
          company_url: "https://www.nelumbustech.com",
          logo_path: "nelumbus.png",
          duration: "Oct 2020 - Jan 2021",
          location: "Remote",
          description: `Developed cross platform applications using Flutter and Firebase.
          Worked closely with the Project Manager and Team Leads on change request
          functions.
          Analyzed userrequirements, and translated client needs into application design.
          Worked on bug fixing and improving application performance.
          Leveraged technical knowledge and skills to contribute to the success of the
          project and the company.`,
          color: "#0071C5",
        },
        {
          title: "Software Developer (Intern)",
          company: "RAIT-ACM",
          company_url: "https://rait.acm.org",
          logo_path: "acm.png",
          duration: "June 2020 - Aug 2020",
          location: "Navi Mumbai",
          description: `Increased productivity and problem-solving technics.
          Developed mobile based applications backed by firebase.
          I worked on the Weather forecase project which helps users track the weather condition.
          `,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "RAIT ACM Volunteer",
          company: "Association for Computing Machinery",
          company_url: "https://www.acm.org",
          logo_path: "acm.png",
          duration: "Aug 2019 - Jun 2022 ",
          location: "Navi Mumbai",
          description:
            `Contributed to the development and implementation of the organization’s goals and objectives.
            Collaborated with other committee members to plan and execute technical workshops, seminars, and competitions.
            Acted as a mentor and guide to new members, helping them to get involved and take on leadership roles.
            Assisted in promoting the organization and its events to the college community and beyond.`,
          color: "#D83B01",
        },
        {
          title: "Social Wing RAIT Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Aug 2019 - Present",
          location: "Navi Mumbai",
          description:
            `Volunteered in restoring environmental balance by strategizing, planning, and implementing several afforestation activities in the campus.
            Helped to raise funds and awareness for various social causes and made a positive impact in the community.
            Contributed to the growth and success of the social wing by implementing new ideas and initiatives.`,
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create projects based on flutter and firebase. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aftab.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Happiness Captured",
      url: "https://github.com/AftabBagwan/Happiness-Captured",
      description:
        "Mobile based SOS system, designed to lend a helping hand based on user's location.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Stree App",
      url: "https://github.com/AftabBagwan/Womens-Health",
      description:
        "Provide any help that women may need for their overall wellbeing including enhancing their social status by removing taboos and derelicts.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "login_magic_sdk",
      url: "https://github.com/AftabBagwan/Login-Using-Magic-Flutter-",
      description:
        "A simple flutter based application uses magic sdk for passwordless login.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "3",
      name: "chat_with_stream",
      url: "https://github.com/AftabBagwan/Chat-Application-With-Stream",
      description: "A Chat application using Stream SDK.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "4",
      name: "aftabbagwan.github.io",
      url: "https://github.com/AftabBagwan/aftabbagwan.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "5",
      name: "Scientific Calculator",
      url: "https://github.com/AftabBagwan/Calculator",
      description: "A scientific calculator app using flutter framework.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
