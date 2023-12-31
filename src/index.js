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

  return (
      <>
        <button onClick={() => setIsSuccessModalOpen(true)}>
          Open Modal
        </button>
        {(hasTransitionedIn || isSuccessModalOpen) &&
            <SuccessModal
                text='Modal open!'
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                hasTransitionedIn={hasTransitionedIn}
            />}
      </>
  )
}

render(<App />, document.getElementById("root"));
