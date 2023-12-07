"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
/*
  @params: isMounted: boolean - state to determine if component is mounted
  @params: unmountDelay: number - delay in milliseconds to unmount component
  @returns: hasTransitionedIn: boolean - state to determine if component has transitioned in
  * * *
  This custom hook is used to animate the mounting of content in React without external libraries like Framer Motion.
  More info on this custom hook:
  https://www.letsbuildui.dev/articles/how-to-animate-mounting-content-in-react/
*/

const useMountTransition = (isMounted, unmountDelay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    let timeoutId;
    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);
  return hasTransitionedIn;
};
var _default = exports.default = useMountTransition;