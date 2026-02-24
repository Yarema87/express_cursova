'use client';

import {Formik, Form, Field} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function EditExercisesInTrainingForm(){
    const router = useRouter();
    const [trainingId, setTrainingId] = useState('');
    const [exercises, setExercises] = useState('');
    const [exercise, setExercise] = useState('');
    const [trainings, setTrainings] = useState([]);
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

        const trainings_url = (`http://localhost:5000/api/workout/${user.id}/${user.access}`);
        axios.get(trainings_url)
        .then(response => {
            setTrainings(response.data.workouts);
        })
        .catch(error => {
            console.error('Error on getting trainings:', error);
        })

    }, [user])

    const chooseTraining = (trainingId) => {
        const training_url = (`http://localhost:5000/api/workout-exercise/workout/${trainingId}`);
        axios.get(training_url)
        .then(response => {
            setExercises(response.data.exercises);
        })
        .catch(error => {
            console.error('Error on getting exercises:', error);
        })
    }

    const chooseExercise = (id) => {
        const exercise_url = (`http://localhost:5000/api/workout-exercise/${id}`)
        axios.get(exercise_url)
        .then(response => {
            setExercise(response.data.model);
        })
        .catch(error => {
            console.error('Error on getting exercise:', error);
        })
    }

    const editExercise = async (values) => {
        const edit_url = (`http://localhost:5000/api/workout-exercise/${exercise.id}`);
        try{
            const response = await axios.patch(edit_url, values, { withCredentials: true });
            toast.success('Your exercise has been edited');
        }
        catch (error) {
            console.error('Error on editing exercise', error);
            toast.error('Something went wrong');
        }
    }

    const deleteExercise = (id) => {
        const delete_url = (`http://localhost:5000/api/workout-exercise/${id}`);
        axios.delete(delete_url)
        .then(response => {
            toast.success('Exercise was deleted from this training');
        })
        .catch(error => {
            toast.error('Error occured');
            console.error('Error on deleting exercise:', error);
        })
    }

    return(
        <div>
            {trainings && !exercises && !exercise &&
            <div>
                <select className='input' onChange={(e) => setTrainingId(e.target.value)}>
                    <option value={''}>
                        Select training
                    </option>
                    {trainings.map(training => (
                        <option key={training.id} value={training.id}>
                            {training.name}
                        </option>
                    ))}
                </select>
                <button className='button' onClick={() => chooseTraining(trainingId)} disabled={!trainingId}>Choose</button>
            </div>
            }
            {exercises && !exercise &&
            <div>
                {exercises.map(exercise => (
                    <div key={exercise.id} className='training_card'>
                        <p>{exercise.exercise.name}</p>
                        {exercise.repetitions && <p>{exercise.repetitions} repetitions</p>}
                        {exercise.distance && <p>{exercise.distance} meters</p>}
                        <button className='button' onClick={() => chooseExercise(exercise.id)}>Edit</button>
                        <button className='button' onClick={() => deleteExercise(exercise.id)}>Delete</button>
                    </div>
                ))}
                <button className='button' onClick={() => setExercises('')}>Get back</button>
            </div>
            }
            {exercise && (
            <div>
                <Formik
                initialValues={{
                    repetitions: exercise.repetitions || '',
                    distance: exercise.distance || '',
                }}
                onSubmit={editExercise}>
                    <Form>
                        <h3>{exercise.workout?.name}</h3>
                        <h5>{exercise.exercise?.name}</h5>
                        <div>
                            <Field type='text' className='input' name='repetitions' placeholder='Repetitions'/>
                        </div>
                         <div>
                            <Field type='text' className='input' name='distance' placeholder='Distance'/>
                        </div>
                        <button className='button' type='submit'>Submit</button>
                    </Form>
                </Formik>
                <button className='button' onClick={() => setExercise('')}>Get back</button>
            </div>
            )}
        </div>
    )
}

export default EditExercisesInTrainingForm;