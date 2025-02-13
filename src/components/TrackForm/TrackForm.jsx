import { useState } from 'react'
import './TrackForm.css'

const initialState = {
    title: '',
    artist: ''
}

function TrackForm(props) {

    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.title]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        // this is coming from the app component
        // lifting the formData up the app, 
        // so we can make our POST fetch call to 
        // express api
        props.createTrack(formData)
        setFormData(initialState)
    }

    return (
        <form className='track-form' onSubmit={handleSubmit}>
            <button type='submit'>Add Track</button>
            <label htmlFor="title">Title:</label>
            <input type="text" name='title' id='title' value={formData.title} onChange={handleChange} />
            <label htmlFor="artist">Artist:</label>
            <input type="number" name='artist' id='artist' value={formData.artist} onChange={handleChange} />
        </form>
    )
}

export default TrackForm;