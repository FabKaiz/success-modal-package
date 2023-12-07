import { useEffect, useState } from "react";

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
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  useEffect(() => {
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
export default useMountTransition;