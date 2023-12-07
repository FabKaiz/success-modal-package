import React, { useState } from 'react';
import { render } from "react-dom";
import SuccessModal from "./lib/successModal";
import useMountTransition from "./lib/useMountTransition";
const App = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  /*
   * Animates the modal in and out of the DOM,
   * make sure that the unmountDelay is that same as the transition duration in the SCSS
   * * *
   * @param {boolean} isSuccessModalOpen - Whether the modal is open or not
   * @param {number} unmountDelay - The delay in ms before the modal is unmounted
   * * *
   *
  * */
  const hasTransitionedIn = useMountTransition(isSuccessModalOpen, 500);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsSuccessModalOpen(true)
  }, "Open Modal"), (hasTransitionedIn || isSuccessModalOpen) && /*#__PURE__*/React.createElement(SuccessModal, {
    text: "Modal open!",
    isSuccessModalOpen: isSuccessModalOpen,
    setIsSuccessModalOpen: setIsSuccessModalOpen,
    hasTransitionedIn: hasTransitionedIn
  }));
};
render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));