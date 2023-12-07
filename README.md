# React SuccessModal Component

This is a simple React component that provides a modal for success messages. It includes basic animations and the
ability to control its visibility.

## Installation

Make sure you have [React](https://reactjs.org/), [React DOM](https://reactjs.org/docs/react-dom.html)
and [Sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) installed in your project.
You can install this component using npm:

```bash
npm i success-modal-oc
```

## Usage

1. **Import the `SuccessModal`, `useMountTransition` and `useState` component into your React application:**

    ```jsx
    import { useState } from 'react';
    import SuccessModal from './path/to/SuccessModal';
    import useMountTransition from './path/to/useMountTransition';
    ```

2. **Create a state variable to control the modal's visibility:**

    ```jsx
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    ```

3. **Use the `useMountTransition` hook to handle the animation transition (optional):**

    ```jsx
    const hasTransitionedIn = useMountTransition(isSuccessModalOpen, 500);
    ```

   By default, the `useMountTransition` hook will use 500ms as the transition duration. You can pass a custom duration
   as the second argument and change the animation in the Scss file.  


4. **Implement the `SuccessModal` component in your application, exemple:**

    ```jsx
    const App = () => {
      return (
        <div>
            <button onClick={() => setIsSuccessModalOpen(true)}>
             Open Modal Button
           </button>
           {(hasTransitionedIn || isSuccessModalOpen) &&
               <SuccessModal
                   text='Modal open!'
                   isSuccessModalOpen={isSuccessModalOpen}
                   setIsSuccessModalOpen={setIsSuccessModalOpen}
                   hasTransitionedIn={hasTransitionedIn}
               />}
        </div>
      );
    };
    ```

## Props

- `text` (string): The text content to be displayed in the modal.
- `isSuccessModalOpen` (boolean): Controls the visibility of the modal.
- `setIsSuccessModalOpen` (function): Callback function to update the `isSuccessModalOpen` state.
- `hasTransitionedIn` (boolean): Indicates whether the modal has transitioned into the DOM.

## Example

![example](https://i.ibb.co/SvrBt83/example.png) 