'use client';

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultComplexes from "./components/other/default_complexes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const user_url = 'http://localhost:5000/api/user/info';
  const [user, setUser] = useState('');
  const [complexes, setComplexes] = useState([]);
  const [stats, setStats] = useState('');
  const [todayTrainings, setTodayTrainings] = useState([]);
  const router = useRouter();

  const log_out = () => {
    const log_out_url = 'http://localhost:5000/api/user/log_out';
    axios.post(log_out_url, {}, {withCredentials: true})
    .then(response => {
      window.location.reload();
    })
    .catch(error => {
      console.error('Error on log out:', error);
    })
  }

  const isTrainingDone = async (userId, workoutId) => {
    try {
      const url = `http://localhost:5000/api/workout/done/${userId}/${workoutId}`;
      const response = await axios.get(url);
      return response.data.success; 
    } catch (error) {
      console.error('Error on getting training data:', error);
      return false; 
    }
  };

  const filterDoneTrainings = async () => {
      const results = await Promise.all(
        todayTrainings.map(async (training) => {
          const done = await isTrainingDone(user.id, training.workout.id);
          return { training, done };
        })
      );

      const notDone = results
        .filter(r => !r.done)
        .map(r => r.training);

      setTodayTrainings(notDone);
    };

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

    const complex_url = `http://localhost:5000/api/user/program/${user.id}`;
    const stats_url = `http://localhost:5000/api/user/stats/${user.id}`;

    axios.get(complex_url)
      .then(response => setComplexes(response.data.programs))
      .catch(error => console.error('Error on getting complexes:', error));

    axios.get(stats_url)
      .then(response => setStats(response.data.userStats))
      .catch(error => console.error('Error on getting user stats:', error));
  }, [user]);


  useEffect(() => {
    if (!complexes.length) return;

    const flattened = complexes.flatMap(p => {
      const workouts = p.program?.programWorkouts || [];
      return workouts.map(w => ({ ...w, program: p.program }));
    });

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    setTodayTrainings(flattened.filter(w =>
      (w.weekDay || '').toLowerCase() === today
    ));
  }, [complexes]);


  useEffect(() => {
    if (!todayTrainings.length || !user) return;
    filterDoneTrainings();
  }, [todayTrainings.length, user]);

  const premium_user = user.access === 'admin' || user.card_type === 'premium';

  const playlists = {
    Strength: 'https://open.spotify.com/embed/playlist/7EqUjzwIz8JvGnpUsQFpLi?utm_source=generator',
    Cardio: 'https://open.spotify.com/embed/playlist/7EqUjzwIz8JvGnpUsQFpLi?utm_source=generator'
  }

  const setTrainingDone = (trainingId) => {
    const url = 'http://localhost:5000/api/workout/finish';
    const values = {
      "trainingId": trainingId,
      "userId": user.id,
    }
    axios.post(url, values)
    .then(response => {
      toast.success("You've done this training");
      setTodayTrainings(prev => prev.filter(t => t.id !== trainingId));
      filterDoneTrainings();
    })
    .catch(error => {
      console.error('Error on doing training:', error);
      toast.error('Some error occured');
    })
  };

  return (
    <div className='container home'>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="home-nav">
          <Link href='/profile'><button className="home_button">Profile</button></Link>
          <Link href='/admin'><button className={`home_button ${user.access === 'admin' ? '' : 'invisible'}`}>Admin</button></Link>
          <button className="home_button" onClick={() => log_out()}>Log out</button>
        </div>
        <div className="profile-card">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {user && Object.keys(user).length > 0 && ( 
            <h3>
              Welcome, {user.name}
            </h3>
        )}
        </div>
        <div className={`training_cards_container ${todayTrainings.length > 0 ? 'invisible' : ''}`}>
          <DefaultComplexes />
        </div>
        <div className={`training_cards_container ${todayTrainings.length > 0 ? '' : 'invisible'}`}>
          <p>Your training(s) for today:</p>
          {todayTrainings.map(t => (
            <div key={t.id}>
              <Link href={`/training/${t.workout.id}`}>
                  <div className="training_card">{t.workout.name}</div>
              </Link>
              <button className="button" onClick={() => setTrainingDone(t.workout.id)}>Set as done</button>
            </div>
          ))}
          {premium_user && todayTrainings.length > 0 &&(
          <div className={`music_frame`}>
            <h4>Music we suggest you for better training:</h4>
            <iframe 
              data-testid="embed-iframe" 
              style={{borderRadius : "12px"}} 
              src={playlists[todayTrainings[0].workout.type]}
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>)}
          <Link href='/program'><p>Want to try something new?</p></Link>
        </div>
        {stats && <div className="stats">
          <p>For the time with us you've burned {parseInt(stats.totalCalories)} calories</p>
        </div> }
        <p>Don't forget your daily trainings</p>
        </div>
      </div>
    </div>
  );
}
