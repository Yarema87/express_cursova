'use client';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function AddComplexForm({onDataChange}){
    const [user, setUser] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        const user_url = 'http://localhost:5000/api/user/info';
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setUser(response.data.user);
            setId(response.data.user.id);
        })
        .catch(error => {
            console.error('Error on getting user data:', error);
        })
    }, [])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter name of complex"),
    });

    const addComplex = async (values) => {
        const url = 'http://localhost:5000/api/program';
        try{
            const all_values = {
                ...values,
                userId: id,
            };
            const response = await axios.post(url, all_values, { withCredentials: true });
            toast.success('Your complex has been added');
            onDataChange();
        }
        catch (error) {
            console.error('Error on adding complex', error);
            toast.error('Something went wrong');
        }
    }

    return(
        <div>
            <Formik
            initialValues={{
                name: '',
                description: ''
            }}
            validationSchema={validationSchema}
            onSubmit={addComplex}>
                <Form>
                    <div>
                        <Field type='text' className='input' name='name' placeholder='Name'/>
                        <ErrorMessage name="name" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='text' className='input' name='description' placeholder='Description'/>
                    </div>
                    <button className="button" type='submit'>Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddComplexForm;