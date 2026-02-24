import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditComplexForm(){
    const [complex, setComplex] = useState('');
    const [complexes, setComplexes] = useState([]);
    const [complexId, setComplexId] = useState(1);
    const [user, setUser] = useState('');
    const [id, setId] = useState(null);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter name of complex"),
    });

    const editComplex = async (values) => {
        const complex_url = (`http://localhost:5000/api/program/${complexId}`);
        try{
            const response = await axios.patch(complex_url, values, { withCredentials: true });
            toast.success('Your complex has been edited');
        }
        catch (error) {
            console.error('Error on editing complex', error);
            toast.error('Something went wrong');
        }
    }

    const deleteComplex = (complexId) => {
        const complex_url = (`http://localhost:5000/api/program/${complexId}`);
        axios.delete(complex_url)
        .then(response => {
            toast.success('Complex has been deleted');
        })
        .catch(error => {
            toast.error('Error occured');
            console.error('Error on deleting complex:', error);
        })
    }

    const chooseComplex = (complexId) => {
        const complex_url = (`http://localhost:5000/api/program/{complexId}`);
        axios.get(complex_url)
        .then(response => {
            setComplex(response.data.program);
        })
        .catch(error => {
            console.error('Error on getting complex:', error);
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

        const url = (`http://localhost:5000/api/program/${id}/${user.access}`);
        axios.get(url)
        .then(response => {
            setComplexes(response.data.programs);
        })
        .catch(error => {
            console.error('Error on getting all complexes:', error);
        })
    }, [user])

    return(
        <div>
            {complexes && !complex &&
            <div>
                <select onChange={(e) => setComplexId(e.target.value)} className='input'>
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
            {complex && 
            <Formik
            initialValues={{
                name: complex.name,
                description: complex?.description || ''
            }}
            validationSchema={validationSchema}
            onSubmit={editComplex}>
                <Form>
                    <div>
                        <Field type='text' className='input' name='name' placeholder='Name'/>
                        <ErrorMessage name="name" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='text' className='input' name='description' placeholder='Description'/>
                    </div>
                    <button className="button" type='submit'>Edit</button>
                    <button className='button' type='button' onClick={() => deleteComplex(complexId)}>Delete</button>
                    <button className='button' type='button' onClick={() => setComplex('')}>Get back</button>
                </Form>
            </Formik>
            }
        </div>
    )
}

export default EditComplexForm;