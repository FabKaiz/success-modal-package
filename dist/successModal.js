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
const SuccessModal = ({
  text,
  isSuccessModalOpen,
  setIsSuccessModalOpen,
  hasTransitionedIn
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `modal-overlay ${hasTransitionedIn && 'in'} ${isSuccessModalOpen ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `success-modal animated ${hasTransitionedIn && 'in'} ${isSuccessModalOpen && 'active'}`
  }, /*#__PURE__*/React.createElement("p", null, text), /*#__PURE__*/React.createElement("span", {
    onClick: () => setIsSuccessModalOpen(false),
    className: "modal-close-text"
  }, "Close")));
};
export default SuccessModal;