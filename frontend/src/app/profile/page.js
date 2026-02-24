'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile(){
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('data');
    const [user, setUser] = useState('');
    const [complexes, setComplexes] = useState([]);
    const [stats, setStats] = useState('');
    const [streak, setStreak] = useState(0);
    const [achievements, setAchievements] = useState([]);
    const user_url = 'http://localhost:5000/api/user/info';

    const editData = async (values) => {
        try{
            const response = await axios.patch(user_url, values, { withCredentials: true });
            toast.success('Your data has been updated');
        }
        catch (error) {
            console.error('Error on updating personal data', error);
            toast.error('Something went wrong');
        }
    }

    const deleteComplex = (id) => {
        const url = (`http://localhost:5000/api/user/program/${id}`);
        axios.delete(url)
        .then(response => {
            toast.success('You removed this complex');
            window.location.reload();
        })
        .catch(error => {
            console.error('Error on removing complex:', error);
            toast.error('Some error occured');
        })
    }

    const validationSchema = Yup.object().shape({
            name: Yup.string().required("Please, enter your name"),
            surname: Yup.string().required("Please, enter your surname"),
            email: Yup.string()
                .email("Wrong format")
                .required("Please, enter your email"),
            age: Yup.number()
                .positive('Age should be bigger than 0')
                .typeError('Age should be a number'),
            height: Yup.number()
                .positive('Height should be bigger than 0')
                .typeError('Height should be a number'),
            weight: Yup.number()
                .positive('Weight should be bigger than 0')
                .typeError('Weight should be a number'),
        });

    useEffect(() => {
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
        const complex_url = (`http://localhost:5000/api/user/program/${user.id}`);
        const stats_url = (`http://localhost:5000/api/user/stats/${user.id}`);
        const streak_url = (`http://localhost:5000/api/statistic/streak/${user.id}`);
        const achievements_url = (`/api/achievements?userId=${user.id}`);

        axios.get(complex_url)
        .then(response => {
            setComplexes(response.data.programs);
        })
        .catch(error => {
            console.error('Error on getting complexes:', error);
        })

        axios.get(stats_url)
        .then(response => {
            setStats(response.data.user_stats);
        })
        .catch(error => {
            console.error('Error on getting user stats:', error);
        })

        axios.get(streak_url)
        .then(response => {
            setStreak(response.data.streak);
        })
        .catch(error => {
            console.error('Error on getting daily streak:', error)
        })

        axios.get(achievements_url)
        .then(response => {
            setAchievements(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error on getting achievements:', error);
        })
    }, [user])

    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="profile-tabs">
                    <button 
                        className={activeTab === 'data' ? 'active' : ''} 
                        onClick={() => setActiveTab('data')}
                    >
                        My data
                    </button>
                    <button 
                        className={activeTab === 'trainings' ? 'active' : ''} 
                        onClick={() => setActiveTab('trainings')}
                    >
                        My trainings
                    </button>
                    <button 
                        className={activeTab === 'stats' ? 'active' : ''} 
                        onClick={() => setActiveTab('stats')}
                    >
                        My stats
                    </button>
                    <button 
                        className={activeTab === 'achievements' ? 'active' : ''} 
                        onClick={() => setActiveTab('achievements')}
                    >
                        My achievements
                    </button>
                </div>
                <div>
                    <div className={`profile-card ${activeTab === 'data' ? '' : 'invisible'}`}>
                        {user && Object.keys(user).length > 0 && (
                            <Formik
                            initialValues={{
                                name: user.name,
                                surname: user.surname,
                                email: user.email,
                                gender: user?.gender || 'Male',
                                age: user?.age || '',
                                height: user?.height || '',
                                weight: user?.weight || ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={editData}>
                                <Form>
                                    <div>
                                        <Field type='text' className='input' name='name'/>
                                        <ErrorMessage name="name" component="div" className="error_message"/> 
                                    </div>
                                    <div>
                                        <Field type='text' className='input' name='surname'/>
                                        <ErrorMessage name="surname" component="div" className="error_message"/> 
                                    </div>
                                    <div>
                                        <Field type='text' className='input' name='email'/>
                                        <ErrorMessage name="email" component="div" className="error_message"/> 
                                    </div>
                                    <div>
                                        <Field type='text' className='input' name='age' placeholder='Age'/>
                                        <ErrorMessage name="age" component="div" className="error_message"/> 
                                    </div>
                                    <div>
                                        <Field as='select' className='input' name='gender' placeholder='Gender'>
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                            <option value='Other'>Other</option>
                                         </Field>
                                    </div>
                                    <div>
                                        <Field type='text' className='input' name='height' placeholder='Height (cm)'/>
                                        <ErrorMessage name="height" component="div" className="error_message"/> 
                                    </div>
                                    <div>
                                        <Field type='text' className='input' name='weight' placeholder='Weight (kg)'/>
                                        <ErrorMessage name="weight" component="div" className="error_message"/> 
                                    </div>
                                    <button className="button" type='submit'>Save</button>
                                </Form>
                            </Formik>
                        )} 
                    </div>
                    <div className={`profile-card ${activeTab === 'trainings' ? '' : 'invisible'}`}>
                        <h3>My training complexes</h3>
                        <div className="training_cards_container">
                            {complexes.map(t => (
                                <div key={t.id} >
                                <Link href={`/program/${t.programId}`}>
                                    <div className="training_card">
                                        <p>{t.program.name}</p>
                                    </div>
                                </Link>
                                <button className="button" onClick={() => deleteComplex(t.id)}>Remove</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`profile-card ${(activeTab === 'stats' && stats) ? '' : 'invisible'}`}>
                        <div className="stats_container"> 
                            <h4>Total calories burned:</h4>
                            <p>{stats.totalCalories}</p>
                        </div>
                        <div className="stats_container"> 
                            <h4>Total trainings done:</h4>
                            <p>{stats.totalWorkouts}</p>
                        </div>
                        <div className="stats_container"> 
                            <h4>Favorite activity:</h4>
                            <p>{stats.favoriteWorkout}</p>
                        </div>
                        {stats.lastActivity && (
                            <div className="stats_container"> 
                                <h4>Last activity:</h4>
                                <p>{new Date(stats.lastActivity).toLocaleString()}</p>
                            </div> )}
                        <div className="stats_container"> 
                            <h4>Activities streak:</h4>
                            <p>{streak} days with completed trainings</p>
                        </div>
                        <Link href={'/statistic'}><button className="button">Detailed stats</button></Link>
                    </div>
                    <div className={`profile-card ${activeTab === 'achievements' ? '' : 'invisible'}`}>
                        <h4 style={{justifySelf: 'center'}}>Your achievements:</h4>
                        {achievements && achievements.map(a =>(
                            <div key={a.id} className="training_card">
                                <h5>{a.achievment.name}</h5>
                                <p>{a.achievment.description}</p>
                                <p>{new Date(a.timestamp).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className={`profile-card ${(activeTab === 'stats' && !stats) ? '' : 'invisible'}`}>
                        <h3>Finish your first training to unlock statistic</h3>
                    </div>
                    <Link href='/'><button className="button">Back to main</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Profile;