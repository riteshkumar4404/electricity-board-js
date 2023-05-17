import React, { useState } from 'react'

export default function SearchBox({ fetchById }) {
    const [searchId, setSearchId] = useState();

    return (
        <div className='flex space-x-10 m-5'>
            <input placeholder='Search by Appicant Id' className='shadow' onChange={(e) => setSearchId(e.target.value)}></input>
            <button className='bg-gray-400 rounded p-3' onClick={() => fetchById(searchId)}>Search</button>
        </div>
    )
}
