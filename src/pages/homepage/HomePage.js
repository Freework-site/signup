import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            home page

            <Link to="/register">signup</Link>
        </div>
    )
}

export default HomePage
