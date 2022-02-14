import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className="w-full h-full absolute z-30 flex justify-center items-center">
          <div
            onClick={closeModal}
            ref={modalRef}
            className="fixed w-full h-full top-0 bg-opacity-70 bg-gray-200 cursor-pointer"
          ></div>
          <animated.div style={animation}>
            <div className="max-w-[800px] shadow-lg bg-white rounded-xl">
              {children}
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
