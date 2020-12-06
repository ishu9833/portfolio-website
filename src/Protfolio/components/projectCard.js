import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import github from '../images/github.svg';
import pin from '../images/external-link-symbol.svg';
import { Link } from "react-router-dom";

const ProjectCard = ({ image, name, url, description, gitUrl }) => {
  const projectCardVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="col-sm-12 col-md-6 col-lg-4 mt-2"
        variants={projectCardVariants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <figure className="project_wrapper">
          <Link to="/">

            <img src={image} alt="project_image" className="project_image" />
            
          </Link>
          
          <div className="project_name mt-2 row d-flex justify-content-around text-center">
            <a href={gitUrl}>
              <img src={github} alt="github" className='icon_small social_icon mr-1' />
            </a>
            
            <div className=" project_name mt-1">{name}</div>
            <a href={url}>
              <img src={pin} alt="pin" className='icon_small social_icon mr-1' />
            </a>
          </div>
        </figure>
      </motion.div>
    </AnimatePresence>
  );
};
export default ProjectCard;
