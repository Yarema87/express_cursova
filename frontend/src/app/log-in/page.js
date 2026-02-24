'use client';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Link from "next/link";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Dumbbell } from "lucide-react";

function LogIn(){
    const url = 'http://localhost:5000/api/user/log-in';
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Please, enter your email"),
        password: Yup.string()
            .required("Please, enter your password")
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post(url, values, {withCredentials: true});
            console.log("User logged in:", response.data);
            if (response.data.success) {
                toast.success("You've logged in successfully");
                setTimeout(() => {
                    router.push('/');
                }, 100);
            } else {
                setErrors({ email: "Invalid email or password" });
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
                toast.error('Incorrect email or password');
            }
            else{
                console.error("Login error:", error);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                    <Dumbbell className="icon" />
                    <h1 className="title">GetFit</h1>
                    <p className="subtitle"> 
                        New here? Then <Link href='/sign-up'>sign up</Link>
                    </p>
                <Formik
                initialValues={{
                    email: '',
                    password: '',
                    remember: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                    <Form>
                        <div> 
                            <Field 
                                type='email' 
                                name='email' 
                                className="input" 
                                placeholder='Email'
                            />
                            <ErrorMessage name="email" component="div" className="error_message"/> 
                        </div>
                        <div>
                            <Field 
                                type='password' 
                                name='password' 
                                className='input'
                                placeholder='Password'
                            />
                            <ErrorMessage name="password" component="div" className="error_message"/> 
                        </div>
                        <div className="remember"> 
                            <Field 
                                type='checkbox' 
                                name='remember' 
                                id='remember'
                            />
                            <label>Remember me</label> 
                        </div>
                        <button 
                            type='submit'
                            className="button" 
                        >
                            Log in
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LogIn;