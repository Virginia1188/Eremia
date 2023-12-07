import { useState, useEffect } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        // Check if initialValues have changed before updating state
        if (!areValuesEqual(values, initialValues)) {
            setValues(initialValues);
        }
    }, [initialValues]);

    function areValuesEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((state) => ({
            ...state,
            [name]: value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit,
    }
}