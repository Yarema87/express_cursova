import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditTrainingForm(){
    const [training, setTraining] = useState('');
    const [trainings, setTrainings] = useState([]);
    const [trainingId, setTrainingId] = useState('');
    const [user, setUser] = useState('');
    const [id, setId] = useState(null);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter name of training"),
    });

    const editTraining = async (values) => {
        const training_url = (`http://localhost:5000/api/workout/${trainingId}`);
        try{
            const response = await axios.patch(training_url, values, { withCredentials: true });
            toast.success('Your training has been edited');
        }
        catch (error) {
            console.error('Error on editing training', error);
            toast.error('Something went wrong');
        }
    }

    const deleteTraining = (trainingId) => {
        const training_url = (`http://localhost:5000/api/workout/${trainingId}`);
        axios.delete(training_url)
        .then(response => {
            toast.success('Training has been deleted');
        })
        .catch(error => {
            toast.error('Error occured');
            console.error('Error on deleting training:', error);
        })
    }

    const chooseTraining = (trainingId) => {
        const training_url = (`http://localhost:5000/api/workout/${trainingId}`);
        axios.get(training_url)
        .then(response => {
            setTraining(response.data.workout);
        })
        .catch(error => {
            console.error('Error on getting training:', error);
        })
    }

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


    useEffect(() => {
        if (!user) return;

        const url = (`http://localhost:5000/api/workout/${id}/${user.access}`);
        axios.get(url)
        .then(response => {
            setTrainings(response.data.workouts);
        })
        .catch(error => {
            console.error('Error on getting all trainings:', error);
        })
    }, [user])

    return(
        <div>
            {trainings && !training &&
            <div>
                <select 
                    onChange={(e) => setTrainingId(e.target.value)} 
                    className='input'
                >
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
            {training && 
            <Formik
            initialValues={{
                name: training.name || '',
                type: training.type || '',
                description: training?.description || ''
            }}
            validationSchema={validationSchema}
            onSubmit={editTraining}>
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
                    <button className="button" type='submit'>Edit</button>
                    <button className='button' type='button' onClick={() => deleteTraining(trainingId)}>Delete</button>
                    <button className='button' type='button' onClick={() => setTraining('')}>Get back</button>
                </Form>
            </Formik>
            }
        </div>
    )
}

export default EditTrainingForm;