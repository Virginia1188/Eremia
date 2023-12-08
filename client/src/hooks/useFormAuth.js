import { useState, useEffect } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setValues((state) => ({
            ...state,
            [name]: value,
        }))
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await submitHandler(values);
        setValues(initialValues);
    }

    return {
        values,
        onChange,
        onSubmit,
    }
}