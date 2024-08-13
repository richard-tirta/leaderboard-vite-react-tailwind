
import { useState, useEffect, useCallback } from 'react'
import type { profileData } from "./Type";
import './App.css'
import Data from './Data'
import PointsModifier from './PointsModifier'

function App() {

  const [profiles, setProfiles] = useState<profileData>(Data.sort((a, b) => b.points - a.points));

  const onPointsUpdate = useCallback(
    (id: number, newPoints: number) => {
      const updatedProfiles = profiles.map((profile) => {
        if (profile.id === id) {
          const currentPoints = profile.points;
          return {
            ...profile,
            points: currentPoints + newPoints
          }
        }
        return profile;
      });
      
      setProfiles(updatedProfiles.sort((a, b) => b.points - a.points));
    }, [profiles]
  );

  return (
    <>
      <header>
        <h1>Leaderboard</h1>
        {/* Filter */}
      </header>
      <main>
        <section className="max-w-xl">
          <div className='grid items-center grid-cols-5 border-b py-4'>
            <div><p>Rank</p></div>
            <div className='w-10 sm:w-12'>

            </div>
            <div className='text-left'>
              <p>Name</p>
            </div>
            <div ><p>Points</p></div>
            <div>
              <p>Update points</p>
            </div>
          </div>
          {
            profiles.map((profile, index) => {
              return (
                <div key={profile.id} className='grid items-center grid-cols-5 border-b py-4'>
                  <div >
                    <p>{index + 1}</p>
                  </div>
                  <div className='w-10 sm:w-12'>
                    <img src={profile.avatar} alt={profile.name} className='rounded-full' />
                  </div>
                  <div className='text-left'>
                    <p>{profile.name}</p>
                  </div>
                  <div>
                    <p>{profile.points}</p>
                  </div>
                  <PointsModifier id={profile.id} points={profile.points} onPointsUpdate={onPointsUpdate} />
                </div>
              );
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
