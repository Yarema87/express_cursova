'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dumbbell } from "lucide-react";

function SignUp(){
    const url = 'http://localhost:5000/api/user/sign-up';
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please, enter your name"),
        surname: Yup.string().required("Please, enter your surname"),
        email: Yup.string()
            .email("Wrong format")
            .required("Please, enter your email"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Please, enter your password"),
        confirm_password: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please, confirm your password")
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            
            const response = await axios.post(url, values, {withCredentials: true});
            console.log("User registered:", response.data);
            toast.success("You signed up successfully!");
            if (response.data.success){
                router.push('/');
            }
        } catch (error) {
            if(error.response && error.response.status === 400){
                toast.error('This email is already registered');
            }
            else{
                console.error("Sign-up error:", error);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return(
        <div className="container">
            <div className="card">
                <Dumbbell className="icon" />
                <h1 className="title">GetFit</h1>
                <p className="subtitle">Already has an account? Then <Link href='/log-in'>log in</Link></p>
            <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                password: '',
                confirm_password: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
                <Form>
                    <div>
                        <Field type='text' name='name' className='input' placeholder='Name' />
                        <ErrorMessage name="name" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='text' name='surname' className='input' placeholder='Surname' />
                        <ErrorMessage name="surname" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='email' name='email' className='input' placeholder='Email' />
                        <ErrorMessage name="email" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='password' name='password' className='input' placeholder='Password' />
                        <ErrorMessage name="password" component="div" className="error_message"/> 
                    </div>
                    <div>
                        <Field type='password' name='confirm_password' className='input' placeholder='Confirm password' />
                        <ErrorMessage name="confirm_password" component="div" className="error_message"/> 
                    </div>
                    <button type='submit' className="button">
                        Sign up
                    </button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default SignUp;