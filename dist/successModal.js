"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./successModal.scss");
var _jsxRuntime = require("react/jsx-runtime");
/*
  @params text: string - text to display in modal
  @params isSuccessModalOpen: boolean - state to determine if modal is open
  @params setIsSuccessModalOpen: function - function to set state of modal
  @params hasTransitionedIn: boolean - state to determine if modal has transitioned in with the custom useMountTransition hook
  @returns JSX
  * * *
  See more on useMountTransition hook in useMountTransition.jsx
*/const SuccessModal = _ref => {
  let {
    text,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    hasTransitionedIn
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-overlay ".concat(hasTransitionedIn && 'in', " ").concat(isSuccessModalOpen ? 'active' : ''),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "success-modal animated ".concat(hasTransitionedIn && 'in', " ").concat(isSuccessModalOpen && 'active'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: text
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        onClick: () => setIsSuccessModalOpen(false),
        className: "modal-close-text",
        children: "Close"
      })]
    })
  });
};
var _default = exports.default = SuccessModal;