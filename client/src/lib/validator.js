import { useState } from "react";

const [errors, setErrors] = useState({})
export const email = (value,state, setState) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value)) {
      return { email: 'Email is not valid. Please enter a valid email address.',};
    } else {
      if (state.email) {
        return { ...state, email: '' };
      }
    }
}