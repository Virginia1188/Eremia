import { useState, useEffect } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues])


console.log(values);
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