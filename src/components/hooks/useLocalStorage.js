import {useState} from 'react'

export const useLocalStorage = (key, initialValue)=> {
    //1. create our state values
    //2. if we already have a value set for local storage, make our value that.
    //3. if we dont have a value set for local storage, make our value initialValue.

    // const [storedValue, setStoredValue] = useState(()=>{
    //     if(localStorage.getItem(key)) {
    //         return JSON.parse(localStorage.getItem(key));
    //     }

    //     localStorage.setItem(key, JSON.stringify(initialValue));
    //     return initialValue;
    // });

    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue; // instead of if else statement, this seems to be more compact.
      });
      

    //4. set our new value into state 
    //5. set our new value into localStorate
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    

    return [storedValue, setValue]
}