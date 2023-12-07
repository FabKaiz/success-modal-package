# React SuccessModal Component

This is a simple React component that provides a modal for success messages. It includes basic animations and the
ability to control its visibility.

## Installation

Make sure you have [React](https://reactjs.org/), [React DOM](https://reactjs.org/docs/react-dom.html) installed in your project.
You can install this component using npm:

```bash
npm i success-modal-oc
```

## Usage

1. **Simply import the `SuccessModal` component and the `useMountTransition` custom hook into your React application:**

    ```jsx
    import SuccessModal from "success-modal-oc/dist/successModal.js";
    import useMountTransition from "success-modal-oc/dist/useMountTransition.js";
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