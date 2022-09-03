import {useState, useEffect} from 'react';


const useForm = (Validate) => {
    const[values, setValues] = useState({
        username: '',
        email: '',
        password: '',

    });
    const[errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
             
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(Validate(values));
    }


    return { handleChange, values, handleSubmit, errors};
};
   export default useForm;