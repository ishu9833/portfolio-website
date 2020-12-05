import React from 'react';
import { motion } from 'framer-motion'
//import { Link } from 'react-router-dom'

//sfc: stateless functional comp (shortcut)
import tie from '../images/tie.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import max from '../images/ishtiaque.jpg'
import pin from '../images/pin.svg'
import github from '../images/github.svg'
import resume from '../CV_ARIF.pdf'
const SideBar = () => {
    var sidebarVariants = {
        initial: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5, type: 'spring' }
        }
    }
    const handleSentEmail = () => window.open('mailto:arifistiak.133@gmail.com');
    // const changeMode = () => {
    //     document.querySelector('.')
    // }

    return (

        <motion.div className="sideBar_custom"
            variants={sidebarVariants}
            initial='initial'
            animate='visible'
        >
            <img src={max} alt="avatar" className="rounded-circle image_custom" />
            <h3 className='name'><span>Arif</span> Ishtiaque</h3>
            <div className="title bg-gray side_item">Front-end web developer</div>
            <a href={resume} download="resume.pdf">
                <div className="cv side_item"><img src={tie} alt="resume" className='icon_small' /> download resume</div></a>
            <figure className='social_icons'>
                <a href="https://www.facebook.com/ishtiaquemybrain"><img src={facebook} alt="facebook" className='icon_small social_icon' /></a>
                <a href="https://www.linkedin.com/in/kazi-md-arif-ishtiaque-205636200/"><img src={instagram} alt="instagram" className='icon_small social_icon' /></a>
            </figure>
            <div className="contact">
                <div className="location side_item"><img src={pin} alt="pin" className='icon_small  mr-1' />Dhaka, Bangladesh</div>
                <a href="https://github.com/ishu9833"><div className="github side_item"> <img src={github} alt="git" className='icon_small social_icon mr-1' />  github </div></a>
                <div className="email_id side_item"> ishtiaqnazib.266@gmail.com </div>
                <div className="phone side_item"> +8801747-109833 </div>

            </div>

            <div className="email side_item mt-6" onClick={handleSentEmail}> email me </div>
            {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
        </motion.div >


    )
}

export default SideBar;