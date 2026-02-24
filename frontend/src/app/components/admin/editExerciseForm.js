import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditExerciseForm(){
    const [exercise, setExercise] = useState('');
    const [exercises, setExercises] = useState([]);
    const [exerciseId, setExerciseId] = useState(1);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter name of exercise"),
        calories: Yup.string().required("Please, enter formula for calories"),
    });

    const editExercise = async (values) => {
        const exercise_url = (`http://localhost:5000/api/exercise/${exerciseId}`);
        try{
            const response = await axios.patch(exercise_url, values, { withCredentials: true });
            toast.success('Your exercise has been edited');
        }
        catch (error) {
            console.error('Error on editing exercise', error);
            toast.error('Something went wrong');
        }
    }

    const deleteExercise = (exerciseId) => {
        const exercise_url = (`http://localhost:5000/api/exercise/${exerciseId}`);
        axios.delete(exercise_url)
        .then(response => {
            toast.success('Exercise has been deleted');
        })
        .catch(error => {
            toast.error('Error occured');
            console.error('Error on deleting exercise:', error);
        })
    }

    const chooseExercise = (exerciseId) => {
        const exercise_url = (`http://localhost:5000/api/exercise/${exerciseId}`);
        axios.get(exercise_url)
        .then(response => {
            setExercise(response.data.exercise);
        })
        .catch(error => {
            console.error('Error on getting exercise:', error);
        })
    }

    useEffect(() => {
        const url = 'http://localhost:5000/api/exercise/all';
        axios.get(url)
        .then(response => {
            setExercises(response.data.exercises);
        })
        .catch(error => {
            console.error('Error on getting all exercises:', error);
        })
    }, [])

    return(
        <div>
            {exercises && !exercise &&
            <div>
                <select onChange={(e) => setExerciseId(e.target.value)} className='input'>
                    {exercises.map(exercise => (
                        <option key={exercise.id} value={exercise.id}>
                            {exercise.name}
                        </option>
                    ))}
                </select>
                <button className='button' onClick={() => chooseExercise(exerciseId)}>Choose</button>
            </div>
            }
            {exercise && (
            <Formik
            initialValues={{
                name: exercise.name,
                type: exercise.type,
                calories: exercise.calories,
                description: exercise?.description || ''
            }}
            validationSchema={validationSchema}
            onSubmit={editExercise}>
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
                        <Field type='text' className='input' name='calories' placeholder='0.05 * weight * repetitions'/>
                        <ErrorMessage name="calories" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='text' className='input' name='description' placeholder='Description'/>
                    </div>
                    <button className="button" type='submit'>Edit</button>
                    <button className='button' type='button' onClick={() => deleteExercise(exerciseId)}>Delete</button>
                    <button className='button' type='button' onClick={() => setExercise('')}>Get back</button>
                </Form>
            </Formik>
            )}
        </div>
    )
}

export default EditExerciseForm;