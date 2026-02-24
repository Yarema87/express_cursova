'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { evaluate } from "mathjs";

function ExercisePage({params}){

    const [exerciseId, setExerciseId] = useState('');
    const [exercise, setExercise] = useState('');
    const [user, setUser] = useState('');
    const router = useRouter();

    useEffect(() => { 
        async function fetchParams() { 
            const resolvedParams = await params; 
            setExerciseId(resolvedParams.exerciseId); 
        } 
        fetchParams() 
    }, [])

    useEffect(() => {
        if (!exerciseId) return;

        const exercise_url = (`http://localhost:5000/api/exercise/${exerciseId}`);
        axios.get(exercise_url)
        .then( response => {
            setExercise(response.data.exercise);
        })
        .catch(error => {
            console.error('Error in getting exercise data:', error)
        })
    }, [exerciseId])

    useEffect(() => {
        const user_url = 'http://localhost:5000/api/user/info';
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setUser(response.data.user);
        })
        .catch(error => {
            router.push('/');
        })
    }, [])

    function calculateCalories(formula){
        try{
            if (!formula) return;
            const variables = {
                weight: parseInt(user.weight) ?? 1,
                repetitions: 1,
                distance: 1
            };
            return evaluate(formula, variables);
        }
        catch (error) {
            console.error('Error on calculating calories:', error);
            return 0;
        }
    }

    const calories = calculateCalories(exercise.calories);

    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="profile-card">
                    <h3>{exercise.name}</h3>
                    <p>{exercise?.description || ''}</p>
                    <strong className={`text ${user.weight ? '' : 'invisible'}`}>
                        On this exercise you'll burn {calories} kcal per set
                    </strong>
                    <button className="button" onClick={() => router.back()}>Back to training</button>
                </div>
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default ExercisePage;