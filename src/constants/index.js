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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Social Media Manager",
    icon: web,
  },
  {
    title: "NFT Smart Contract Developer",
    icon: mobile,
  },
  {
    title: "Web3 Application Developer",
    icon: backend,
  },
  {
    title: "Social Media Content Manager",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Social Media Manager",
    company_name: "ScrollSequence",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Managing social media accounts including Facebook, Twitter, Instagram, and LinkedIn.",
      "Building and executing marketing strategies to increase engagement, followers, and drive traffic to the website.",
      "Creating social media content including graphics, videos, and blog posts, and scheduling posts to ensure a consistent presence on social media platforms.",
    ],
  },
  {
    title: "NFT Developer",
    company_name: " Amsterdam Books Netherlands",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Develop and implement Baudet vs Schwab NFT's concept ideation, smart contract development",
      "Design and Development of web-based platforms for NFT minting and trading.",
      "Work with project stakeholders to ensure NFT projects align with business objectives and brand image.",
      "Collaborate with cross-functional teams, including designers, developers, and blockchain experts, to deliver high-quality NFT projects and website development.",
      "Troubleshoot and resolve technical issues related to NFT project development and minting website functionalities.",
    ],
  },
  {
    title: "Freelance Social Media Content Manger",
    company_name: "Fiverr.com",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing a comprehensive social media strategy for clients that aligns with their business goals and target audience.",
      "Creating engaging and visually appealing social media content, including graphics, videos, and text-based posts.",
      "Managing and scheduling social media content across various platforms, including Facebook, Instagram, Twitter, LinkedIn, and more.",
      "Conducting research on industry trends and staying up-to-date with the latest social media best practices and algorithms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Umar for any social media management job. I have had the pleasure of working with Umar and have been consistently impressed by his professionalism, attention to detail, and creativity.",
    name: "Aleš Kozelský",
    designation: "CEO",
    company: "ScrollSequence",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "I recently had the pleasure of working with Umar on an NFT project development for our company, Amsterdam books. Umar's knowledge and expertise in the field of NFTs were exceptional, and his ability to guide us through the entire development process was highly impressive.",
    name: "Chhay Lin Lim",
    designation: "CFO",
    company: "Amsterdam Books Netherlands",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "Umar's creativity and attention to detail were top-notch, and he was able to translate our brand's message into visually stunning designs that truly captured our audience's attention. I highly recommend Umar for any social media content design needs, and I look forward to working with him again in the future.",
    name: "Rpscaffidi",
    designation: "CEO",
    company: "FL-Accounting LLC",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Staking Website",
    description:
      "Web-based NFT staking platform that allows you to earn ERC20 tokens by staking your NFTs for a set period of time. Simply connect your Ethereum wallet, stake your eligible NFTs, and earn ERC20 tokens based on the length of time and rarity of your NFTs. After the staking period, unlock your NFTs and claim your tokens",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "etherjs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://amg-nft.com/",
  },
  {
    name: "Social Media Channel Managment",
    description:
      "As a freelance social media manager, I recently completed a project focused on content management, account growth strategies, and brand marketing. Through a mix of influencer outreach, paid advertising, and engaging content creation, we were able to help the client increase their online visibility and drive conversions.",
    tags: [
      {
        name: "canva",
        color: "blue-text-gradient",
      },
      {
        name:"hootsuite",
        color: "green-text-gradient",
      },
      {
        name: "facebook",
        color: "pink-text-gradient",
      },
      {
        name: "instagram",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.fiverr.com/share/xPQ0G1",
  },
  {
    name: "Social Media Content Design",
    description:
      "I was my recent worked on Fiverr.com its a  project focused on creating visually engaging posts and informative copywriting. By developing a consistent visual style and content calendar, we were able to help the client build brand awareness and increase engagement",
    tags: [
      {
        name: "Canva",
        color: "blue-text-gradient",
      },
      {
        name: "shorts/reels",
        color: "green-text-gradient",
      },
      {
        name: "postsdesign",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.fiverr.com/users/um_pak",
  },
];

export { services, technologies, experiences, testimonials, projects };
