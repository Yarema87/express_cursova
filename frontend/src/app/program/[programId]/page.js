'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function ProgramPage({params}){

    const [trainings, setTrainings] = useState([]);
    const [complexId, setComplexId] = useState('');
    const [complex, setComplex] = useState('');
    const [user, setUser] = useState('');
    const router = useRouter();

    useEffect(() => { 
        async function fetchParams() { 
            const resolvedParams = await params; 
            setComplexId(resolvedParams.programId); 
        } 
        fetchParams() 
    }, [])

    useEffect(() => {
        if (!complexId) return;

        const trainings_url = (`http://localhost:5000/api/program-workout/program/${complexId}`);
        const program_url = (`http://localhost:5000/api/program/${complexId}`);
        const user_url = 'http://localhost:5000/api/user/info';
        axios.get(trainings_url)
        .then (response => {
            const weekOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            const sorted = [...response.data.workouts].sort(
            (a, b) => weekOrder.indexOf(a.weekDay) - weekOrder.indexOf(b.weekDay)
            );
            setTrainings(sorted);
        })
        .catch(error => {
            console.error('Error in getting trainings:', error);
        })
        axios.get(program_url)
        .then( response => {
            setComplex(response.data.program);
        })
        .catch(error => {
            console.error('Error in getting complex data:', error)
        })
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setUser(response.data.user);
        })
        .catch(error => {
            router.push('/');
        })
    }, [complexId])

    const addComplex = () => {
        const payload = {userId: user.id, programId: complexId};
        const url = 'http://localhost:5000/api/user/program';
        axios.post(url, payload)
        .then(response => {
            toast.success('Complex was added to your profile');
        })
        .catch(error => {
            if (error.response && error.response.status === 409){
                toast.error('You already have this complex');
                return;
            }
            console.error('Error on adding complex:', error);
            toast.error('Error occured');
        })
    }

    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="profile-card">
                    <h3>{complex.name}</h3>
                    <p>{complex?.description || ''}</p>
                    <div className="training_cards_container">
                        {trainings.map(t => (
                            <Link href={`/training/${t.workoutId}`} key={t.id}>
                                <div className="training_card">
                                    {t.weekDay}: {t.workout.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button className="button" onClick={() => addComplex()}>Add</button>
                </div>
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default ProgramPage;