'use client';

import {Formik, Form, Field} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function EditTrainingsInComplexForm(){
    const router = useRouter();
    const [complexId, setComplexId] = useState('');
    const [trainings, setTrainings] = useState('');
    const [training, setTraining] = useState('');
    const [complexes, setComplexes] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        const user_url = 'http://localhost:5000/api/user/info';
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setUser(response.data.user);
        })
        .catch(error => {
            router.push('/');
        })
    }, [])

    useEffect(() => {
        if (!user) return;

        const complexes_url = (`http://localhost:5000/api/program/${user.id}/${user.access}`);
        axios.get(complexes_url)
        .then(response => {
            setComplexes(response.data.programs);
        })
        .catch(error => {
            console.error('Error on getting complexes:', error);
        })

    }, [user])

    const chooseComplex = (complexId) => {
        const complex_url = (`http://localhost:5000/api/program-workout/program/${complexId}`);
        axios.get(complex_url)
        .then(response => {
            setTrainings(response.data.workouts);
        })
        .catch(error => {
            console.error('Error on getting trainings:', error);
        })
    }

    const chooseTraining = (id) => {
        const training_url = (`http://localhost:5000/api/program-workout/${id}`)
        axios.get(training_url)
        .then(response => {
            setTraining(response.data.model);
        })
        .catch(error => {
            console.error('Error on getting training:', error);
        })
    }

    const editTraining = async (values) => {
        const edit_url = (`http://localhost:5000/api/program-workout/${training.id}`);
        try{
            const response = await axios.patch(edit_url, values, { withCredentials: true });
            toast.success('Your training has been edited');
        }
        catch (error) {
            console.error('Error on editing training', error);
            toast.error('Something went wrong');
        }
    }

    const deleteTraining = (id) => {
        const delete_url = (`http://localhost:5000/api/program-workout/${id}`);
        axios.delete(delete_url)
        .then(response => {
            toast.success('Training was deleted from this complex');
        })
        .catch(error => {
            toast.error('Error occured');
            console.error('Error on deleting training:', error);
        })
    }

    return(
        <div>
            {complexes && !trainings && !training &&
            <div>
                <select className='input' onChange={(e) => setComplexId(e.target.value)}>
                    <option value={''}>
                        Select complex
                    </option>
                    {complexes.map(complex => (
                        <option key={complex.id} value={complex.id}>
                            {complex.name}
                        </option>
                    ))}
                </select>
                <button className='button' onClick={() => chooseComplex(complexId)} disabled={!complexId}>Choose</button>
            </div>
            }
            {trainings && !training &&
            <div>
                {trainings.map(training => (
                    <div key={training.id} className='training_card'>
                        <p>{training.workout.name}</p>
                        <p>{training.weekDay}</p>
                        <button className='button' onClick={() => chooseTraining(training.id)}>Edit</button>
                        <button className='button' onClick={() => deleteTraining(training.id)}>Delete</button>
                    </div>
                ))}
                <button className='button' onClick={() => setTrainings('')}>Get back</button>
            </div>
            }
            {training && (
            <div>
                <Formik
                initialValues={{
                    weekDay: training.weekDay,
                }}
                onSubmit={editTraining}>
                    <Form>
                        <h3>{training.program?.name}</h3>
                        <h5>{training.workout?.name}</h5>
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
                        <button className='button' type='submit'>Submit</button>
                    </Form>
                </Formik>
                <button className='button' onClick={() => setTraining('')}>Get back</button>
            </div>
            )}
        </div>
    )
}

export default EditTrainingsInComplexForm;