import './Tracklist.css'


export default function TrackList(props) {
    const trackLis = props.tracks.map((track) => {
        return <li key={track._id}>{track.title} by: {track.artist}</li>
    })
    return (
        <section className={'track-list'}>
            <h1>Track List</h1>
            {trackLis.length !== 0 ? (
                <ul>
                    {trackLis}
                </ul>
            ) : (
                <h2>No Tracks yet!</h2>
            )}

        </section>

    )
}
