'use client';

import { useState, useEffect } from "react";
import AddExerciseForm from "../components/admin/addExerciseForm";
import EditExerciseForm from "../components/admin/editExerciseForm";
import AddTrainingForm from "../components/admin/addTrainingForm";
import EditTrainingForm from "../components/admin/editTrainingForm";
import AddComplexForm from "../components/admin/addComplexForm";
import EditComplexForm from "../components/admin/editComplexForm";
import AddTrainingToComplexForm from "../components/admin/addTrainingToComplex";
import EditExercisesInTrainingForm from "../components/admin/editExerciseInTraining";
import AddExerciseToTrainingForm from "../components/admin/addExerciseToTraining";
import EditTrainingsInComplexForm from "../components/admin/editTrainingInComplex";
import Link from "next/link";
import axios from "axios";

function AdminPage(){

    const [activeTab, setActiveTab] = useState('exercise');
    const [subTab, setSubTab] = useState('add');
    const [trainings, setTrainings] = useState([]);
    const [complexes, setComplexes] = useState([]); 
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const user_url = 'http://localhost:5000/api/user/info';
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setId(response.data.user.id);
            setStatus(response.data.user.access);
        })
        .catch(error => {
            router.push('/');
        })
    }, [])

    const fetchUserTrainings = async () => {
        if (!id) return;
        const training_url = `http://localhost:5000/api/workout/${id}/${status}`;
        axios.get(training_url)
        .then(response => {
            setTrainings(response.data.workouts);
        })
        .catch(error => {
            console.error('Error getting trainings:', error);
        })
    }

    const fetchTrainings = async () => {
        if (!id) return;
        const training_url = `http://localhost:5000/api/workout/all/${id}`;
        axios.get(training_url)
        .then(response => {
            setTrainings(response.data.workouts);
        })
        .catch(error => {
            console.error('Error getting trainings:', error);
        })
    }

    const fetchComplexes = async () => {
        if (!id) return;
        const complex_url = `http://localhost:5000/api/program/${id}/${status}`;
        
        axios.get(complex_url)
        .then(response => {
            setComplexes(response.data.programs);
        })
        .catch(error => {
            console.error('Error getting complexes:', error);
        })
    }

    useEffect(() => {
        if (activeTab === 'training-complex' || activeTab === 'complex') {
            fetchComplexes();
            fetchTrainings();
        }
        if (activeTab === 'exercise-training' || activeTab === 'training') {
            fetchUserTrainings();
        }
    }, [activeTab]);

    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="profile-tabs">
                    <button 
                        className={activeTab === 'exercise' ? 'active' : ''} 
                        onClick={() => setActiveTab('exercise')}
                    >
                        Exercise
                    </button>
                    <button 
                        className={activeTab === 'training' ? 'active' : ''} 
                        onClick={() => setActiveTab('training')}
                    >
                        Training
                    </button>
                    <button 
                        className={activeTab === 'complex' ? 'active' : ''} 
                        onClick={() => setActiveTab('complex')}
                    >
                        Complex
                    </button>
                </div>
                <div className="profile-tabs">
                    <button 
                        className={activeTab === 'exercise-training' ? 'active' : ''} 
                        onClick={() => setActiveTab('exercise-training')}
                    >
                        Exercise to training
                    </button>
                    <button 
                        className={activeTab === 'training-complex' ? 'active' : ''} 
                        onClick={() => setActiveTab('training-complex')}
                    >
                        Training to complex
                    </button>
                </div>
                <div className={`profile-card ${activeTab === 'exercise' ? '' : 'invisible'}`}>
                    <div className="profile-tabs">
                        <button 
                            className={subTab === 'add' ? 'active': ''}
                            onClick={() => setSubTab('add')}
                        >
                            Add new
                        </button>
                        <button 
                            className={subTab === 'edit' ? 'active': ''}
                            onClick={() => setSubTab('edit')}
                        >
                            Edit
                        </button>
                    </div>
                    <div className={`admin_form ${subTab === 'add' ? '' : 'invisible'}`}>
                        <AddExerciseForm />
                    </div>
                    <div className={`admin_form ${subTab === 'edit' ? '' : 'invisible'}`}>
                        <EditExerciseForm />
                    </div>
                </div>
                <div className={`profile-card ${activeTab === 'training' ? '' : 'invisible'}`}>
                    <div className="profile-tabs">
                        <button 
                            className={subTab === 'add' ? 'active': ''}
                            onClick={() => setSubTab('add')}
                        >
                            Add new
                        </button>
                        <button 
                            className={subTab === 'edit' ? 'active': ''}
                            onClick={() => setSubTab('edit')}
                        >
                            Edit
                        </button>
                    </div>
                    <div className={`admin_form ${subTab === 'add' ? '' : 'invisible'}`}>
                        <AddTrainingForm onDataChange={fetchUserTrainings}/>
                    </div>
                    <div className={`admin_form ${subTab === 'edit' ? '' : 'invisible'}`}>
                        <EditTrainingForm />
                    </div>
                </div>
                <div className={`profile-card ${activeTab === 'complex' ? '' : 'invisible'}`}>
                    <div className="profile-tabs">
                        <button 
                            className={subTab === 'add' ? 'active': ''}
                            onClick={() => setSubTab('add')}
                        >
                            Add new
                        </button>
                        <button 
                            className={subTab === 'edit' ? 'active': ''}
                            onClick={() => setSubTab('edit')}
                        >
                            Edit
                        </button>
                    </div>
                    <div className={`admin_form ${subTab === 'add' ? '' : 'invisible'}`}>
                        <AddComplexForm onDataChange={fetchComplexes}/>
                    </div>
                    <div className={`admin_form ${subTab === 'edit' ? '' : 'invisible'}`}>
                        <EditComplexForm />
                    </div>
                </div>
                <div className={`profile-card ${activeTab === 'exercise-training' ? '' : 'invisible'}`}>
                    <div className="profile-tabs">
                        <button 
                            className={subTab === 'add' ? 'active': ''}
                            onClick={() => setSubTab('add')}
                        >
                            Add new
                        </button>
                        <button 
                            className={subTab === 'edit' ? 'active': ''}
                            onClick={() => setSubTab('edit')}
                        >
                            Edit
                        </button>
                    </div>
                    <div className={`admin_form ${subTab === 'add' ? '' : 'invisible'}`}>
                        <AddExerciseToTrainingForm trainings={trainings} onDataChange={fetchUserTrainings}/>
                    </div>
                    <div className={`admin_form ${subTab === 'edit' ? '' : 'invisible'}`}>
                        <EditExercisesInTrainingForm />
                    </div>
                </div>
                <div className={`profile-card ${activeTab === 'training-complex' ? '' : 'invisible'}`}>
                    <div className="profile-tabs">
                        <button 
                            className={subTab === 'add' ? 'active': ''}
                            onClick={() => setSubTab('add')}
                        >
                            Add new
                        </button>
                        <button 
                            className={subTab === 'edit' ? 'active': ''}
                            onClick={() => setSubTab('edit')}
                        >
                            Edit
                        </button>
                    </div>
                    <div className={`admin_form ${subTab === 'add' ? '' : 'invisible'}`}>
                        <AddTrainingToComplexForm complexes={complexes} trainings={trainings} onDataChange={fetchComplexes}/>
                    </div>
                    <div className={`admin_form ${subTab === 'edit' ? '' : 'invisible'}`}>
                        <EditTrainingsInComplexForm />
                    </div>
                </div>
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default AdminPage;