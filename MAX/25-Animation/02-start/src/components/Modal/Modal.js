import React from "react";
import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

// const modal = (props) => {
//   return (
//     <Transition
//       mountOnEnter
//       unmountOnExit
//       in={props.show}
//       timeout={{ enter: 300, exit: 1000 }}
//     >
//       {(state) => {
//         const cssClass = [
//           "Modal",
//           state === "entering"
//             ? "ModalOpen"
//             : state === "exiting"
//             ? "ModalClose"
//             : null,
//         ];
//         return (
//           <div className={cssClass.join(" ")}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//               Dismiss
//             </button>
//           </div>
//         );
//       }}
//     </Transition>
//   );
// };
// export default modal;

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={{ enter: 300, exit: 1000 }}
      // classNames="fade-slide"
      classNames={{
        eneter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
