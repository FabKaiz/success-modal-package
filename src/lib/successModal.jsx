import './successModal.scss';

/*
  @params text: string - text to display in modal
  @params isSuccessModalOpen: boolean - state to determine if modal is open
  @params setIsSuccessModalOpen: function - function to set state of modal
  @params hasTransitionedIn: boolean - state to determine if modal has transitioned in with the custom useMountTransition hook
  @returns JSX
  * * *
  See more on useMountTransition hook in useMountTransition.jsx
*/
const SuccessModal = ({ text, isSuccessModalOpen, setIsSuccessModalOpen, hasTransitionedIn }) => {
  return (<div className={`modal-overlay ${hasTransitionedIn && 'in'} ${isSuccessModalOpen ? 'active' : ''}`}>
    <div className={`success-modal animated ${hasTransitionedIn && 'in'} ${isSuccessModalOpen && 'active'}`}>
      <p>{text}</p>
      <span onClick={() => setIsSuccessModalOpen(false)} className="modal-close-text">Close</span>
    </div>
  </div>);
};

export default SuccessModal;