import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function AddExerciseForm(){
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter name of exercise"),
        calories: Yup.string().required("Please, enter formula for calories"),
    });

    const addExercise = async (values) => {
        const url = 'http://localhost:5000/api/exercise';
        try{
            const response = await axios.post(url, values, { withCredentials: true });
            toast.success('Your exercise has been added');
        }
        catch (error) {
            console.error('Error on adding exercise', error);
            toast.error('Something went wrong');
        }
    }

    return(
        <div>
            <Formik
            initialValues={{
                name: '',
                type: 'Strength',
                calories: '',
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
                        <Field type='text' className='input' name='calories' placeholder='0.05 * weight * repetitions'/>
                        <ErrorMessage name="calories" component="div" className="error_message"/> 
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

export default AddExerciseForm;