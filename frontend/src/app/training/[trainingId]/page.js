'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TrainingPage({params}){

    const [exercises, setExercises] = useState([]);
    const [trainingId, setTrainingId] = useState('');
    const [training, setTraining] = useState('');
    const router = useRouter();

    useEffect(() => { 
        async function fetchParams() { 
            const resolvedParams = await params; 
            setTrainingId(resolvedParams.trainingId); 
        } 
        fetchParams() 
    }, [])

    useEffect(() => {
        if (!trainingId) return;

        const exercises_url = (`http://localhost:5000/api/workout-exercise/workout/${trainingId}`);
        const training_url = (`http://localhost:5000/api/workout/${trainingId}`);
        axios.get(exercises_url)
        .then (response => {
            setExercises(response.data.exercises);
        })
        .catch(error => {
            console.error('Error in getting exercises:', error);
        })
        axios.get(training_url)
        .then( response => {
            setTraining(response.data.workout);
        })
        .catch(error => {
            console.error('Error in getting training data:', error)
        })
    }, [trainingId])

    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="profile-card">
                    <h3>{training.name}</h3>
                    <p>{training?.description || ''}</p>
                    <div className="training_cards_container">
                        <div className="training_card">
                            <p>Warm up</p>
                        </div>
                        {exercises.map(t => (
                            <Link key={t.id} href={`/exercise/${t.exercise.id}`}>
                                <div className="training_card">
                                    <p className="text">{t.exercise.name}</p>
                                    <p className={`text ${t.repetitions ? '' : 'invisible'}`}>{`${t.repetitions} sets of 10 reps`}</p>
                                    <p className={`text ${t.distance ? '' : 'invisible'}`}>{`${t.distance} meters`}</p>
                                </div>
                            </Link>
                        ))}
                        <div className="training_card">
                            <p>Cool down</p>
                        </div>
                    </div>
                    <button className="button" onClick={() => router.back()}>Back to complex</button>
                </div>
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default TrainingPage;