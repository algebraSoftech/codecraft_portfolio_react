import discord from "../assets/collaboration/discord.png";
import figma from "../assets/collaboration/figma.png";
import framer from "../assets/collaboration/framer.png";
import notion from "../assets/collaboration/notion.png";
import photoshop from "../assets/collaboration/photoshop.png";
import protopie from "../assets/collaboration/protopie.png";
import raindrop from "../assets/collaboration/raindrop.png";
import slack from "../assets/collaboration/slack.png";
import Image1 from "../assets/Screenshot 2024-08-18 013513.png";
import Expence_img_1 from "../assets/Project Image/Screenshot 2024-09-12 133631.png";
import Expence_img_2 from "../assets/Project Image/Screenshot 2024-09-12 133659.png";
import Gym_fit_1 from "../assets/Project Image/Gym-fit-1.png";
import Gym_fit_2 from "../assets/Project Image/Gym-fit-2.png";
import Real_Estate_1 from "../assets/Project Image/Real-estate-image.png";
import Real_Estate_2 from "../assets/Project Image/Real-estate-image2.png";
import Dr_appointment_1 from "../assets/Project Image/Screenshot 2025-07-15 141835.png";
import Dr_appointment_2 from "../assets/Project Image/Screenshot 2025-07-15 141857.png";

export const collabText =
  "With expertise in modern frameworks and meticulous attention to detail, it's the perfect choice for businesses seeking a skilled frontend developer.";

export const collabContent = [
  {
    id: "0",
    title: "Complete Full-Stack Web Application Development",
    text: "We handle everything — UI/UX, backend logic, database design, and production deployment.",
  },
  {
    title: "Experts in MERN Stack & Modern Technologies",
    text: "React, Next.js, Node.js, Express, MongoDB, TailwindCSS — we build fast and scalable digital products.",
  },
  {
    id: "2",
    title: "Secure, Fast & Production-Ready Systems",
    text: "Authentication, dashboards, REST APIs, admin panels, automation, cloud deployment & more.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const ProjectData = [
  {
    id: 1,
    projectName: "Doctor Appointment",
    image1: Dr_appointment_1,
    image2: Dr_appointment_2,
    description:
      "The Doctor Appointment Booking System allows users to register, log in, view available doctors, and book appointments based on date and time. Users can also view, cancel, or track the status of their appointments. Doctors can create accounts, log in, view upcoming bookings, and mark appointments as completed or canceled. Both users and doctors have separate dashboards to manage their interactions. The system uses secure authentication and maintains appointment statuses like pending, completed, and canceled. This system simplifies the scheduling process, ensures better communication between patients and doctors, and enhances the overall efficiency of managing medical consultations.",
    githubLink:
      "https://github.com/vinay8962/dr_appointment_booking_frontend.git",
    liveLink: "https://dr-appointment-booking.netlify.app",
    language: [
      "React",
      "Tailwind Css",
      "Node.js",
      "Express",
      "MongoDB",
      "Json Data",
    ],
    featured: true,
    stars: 120,
    forks: 45,
    views: 1500,
  },
  {
    id: 2,
    projectName: "Real Estate",
    image1: Real_Estate_1,
    image2: Real_Estate_2,
    description:
      "This real estate website template offers a sleek and responsive design, featuring animated property listings, detailed agent profiles, and interactive location maps. Built with React, Tailwind CSS, and Framer Motion, it provides smooth transitions, hover effects, and a clean UI for an engaging user experience. The template includes a property details page with high-quality images, pricing, descriptions, and contact forms, ensuring a seamless browsing experience across all devices. Perfect for showcasing luxury homes, apartments, and commercial properties, this modern design enhances user engagement and boosts property visibility. 🚀🏡",
    githubLink: "https://github.com/vinay8962/real-estate-project.git",
    liveLink: "https://real-estate-892.netlify.app/",
    language: ["React", "Tailwind Css", "Framer Motion", "Json Data"],
    featured: false,
    stars: 80,
    forks: 30,
    views: 900,
  },
  {
    id: 3,
    projectName: "Expence Tracker",
    image1: Expence_img_1,
    image2: Expence_img_2,
    description:
      "I designed and developed a comprehensive expense tracker application using React.js, Tailwind CSS, and Chakra UI. The application allows users to easily add and categorize their expenses, boosting engagement and management. I implemented a shared expenses feature for collaborative management with friends and integrated a doughnut chart to provide users with visual insights into their spending habits. By applying responsive design principles, I ensured the application is mobile-friendly and accessible across various devices. The use of Chakra UI and Tailwind CSS enhanced the UI/UX, resulting in a visually appealing and user-friendly interface.",
    githubLink: "https://github.com/vinay8962/expense-tracker.git",
    liveLink: "https://Expence_tracker.com",
    language: [
      "React",
      "Redux Toolkit",
      "Redux Saga",
      "Tailwind Css",
      "Chakra Ui",
      "Chart Js",
    ],
    featured: true,
    stars: 200,
    forks: 60,
    views: 2500,
  },
  {
    id: 4,
    projectName: "Gym-Fit",
    image1: Gym_fit_1,
    image2: Gym_fit_2,
    description:
      "I have developed a gym and fitness website featuring trainer profiles with their expertise and certifications, a timetable for class schedules to help users plan workouts, a blog section offering fitness tips and health advice, and detailed descriptions of courses to guide users in selecting the right training programs.",
    githubLink: "https://github.com/vinay8962/gym_template.git",
    liveLink: "https://gym-fit-8768.netlify.app/",
    language: ["HTML", "CSS", "JavaScript"],
    featured: false,
    stars: 55,
    forks: 20,
    views: 700,
  },
  // {
  //   id: 5,
  //   projectName: "E-library",
  //   image1: Image1,
  //   image2: "https://via.placeholder.com/150",
  //   description:
  //     "A task management tool that helps users organize and track their daily tasks, with the ability to set reminders and mark tasks as complete.",
  //   githubLink: "https://github.com/username/task-manager",
  //   liveLink: "https://task-manager-demo.com",
  //   language: ["JavaScript", "React", "Redux"],
  // },
  // {
  //   id: 6,
  //   projectName: "E-commerce Platform",
  //   image1: Image1,
  //   image2: "https://via.placeholder.com/150",
  //   description:
  //     "An e-commerce platform that allows users to browse products, add them to the cart, and proceed with checkout. It includes payment integration and order tracking.",
  //   githubLink: "https://github.com/username/ecommerce-platform",
  //   liveLink: "https://ecommerce-platform-demo.com",
  //   language: ["JavaScript", "React", "Node.js", "Express"],
  // },
];
