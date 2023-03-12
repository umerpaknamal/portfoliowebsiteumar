import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>About Me </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[19px] max-w-5xl leading-[30px]'
      >
        As a Social Media Manager and Web3 Developer, 
        I bring a unique skill set to the table. <br /><br />
        I am an expert in Social Media Content Management and Marketing with 02 year experience 
        working on various freelance plateforms and i am very passoniate about 
        helping businesses build their online presence and increase their brand awareness.
        <br />
        <br />
        Additionally, I am proficient in Smart Contract Development with Solidity 
        and Dapp Development with React Js, specializing in NFT minting Site , Stacking Plateform, and DAOs development.<br />
        <br />
        With my technical expertise and experience in blockchain technology, I can help businesses leverage the power of decentralized applications to revolutionize their operations. Whether you need help with social media marketing or building a decentralized application, I have the expertise to bring your ideas to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
