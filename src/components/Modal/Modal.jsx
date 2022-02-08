import { useEffect } from "react";
import { motion } from "framer-motion";
import { stateLogger } from "../../stateLogger";
import Backdrop from "../Backdrop/Backdrop";
import './modal.css'

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text, desc, stackList, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          
          <ModalText text={text} desc={desc}/>
          <ModalStack stackList={stackList}/>
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
     
{/* 
      {type === "flip" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "newspaper" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={newspaper}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "badSuspension" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={badSuspension}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />

          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "gifYouUp" && (
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          style={{
            padding: 0,
            height: "auto",
            width: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3
            style={{
              color: "#ffaa00",
              textTransform: "none",
              fontWeight: 400,
              margin: "auto auto auto 0",
              fontFamily: "Montserrat",
              fontSize: "150%",
            }}
          >
            Tap x2 to close
          </h3>
          <motion.img
            alt=""
            onDoubleClick={handleClose}
            drag
            // src="https://i.giphy.com/media/O5ac76MtFGPHG/giphy.gif"
            // src="https://i.giphy.com/media/jmS6YojdAaYw5z1LHi/giphy.gif"
            src="https://i.giphy.com/media/hhgAbqQpm49vW/giphy.gif"
            style={{
              margin: "0 auto auto auto",
              maxHeight: "40vh",
              height: "40vh",
              width: "auto",
              objectFit: "cover",
              borderRadius: "6px",
              zIndex: 1000,
            }}
          />
        </motion.div>
      )} */}
    </Backdrop>
  );
};

const ModalText = ({ text, desc }) =>{
   return (
  <div className="modal-text">
    <h4 className="ps__highlight">{text}</h4>
    <h5 className="ps__highlight">{desc}</h5>
  </div>
)};

const ModalStack = ({stackList}) =>{
  return (
    <div className="ps__header-content__people">
    <p>Tech:</p>
    { stackList.map(item =>
    <img alt="item" src={item} />)}
</div>
)};

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;