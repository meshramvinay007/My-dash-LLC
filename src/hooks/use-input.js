import { useState } from "react"

const useInput = (validate) => {
    const [value,setValue] = useState('');
   const [isTouched,setIsTouched] = useState(false);
    // console.log(validate(value));
    // console.log(isTouched);
    
    const valueIsValid = validate(value);
    const hasError = !valueIsValid && isTouched;

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleBlur = () => {
        setIsTouched(true);
    }

    const reset= () => {
        setValue('');
        setIsTouched(false);
    }

    const valueTouched = () => {
        setIsTouched(true)
    }

    return {value, hasError, isValid:valueIsValid, handleChange, handleBlur,valueTouched,reset}
}

export default useInput;