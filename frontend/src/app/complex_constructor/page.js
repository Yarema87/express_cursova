'use client';

import { useState, useEffect } from "react";
import AddTrainingForm from "../components/admin/addTrainingForm";
import AddExerciseToTrainingForm from "../components/admin/addExerciseToTraining";
import EditTrainingForm from "../components/admin/editTrainingForm";
import EditExercisesInTrainingForm from "../components/admin/editExerciseInTraining";
import AddComplexForm from "../components/admin/addComplexForm";
import AddTrainingToComplexForm from "../components/admin/addTrainingToComplex";
import EditComplexForm from "../components/admin/editComplexForm";
import EditTrainingsInComplexForm from "../components/admin/editTrainingInComplex";
import Link from "next/link";
import axios from "axios";

function ComplexConstructor(){
    const [activeTab, setActiveTab] = useState('');
    const [activeMode, setActiveMode] = useState('start');
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
            setTrainings(response.data);
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
            setTrainings(response.data);
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
            setComplexes(response.data);
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
                <div className={`profile-tabs ${activeMode === 'start' ? '' : 'invisible'}`}>
                    <button className="button" onClick={() => setActiveMode('training')}>
                        Create custom trainings
                    </button>
                    <button className="button" onClick={() => setActiveMode('complex')}>
                        Create from default trainings
                    </button>
                </div>
                <div className={`profile-tabs ${activeMode === 'training' ? '' : 'invisible'}`}>
                    <button 
                        className={activeTab === 'training' ? 'active' : ''} 
                        onClick={() => setActiveTab('training')}
                    >
                        Add training
                    </button>
                    <button 
                        className={activeTab === 'exercise-training' ? 'active' : ''} 
                        onClick={() => setActiveTab('exercise-training')}
                    >
                        Add exercise to training
                    </button>
                </div>
                <div className={`profile-tabs ${activeMode === 'training' ? '' : 'invisible'}`}>
                    <button 
                        className={activeTab === 'edit_training' ? 'active' : ''} 
                        onClick={() => setActiveTab('edit_training')}
                    >
                        Edit training
                    </button>
                    <button 
                        className={activeTab === 'edit_exercise-training' ? 'active' : ''} 
                        onClick={() => setActiveTab('edit_exercise-training')}
                    >
                        Edit exercises in training
                    </button>
                </div>
                <div className={`profile-tabs ${activeMode === 'complex' ? '' : 'invisible'}`}>
                    <button 
                        className={activeTab === 'complex' ? 'active' : ''} 
                        onClick={() => setActiveTab('complex')}
                    >
                        Add complex
                    </button>
                    <button 
                        className={activeTab === 'training-complex' ? 'active' : ''} 
                        onClick={() => setActiveTab('training-complex')}
                    >
                        Add trainings to complex
                    </button>
                </div>
                <div className={`profile-tabs ${activeMode === 'complex' ? '' : 'invisible'}`}>
                    <button 
                        className={activeTab === 'edit_complex' ? 'active' : ''} 
                        onClick={() => setActiveTab('edit_complex')}
                    >
                        Edit complex
                    </button>
                    <button 
                        className={activeTab === 'edit_training-complex' ? 'active' : ''} 
                        onClick={() => setActiveTab('edit_training-complex')}
                    >
                        Edit trainings in complex
                    </button>
                </div>
                <div className={`profile-card ${activeTab === 'training' ? '' : 'invisible'}`}>
                    <AddTrainingForm onDataChange={fetchUserTrainings}/>
                </div>
                <div className={`profile-card ${activeTab === 'exercise-training' ? '' : 'invisible'}`}>
                    <AddExerciseToTrainingForm trainings={trainings} onDataChange={fetchUserTrainings}/>
                </div>
                <div className={`profile-card ${activeTab === 'edit_training' ? '' : 'invisible'}`}>
                    <EditTrainingForm />
                </div>
                <div className={`profile-card ${activeTab === 'edit_exercise-training' ? '' : 'invisible'}`}>
                    <EditExercisesInTrainingForm />
                </div>
                <div className={`profile-card ${activeTab === 'complex' ? '' : 'invisible'}`}>
                    <AddComplexForm onDataChange={fetchComplexes}/>
                </div>
                <div className={`profile-card ${activeTab === 'training-complex' ? '' : 'invisible'}`}>
                    <AddTrainingToComplexForm complexes={complexes} trainings={trainings} onDataChange={fetchComplexes}/>
                </div>
                <div className={`profile-card ${activeTab === 'edit_complex' ? '' : 'invisible'}`}>
                    <EditComplexForm />
                </div>
                <div className={`profile-card ${activeTab === 'edit_training-complex' ? '' : 'invisible'}`}>
                    <EditTrainingsInComplexForm />
                </div>
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default ComplexConstructor;