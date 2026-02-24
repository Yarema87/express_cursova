'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function DefaultComplexes() {
    const [complexes, setComplexes] = useState([]);
    const [id, setId] = useState(null);
    const user_url = 'http://localhost:5000/api/user/info';
    const complex_url = `http://localhost:5000/api/program/all/${id}`;
    const router = useRouter();
    
    useEffect(() => {
        axios.get(user_url, {withCredentials: true})
        .then(response => {
            setId(response.data.user.id);
        })
        .catch(error => {
            console.error('error on fetching user:', error);
            router.push('/');
        })
    }, [])

    useEffect(() => {
        if (!id) return;
        axios.get(complex_url)
        .then(response => {
            setComplexes(response.data.programs);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error on getting complexes:', error);
        })
    }, [id])
    
    return(
        <div className="training_cards_container">
            <p>What do you want for today?</p>
            {complexes.map(complex => (
                <Link href={`/program/${complex.id}`} key={complex.id}>
                    <div className="training_card">
                        {complex.name}
                    </div>
                </Link>
            ))}
            <Link href='/complex_constructor'>
                <div className="training_card">
                    Custom complex
                </div>
            </Link>
        </div>
    )
}

export default DefaultComplexes;