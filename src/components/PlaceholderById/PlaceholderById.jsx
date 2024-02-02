import React from 'react'
import { useLocation } from 'react-router-dom'

const PlaceholderById = () => {
    const location = useLocation();

    console.log(location.state.completed, 'got data')

    console.log(location, 'got data')
    return (
        <>
            <h1>{`Placeholder By Id ${location.state.id}`}</h1>
            <div>
                <h4>{location.state.title}</h4>
                <p>{location.state?.completed}</p>
                <p>{location.state.userId}</p>

            </div>
        </>
  )
}

export default PlaceholderById