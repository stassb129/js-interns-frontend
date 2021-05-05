import {useEffect, useState} from "react";


export const useValidation = (value, validations) => {
    const [inputValid, setInputValid] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ?
                        setMinLengthError(true) :
                        setMinLengthError(false)
                    break

                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError])

    return {
        isEmpty,
        minLengthError,
        inputValid
    }
}