'use client';

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";
import debounce from "lodash.debounce";

function StatisticPage(){
    const [user, setUser] = useState('');
    const [stats, setStats] = useState([]);
    const [days, setDays] = useState(7);
    const user_url = 'http://localhost:5000/api/user/info';

    const fetchProgress = useCallback(debounce((userId, days) => {
        const url = (`http://localhost:5000/api/statistic/${userId}/${days}`);
        axios.get(url)
            .then(response => {
                setStats(response.data.result);
            })
            .catch((error) => {
                console.error('Error on getting stats:', error);
            });
    }, 500), []);

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
        fetchProgress(user.id, days);
        
    }, [user, days, fetchProgress])

    return(
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="profile-card">
                    <h2>Your weekly calorie progress</h2>
                    <ResponsiveContainer width='100%' height={400}>
                        <LineChart data={stats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis label={{ value: 'Calories', angle: -90, position: 'insideLeft'}} />
                            <Tooltip />
                            <Line type="monotone" dataKey="calories" stroke="#8884d8" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <label>Days:</label>
                        <input 
                            type="range" 
                            id='days' 
                            name='days' 
                            min='1' 
                            max='30' 
                            onChange={(e) => setDays(e.target.value)}
                        /> 
                    </div>
                </div>
                <Link href='/'><button className="button">Back to main</button></Link>
            </div>
        </div>
    )
}

export default StatisticPage;