'use client';

import {Formik, Form, Field} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function AddTrainingToComplexForm({trainings=[], complexes=[], onDataChange}){

    const addTrainingToComplex = async (values) => {
        const url = 'http://localhost:5000/api/program-workout';
        try{
            const response = await axios.post(url, values, { withCredentials: true });
            toast.success('Your training has been added to complex');
            onDataChange();
        }
        catch (error) {
            if (error.response && error.response.status === 409){
                toast.error('This training is already added to this complex');
                return;
            }
            console.error('Error on adding training to complex', error);
            toast.error('Something went wrong');
        }
    }

    return(
        <div>
            <Formik
            initialValues={{
                program_id: '',
                workout_id: '',
                weekDay: 'Monday'
            }}
            onSubmit={addTrainingToComplex}
            enableReinitialize>
                <Form>
                    <div>
                        <Field className='input' name='program_id' as='select'>
                            <option value='' disabled>Select complex</option>
                            {complexes.map(e => (
                                <option key={e.id} value={parseInt(e.id)}>{e.name}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <Field as='select' className='input' name='workout_id'>
                            <option value='' disabled>Select training</option>
                            {trainings.map(e => (
                                <option key={e.id} value={parseInt(e.id)}>{e.name}</option>
                            ))}
                        </Field> 
                    </div>
                    <div>
                        <Field as='select' className='input' name='weekDay'>
                            <option value='Monday'>Monday</option>
                            <option value='Tuesday'>Tuesday</option>
                            <option value='Wednesday'>Wednesday</option>
                            <option value='Thursday'>Thursday</option>
                            <option value='Friday'>Friday</option>
                            <option value='Saturday'>Saturday</option>
                            <option value='Sunday'>Sunday</option>
                        </Field>
                    </div>
                    <button className="button" type='submit'>Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddTrainingToComplexForm;