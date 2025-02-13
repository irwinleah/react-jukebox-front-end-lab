// src/App.jsx
import { useState, useEffect } from 'react'
import './App.css'

import TrackList from './components/TrackList/TrackList'
import TrackForm from './components/TrackForm/TrackForm'

import * as trackService from './services/trackService'

function App () {
  const [tracks, setTracks] = useState([])

    useEffect(() => {

      // define and then call the function immediatly
      async function fetchTracks(){
  
        const data = await trackService.index()
        // check your work before you do anything else!
        console.log(data, ' <- data')
        setTracks(data)
      }
  
      // calling the function
      fetchTracks()
  
    }, []);// empty array says run the use effect, 
    // when the components loads onto the dom
  
    // use case: We want all of the pets when the page loads
    async function createTrack(dataFromTheForm){
    // lift the dataFromTheForm
    // pass this function to the form component
    // and call it when the user submits the form
      try {
        const newTrack = await trackService.create(dataFromTheForm)
        console.log(newTrack, ' <- this is our newTrack')
        setTracks([...tracks, newTrack])
      } catch(err){
        console.log(err)
  
      }
    }
    return (
     <div className='App'>
      <TrackList tracks={tracks}/>
      <TrackForm createTrack={createTrack}/>
     </div> 
  )
};

export default App;
