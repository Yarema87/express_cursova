'use client';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function AddTrainingForm({onDataChange}){
    const [user, setUser] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        const user_url = 'http://localhost:5000/api/user/info';
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setUser(response.data.user);
            if(response.data.user.access === 'user'){
                setId(response.data.user.id);
            }
        })
        .catch(error => {
            console.error('Error on getting user data:', error);
        })
    }, [])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter name of training"),
    });

    const addExercise = async (values) => {
        const url = 'http://localhost:5000/api/workout';
        try{
            const all_values = {
                ...values,
                userId: id,
            };
            const response = await axios.post(url, all_values, { withCredentials: true });
            toast.success('Your training has been added');
            onDataChange();
        }
        catch (error) {
            console.error('Error on adding training', error);
            toast.error('Something went wrong');
        }
    }

    return(
        <div>
            <Formik
            initialValues={{
                name: '',
                type: 'Strength',
                description: ''
            }}
            validationSchema={validationSchema}
            onSubmit={addExercise}>
                <Form>
                    <div>
                        <Field type='text' className='input' name='name' placeholder='Name'/>
                        <ErrorMessage name="name" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field as='select' className='input' name='type'>
                            <option value='Strength'>Strength</option>
                            <option value='Cardio'>Cardio</option>
                            <option value='Other'>Other</option>
                        </Field> 
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

export default AddTrainingForm;