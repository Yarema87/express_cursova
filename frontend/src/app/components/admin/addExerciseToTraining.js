'use client';

import {Formik, Form, Field} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

function AddExerciseToTrainingForm({trainings=[], onDataChange}){
    const [exercises, setExercises] = useState([]);

    const addExerciseToTraining = async (values) => {
        try {
            const response = await axios.post('http://localhost:5000/api/workout-exercise', values, { withCredentials: true });
            toast.success('Your exercise has been added to training');
            onDataChange();
        } catch (error) {
            if (error.response && error.response.status === 409){
                toast.error('This exercise is already added to this training');
                return;
            }
            console.error('Error on adding exercise to training', error);
            toast.error('Something went wrong');
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    exercise_id: '',
                    workout_id: '',
                    repetitions: '',
                    distance: '',
                }}
                onSubmit={addExerciseToTraining}
                enableReinitialize
            >
                {({ values, setFieldValue }) => {
                    useEffect(() => {
                        if (values.workout_id) {
                            const selectedTraining = trainings.find(t => t.id === parseInt(values.workout_id)) || [];
                            if (selectedTraining) {
                                axios.get(`http://localhost:5000/api/exercise/type/${selectedTraining.type}`)
                                .then(response => setExercises(response.data.exercises))
                                .catch(err => console.error('Error getting exercises:', err));
                            }
                        }
                    }, [values.workout_id]);

                    return (
                        <Form>
                            <div>
                                <Field
                                    as='select'
                                    className='input'
                                    name='workout_id'
                                    value={values.workout_id}
                                    onChange={(e) => setFieldValue('workout_id', e.target.value)}
                                >
                                    <option value='' disabled>Select training</option>
                                    {trainings.map(t => (
                                        <option key={t.id} value={t.id}>{t.name}</option>
                                    ))}
                                </Field>
                            </div>

                            <div>
                                <Field
                                    as='select'
                                    className='input'
                                    name='exercise_id'
                                    value={values.exercise_id}
                                    onChange={(e) => setFieldValue('exercise_id', e.target.value)}
                                    disabled={!values.workout_id}
                                >
                                    <option value='' disabled>
                                        {values.workout_id ? 'Select exercise' : 'Select training first'}
                                    </option>
                                    {exercises.map(e => (
                                        <option key={e.id} value={e.id}>{e.name}</option>
                                    ))}
                                </Field>
                            </div>

                            <div>
                                <Field type='text' className='input' name='repetitions' placeholder='Repetitions'/>
                            </div>
                            <div>
                                <Field type='text' className='input' name='distance' placeholder='Distance (for running)'/>
                            </div>

                            <button className="button" type='submit'>Add</button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default AddExerciseToTrainingForm;
