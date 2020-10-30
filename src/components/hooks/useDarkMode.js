import {useLocalStorage} from './useLocalStorage';

//need to receive data that tells the hook that the user has chosen to use the darkmode
//after receiving that data the darkMode will then initiate and the className for the body will change to darkMode as well as the className for the header.
//once the className has changed, the new properties will be saved into local Storage, so that if the user refreshes the page his setting will remain active.


export const useDarkMode = (key, initialValue) => {
const [value, setValue] = useLocalStorage(key, initialValue)

//return something out of `useDarkMode`, so we can use this in our app. 
//We'll need to know if dark mode is enabled, right?
// And we'll need a setter function to toggle dark mode. 
//Let's just forward the value and the setter that were returned out of the `useLocalStorage` call. Return those two values in an array as well.

const toggleDarkMode = (e) => {
    e.preventDefault();
    setValue(!value);
}

return [value, setValue, toggleDarkMode]

}