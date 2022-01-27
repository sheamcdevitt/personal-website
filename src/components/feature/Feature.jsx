import React,{useState} from 'react'
import './feature.css'
import Modal from '../Modal/Modal'
import { motion, AnimatePresence } from 'framer-motion'




const Feature = ({ title,subtitle,year, text,link,id,desc }) => {

  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return(
    <div id={id} className="ps__features-container__feature">
      <div className="ps__features-container__feature-title"><h1>{title}</h1>
        <div />
        
      </div>
      <div className="ps__features-container__feature-year">
        <h3>{year}</h3>
        </div>
          <div className="ps__features-container_feature-text">
          <a href={link} > <h2 className='link_animation'>{subtitle}</h2></a>
              <p>{text}</p>
        </div>
        <div className="ps__features-container__feature-learn">
          <motion.button 
            whileHover={{scale: 1.1}} 
            whileTap={{scale: 0.9}} 
            onClick={() => modalOpen ? close() : open()}
            className="save-button">
              Learn More
            </motion.button>
            <AnimatePresence initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}>
              {modalOpen && <Modal desc={desc} text={subtitle} modalOpen={modalOpen} handleClose={close}/> }
            </AnimatePresence>
           
        </div>
        
    </div>
  )};

export default Feature
